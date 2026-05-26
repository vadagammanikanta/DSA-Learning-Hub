const https = require('https');

module.exports = async function handler(req, res) {
  const API_KEY = process.env.GEMINI_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: 'API Key missing' });
  }

  const options = {
    hostname: 'generativelanguage.googleapis.com',
    port: 443,
    path: `/v1beta/models?key=${API_KEY}`,
    method: 'GET'
  };

  return new Promise((resolve) => {
    const googleReq = https.request(options, (googleRes) => {
      let responseBody = '';
      googleRes.on('data', (chunk) => {
        responseBody += chunk;
      });
      googleRes.on('end', () => {
        try {
          res.status(200).json(JSON.parse(responseBody));
          resolve();
        } catch (e) {
          res.status(500).json({ error: 'Parse error' });
          resolve();
        }
      });
    });

    googleReq.on('error', (error) => {
      res.status(500).json({ error: 'Request error' });
      resolve();
    });

    googleReq.end();
  });
};
