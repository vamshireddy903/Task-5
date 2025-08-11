const http = require('http');

// Define the hostname and port
const hostname = '0.0.0.0';  // Listen on all network interfaces
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set response headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Respond with message
  res.end('Hello, World!\n');
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
