var http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Travis!\n");
  })
  .listen(process.env.PORT || 1337);
console.log("Server running at http://127.0.0.1:1337/");
