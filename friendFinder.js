let http = require("http");
let fs = require("fs");

// Server
let server = http.createServer(routes);

function routes(req, res) {
  const path = req.url;

  switch (path) {
    case "/":
      return home(req, res)
    case "/matches":
      return matches(req, res)
    case "/profile":
      return profile(req, res)
  }
}

// function for requests and responses  
function home(req, res) {

  fs.readFile(__dirname + "/index.html", function (err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function home(req, res) {

  // fs package to read our index.html file
  fs.readFile(__dirname + "/matches.html", function (err, data) {

    // respond to the client with the HTML page by specifically telling the browser that we are delivering
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });

  function home(req, res) {

    // fs package to read our index.html file
    fs.readFile(__dirname + "/profile.html", function (err, data) {

      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });

    // Starts our server
    server.listen(PORT, function () {
      console.log("Server is listening on PORT: " + PORT);
    });