const https = require('https');

module.exports = async function handler(req, res) {
  const API_KEY = process.env.GEMINI_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: 'API Key missing' });
  }

  const payload = JSON.stringify({
    contents: [{ role: 'user', parts: [{ text: 'Say hi' }] }]
  });

  const options = {
    hostname: 'generativelanguage.googleapis.com',
    port: 443,
    path: `/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  return new Promise((resolve) => {
    const googleReq = https.request(options, (googleRes) => {
      let responseBody = '';
      googleRes.on('data', (chunk) => {
        responseBody += chunk;
      });
      googleRes.on('end', () => {
        try {
          res.status(googleRes.statusCode).json({
            statusCode: googleRes.statusCode,
            body: JSON.parse(responseBody)
          });
          resolve();
        } catch (e) {
          res.status(500).json({ error: 'Parse error', raw: responseBody });
          resolve();
        }
      });
    });

    googleReq.on('error', (error) => {
      res.status(500).json({ error: 'Request error' });
      resolve();
    });

    googleReq.write(payload);
    googleReq.end();
  });
};
