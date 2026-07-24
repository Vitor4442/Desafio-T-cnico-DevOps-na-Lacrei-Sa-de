const test = require('node:test');
const assert = require('node:assert/strict');
const { createServer } = require('../src/app');

test('GET /status returns 200 and a healthy payload', async () => {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, resolve));

  const address = server.address();
  const port = typeof address === 'object' && address ? address.port : 0;

  try {
    const response = await fetch(`http://127.0.0.1:${port}/status`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.deepEqual(body, { status: 'ok' });
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});
