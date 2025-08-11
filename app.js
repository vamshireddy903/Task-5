const http = require('http');

// Define the hostname and port
const hostname = '0.0.0.0';  // Listen on all network interfaces
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set response headers to HTML
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  // HTML content
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hello World</title>
      <style>
        body {
          background-color: #f0f8ff;
          font-family: Arial, sans-serif;
          color: #333;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        h1 {
          color: #007acc;
          font-size: 3rem;
          text-shadow: 1px 1px 2px #aaa;
        }
      </style>
    </head>
    <body>
      <h1>Hello, World!</h1>
    </body>
    </html>
  `;

  // Respond with HTML content
  res.end(html);
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
