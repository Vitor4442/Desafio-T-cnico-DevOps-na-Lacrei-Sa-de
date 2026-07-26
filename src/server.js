const fs = require('fs');
const https = require('https');
const path = require('path');
const { createServer } = require('./app');

const port = process.env.PORT || 443;
const requestHandler = createServer(); // Agora recebe a função (req, res)

const options = {
  key: fs.readFileSync(path.join(__dirname, '../certs/server.key')),
  cert: fs.readFileSync(path.join(__dirname, '../certs/server.cert'))
};

const server = https.createServer(options, requestHandler);

server.listen(port, () => {
  console.log(`Server running on port ${port} (HTTPS)`);
});