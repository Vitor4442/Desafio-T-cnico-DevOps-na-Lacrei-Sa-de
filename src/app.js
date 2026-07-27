const http = require('node:http');

function createServer() {
  return http.createServer((req, res) => {
    if (req.url === '/status' && req.method === 'GET') {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });

      res.end(JSON.stringify({ status: 'ok' }));
      return;
    }

    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({ error: 'Not Found' }));
  });
}

module.exports = { createServer };