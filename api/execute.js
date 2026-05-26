const https = require('https');

const LANG_MAP = {
  'javascript': 'nodejs-20.17.0',
  'python': 'cpython-3.12.7',
  'cpp': 'gcc-13.2.0',
  'java': 'openjdk-jdk-21+35',
  'c': 'gcc-head-c',
  'csharp': 'mono-head',
  'go': 'go-head',
  'rust': 'rust-head',
  'ruby': 'ruby-head',
  'php': 'php-head',
  'swift': 'swift-head',
  'kotlin': 'kotlin-head'
};

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { language, code, stdin } = req.body;

  if (!language || !code) {
    return res.status(400).json({ error: 'Missing language or code' });
  }

  const compiler = LANG_MAP[language];
  if (!compiler) {
    return res.status(400).json({ error: `Unsupported language: ${language}` });
  }

  const payload = JSON.stringify({
    compiler,
    code,
    stdin: stdin || ""
  });

  const options = {
    hostname: 'wandbox.org',
    port: 443,
    path: '/api/compile.json',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  return new Promise((resolve) => {
    const wandboxReq = https.request(options, (wandboxRes) => {
      let body = '';
      wandboxRes.on('data', (chunk) => body += chunk);
      wandboxRes.on('end', () => {
        try {
          const data = JSON.parse(body);
          
          let statusText = 'Success';
          let errorText = '';

          // Parse Wandbox exit status and signals
          if (data.status === '0') {
            statusText = 'Success';
          } else if (data.status === '137' || data.signal === 'SIGKILL' || data.signal === 'SIGTERM') {
            statusText = 'Time Limit Exceeded (TLE)';
            errorText = 'Execution timed out (Time Limit Exceeded).';
          } else if (data.compiler_error && data.compiler_error.trim().length > 0) {
            statusText = 'Compilation Error';
            errorText = data.compiler_error;
          } else {
            statusText = 'Runtime Error';
            errorText = data.program_error || data.program_message || 'Process exited with non-zero status';
          }

          res.status(200).json({
            status: statusText,
            stdout: data.program_output || '',
            stderr: data.program_error || '',
            output: data.program_message || data.program_output || '',
            compileOutput: data.compiler_message || data.compiler_output || '',
            error: errorText,
            code: data.status ? parseInt(data.status, 10) : 0,
            signal: data.signal || ''
          });
          resolve();
        } catch (e) {
          console.error("Wandbox parse error:", e);
          res.status(500).json({ error: 'Failed to parse execution output' });
          resolve();
        }
      });
    });

    wandboxReq.on('error', (err) => {
      console.error("Wandbox connection error:", err);
      res.status(500).json({ error: 'Code execution service connection timed out' });
      resolve();
    });

    wandboxReq.write(payload);
    wandboxReq.end();
  });
};
