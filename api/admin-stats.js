// Admin Stats Endpoint — returns upgrade count and member details
// Protected by ADMIN_SECRET env variable set in Vercel dashboard
// Usage: GET /api/admin-stats?key=YOUR_ADMIN_SECRET

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  // ── Security: validate admin secret key ──────────────────────────
  const adminSecret = process.env.ADMIN_SECRET;
  const providedKey = req.query.key;

  if (!adminSecret || providedKey !== adminSecret) {
    return res.status(401).json({ error: 'Unauthorized. Provide ?key=YOUR_ADMIN_SECRET' });
  }

  // ── Firebase Admin SDK via REST API (no SDK install needed) ──────
  const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID || 'dsa-flow-546f4';
  const FIREBASE_API_KEY    = process.env.FIREBASE_API_KEY    || 'AIzaSyAXGDzwz77q2l2Wm4HwE9rQwJQ2jXXLMEY';

  try {
    // Query Firestore REST API — get all documents in 'users' collection
    const firestoreUrl = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/users?key=${FIREBASE_API_KEY}&pageSize=500`;

    const firestoreRes = await fetch(firestoreUrl);

    if (!firestoreRes.ok) {
      throw new Error(`Firestore returned ${firestoreRes.status}: ${await firestoreRes.text()}`);
    }

    const firestoreData = await firestoreRes.json();
    const documents = firestoreData.documents || [];

    // Parse Firestore field format into plain objects
    const users = documents.map(doc => {
      const f = doc.fields || {};
      return {
        uid:         f.uid?.stringValue         || '',
        name:        f.name?.stringValue         || 'Unknown',
        email:       f.email?.stringValue        || '',
        whatsapp:    f.whatsapp?.stringValue     || '',
        isPaid:      f.isPaid?.booleanValue      || false,
        paymentId:   f.paymentId?.stringValue    || null,
        paymentDate: f.paymentDate?.integerValue || null,
        signupDate:  f.signupDate?.integerValue  || null,
        trialExpiry: f.trialExpiry?.integerValue || null,
      };
    });

    const upgradedUsers = users.filter(u => u.isPaid);
    const freeUsers     = users.filter(u => !u.isPaid);
    const trialActive   = freeUsers.filter(u => u.trialExpiry && parseInt(u.trialExpiry) > Date.now());
    const trialExpired  = freeUsers.filter(u => !u.trialExpiry || parseInt(u.trialExpiry) <= Date.now());

    return res.status(200).json({
      summary: {
        totalUsers:        users.length,
        upgradedMembers:   upgradedUsers.length,
        freeTrialActive:   trialActive.length,
        freeTrialExpired:  trialExpired.length,
        revenue:           `₹${upgradedUsers.length * 99}`,
        generatedAt:       new Date().toISOString()
      },
      upgradedMembers: upgradedUsers.map(u => ({
        name:        u.name,
        email:       u.email,
        whatsapp:    u.whatsapp,
        paymentId:   u.paymentId,
        paymentDate: u.paymentDate ? new Date(parseInt(u.paymentDate)).toLocaleString('en-IN') : null,
        signupDate:  u.signupDate  ? new Date(parseInt(u.signupDate)).toLocaleString('en-IN')  : null,
      })),
      freeUsers: freeUsers.map(u => ({
        name:       u.name,
        email:      u.email,
        whatsapp:   u.whatsapp,
        status:     parseInt(u.trialExpiry) > Date.now() ? '🟡 Trial Active' : '🔴 Trial Expired',
        signupDate: u.signupDate ? new Date(parseInt(u.signupDate)).toLocaleString('en-IN') : null,
      }))
    });

  } catch (err) {
    console.error('[admin-stats] Error:', err);
    return res.status(500).json({ error: `Failed to fetch stats: ${err.message}` });
  }
}
