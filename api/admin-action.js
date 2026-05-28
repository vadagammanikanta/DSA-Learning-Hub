import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

function getAdminDb() {
  if (getApps().length === 0) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT || '{}');
    initializeApp({ credential: cert(serviceAccount) });
  }
  return getFirestore();
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // ── Security ──────────────────────────────────────────────────────────
  const adminSecret = process.env.ADMIN_SECRET;
  const { key, action, targetEmail } = req.body;

  if (!adminSecret || key !== adminSecret) {
    return res.status(401).json({ error: 'Unauthorized. Invalid admin secret.' });
  }

  if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
    return res.status(500).json({ error: 'FIREBASE_SERVICE_ACCOUNT env variable not set.' });
  }

  if (!action || !targetEmail) {
    return res.status(400).json({ error: 'Missing action or targetEmail in request body.' });
  }

  try {
    const db = getAdminDb();
    const usersRef = db.collection('users');
    const snapshot = await usersRef.where('email', '==', targetEmail).get();

    if (snapshot.empty) {
      return res.status(404).json({ error: 'User not found with the provided email.' });
    }

    const userDoc = snapshot.docs[0];

    if (action === 'MANUAL_UPGRADE') {
      await userDoc.ref.update({
        isPaid: true,
        paymentId: 'MANUAL_UPGRADE_ADMIN',
        paymentDate: new Date().toISOString()
      });

      return res.status(200).json({ success: true, message: `Successfully upgraded ${targetEmail} to lifetime premium.` });
    } else {
      return res.status(400).json({ error: 'Unknown action specified.' });
    }

  } catch (err) {
    console.error('[admin-action] Firestore error:', err);
    return res.status(500).json({ error: `Firestore error: ${err.message}` });
  }
}
