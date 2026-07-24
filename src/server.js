const { createServer } = require('./app');

const port = process.env.PORT || 3000;
const server = createServer();

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
