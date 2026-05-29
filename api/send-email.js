import nodemailer from 'nodemailer';

const ADMIN_EMAIL = 'dsa.flow@outlook.com';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, name, whatsapp, paymentId, type } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: 'Missing email or name' });
  }

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const isWelcome = type === 'welcome';

  const memberSubject = isWelcome 
    ? "Welcome to dsa.flow! 🚀 Start your DSA Journey" 
    : "Welcome to dsa.flow Premium! 🚀";

  const memberHtml = isWelcome ? `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background: #0b0f19; color: #f3f4f6;">
      <h2 style="color: #00e5ff; border-bottom: 2px solid #00e5ff; padding-bottom: 8px;">Welcome to dsa.flow, ${name}! 🎉</h2>
      <p style="font-size: 1.1rem; line-height: 1.5;">Your free account has been successfully created and your <strong>24-hour Free Trial</strong> is now active.</p>
      <div style="background: rgba(255,255,255,0.05); padding: 16px; border-radius: 6px; margin: 18px 0; border: 1px solid rgba(255,255,255,0.1);">
        <p style="margin: 0 0 8px 0;"><strong>Account Details:</strong></p>
        <ul style="margin: 0; padding-left: 20px;">
          <li style="margin-bottom: 4px;"><strong>Registered Email:</strong> ${email}</li>
          <li style="margin-bottom: 4px;"><strong>WhatsApp Contact:</strong> ${whatsapp || 'N/A'}</li>
          <li style="margin-bottom: 4px;"><strong>Support:</strong> <a href="mailto:${ADMIN_EMAIL}" style="color: #00e5ff;">${ADMIN_EMAIL}</a></li>
        </ul>
      </div>
      <p style="line-height: 1.5;">Try out the Elite A-Z DSA roadmap, code fetcher, visualizer, and online compiler. If you like the platform, you can upgrade to Premium at any time for lifetime access!</p>
      <p style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 12px; margin-bottom: 0;">Best regards,<br/><strong>dsa.flow Team</strong></p>
    </div>
  ` : `
    <div style="margin:0; padding:0; background:#070810; font-family:'Segoe UI',Arial,sans-serif; color:#f0f2ff;">
      <div style="max-width:600px; margin:20px auto; background:#0f1120; border:1px solid rgba(255,255,255,0.08); border-radius:16px; overflow:hidden; box-shadow:0 20px 40px rgba(0,0,0,0.5);">
        
        <!-- Header / Branding -->
        <div style="background:linear-gradient(135deg, #7c4dff, #00b0ff); padding:32px 24px; text-align:center; position:relative;">
          <div style="font-size:2.2rem; font-weight:800; color:#ffffff; letter-spacing:-1px; margin-bottom:6px;">dsa.flow</div>
          <div style="font-size:0.95rem; color:rgba(255,255,255,0.85); text-transform:uppercase; letter-spacing:1px; font-weight:600;">Lifetime Premium Activated</div>
        </div>

        <!-- Body Content -->
        <div style="padding:32px 24px;">
          <h2 style="font-size:1.6rem; font-weight:800; color:#ffffff; margin:0 0 16px; text-align:center;">Congratulations, ${name}! 🎉</h2>
          <p style="font-size:1.05rem; line-height:1.6; color:#9aa0c0; text-align:center; margin:0 0 24px;">
            You have successfully upgraded your account. You are now officially a premium lifetime member of dsa.flow. Welcome to the elite tier!
          </p>

          <!-- Core Benefits Grid -->
          <div style="margin-bottom:30px;">
            <div style="font-size:0.85rem; text-transform:uppercase; color:#7c4dff; font-weight:800; letter-spacing:1px; margin-bottom:12px; border-bottom:1px solid rgba(255,255,255,0.06); padding-bottom:6px;">Your Premium Benefits:</div>
            
            <div style="margin-bottom:12px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.04); border-radius:8px; padding:12px 16px;">
              <span style="font-size:1.2rem; margin-right:8px; vertical-align:middle;">🗺️</span>
              <strong style="color:#ffffff;">450+ Curated Problems:</strong> Full lifetime access to all 16 learning steps.
            </div>
            
            <div style="margin-bottom:12px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.04); border-radius:8px; padding:12px 16px;">
              <span style="font-size:1.2rem; margin-right:8px; vertical-align:middle;">🧠</span>
              <strong style="color:#ffffff;">Interactive 3D Visualizers:</strong> Real-time animated Sorting, Trees, and Graphs.
            </div>
            
            <div style="margin-bottom:12px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.04); border-radius:8px; padding:12px 16px;">
              <span style="font-size:1.2rem; margin-right:8px; vertical-align:middle;">💻</span>
              <strong style="color:#ffffff;">Monaco Coding Arena:</strong> Write, compile, and run code instantly.
            </div>
            
            <div style="margin-bottom:12px; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.04); border-radius:8px; padding:12px 16px;">
              <span style="font-size:1.2rem; margin-right:8px; vertical-align:middle;">🎯</span>
              <strong style="color:#ffffff;">Placement Quiz Engine:</strong> Timed practice tests to mirror company assessments.
            </div>
          </div>

          <!-- Transaction Card -->
          <div style="background:rgba(124,77,255,0.04); border:1px solid rgba(124,77,255,0.15); border-radius:12px; padding:20px; margin-bottom:30px;">
            <div style="font-size:0.9rem; font-weight:700; color:#00b0ff; margin-bottom:10px;">Payment Information</div>
            <table style="width:100%; border-collapse:collapse; font-size:0.88rem; color:#9aa0c0;">
              <tr>
                <td style="padding:4px 0;"><strong>Receipt ID:</strong></td>
                <td style="padding:4px 0; text-align:right; font-family:monospace; color:#ffffff;">${paymentId}</td>
              </tr>
              <tr>
                <td style="padding:4px 0;"><strong>Access Plan:</strong></td>
                <td style="padding:4px 0; text-align:right; color:#ffffff;">Lifetime Premium (One-Time)</td>
              </tr>
              <tr>
                <td style="padding:4px 0;"><strong>WhatsApp Alerts:</strong></td>
                <td style="padding:4px 0; text-align:right; color:#ffffff;">${whatsapp}</td>
              </tr>
            </table>
          </div>

          <!-- CTA Button -->
          <div style="text-align:center; margin-bottom:20px;">
            <a href="https://dsa-learning-hub-delta.vercel.app" target="_blank" style="display:inline-block; background:linear-gradient(135deg, #7c4dff, #6b3de8); color:#ffffff; font-weight:700; font-size:1rem; text-decoration:none; padding:14px 28px; border-radius:8px; box-shadow:0 8px 20px rgba(124,77,255,0.3); transition:all 0.2s;">
              🚀 Start Coding Now
            </a>
          </div>

        </div>

        <!-- Footer -->
        <div style="background:#070810; padding:24px; text-align:center; border-top:1px solid rgba(255,255,255,0.05); font-size:0.8rem; color:#555a78;">
          <p style="margin:0 0 8px;">Need assistance? We are here for you.</p>
          <p style="margin:0 0 12px;">Support: <a href="mailto:${ADMIN_EMAIL}" style="color:#00b0ff; text-decoration:none;">${ADMIN_EMAIL}</a></p>
          <p style="margin:0; font-size:0.75rem;">© 2026 dsa.flow. All rights reserved.</p>
        </div>

      </div>
    </div>
  `;

  const adminSubject = isWelcome 
    ? `🚨 New User Registered: ${name}`
    : `🚨 New Premium Upgrade: ${name}`;

  const adminHtml = isWelcome ? `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
      <h2>New User Registration 📝</h2>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>WhatsApp:</strong> ${whatsapp || 'N/A'}</li>
        <li><strong>Date:</strong> ${new Date().toISOString()}</li>
      </ul>
    </div>
  ` : `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
      <h2>New Premium Upgrade 💳</h2>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>WhatsApp:</strong> ${whatsapp}</li>
        <li><strong>Payment ID:</strong> ${paymentId}</li>
        <li><strong>Date:</strong> ${new Date().toISOString()}</li>
      </ul>
    </div>
  `;

  if (emailUser && emailPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // SSL/TLS
        auth: {
          user: emailUser,
          pass: emailPass
        }
      });

      // Send to Member
      await transporter.sendMail({
        from: `"dsa.flow" <${emailUser}>`,
        to: email,
        subject: memberSubject,
        html: memberHtml
      });

      // Send to Admin
      await transporter.sendMail({
        from: `"dsa.flow" <${emailUser}>`,
        to: ADMIN_EMAIL,
        subject: adminSubject,
        html: adminHtml
      });

      return res.status(200).json({ success: true });
    } catch (e) {
      console.error('[dsa.flow] SMTP send failed:', e.message);
      return res.status(500).json({ error: `Email send failed: ${e.message}` });
    }
  } else {
    console.info(`[EMAIL SIM] To: ${email} | Subject: ${memberSubject}`);
    console.info(`[EMAIL SIM] To Admin: ${ADMIN_EMAIL} | Subject: ${adminSubject}`);
    return res.status(200).json({ success: true, message: 'Email simulated (set EMAIL_USER and EMAIL_PASS to activate)' });
  }
}
