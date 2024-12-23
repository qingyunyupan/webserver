import http from 'http';

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

// Listening on port 3000
server.listen(3000, () => {
  console.log('Server running at ccq');
});

