let http = require("http");
let fs = require("fs");

// Server
let PORT = 9000;
const server = http.createServer(routes);

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end(" " + request.url);
}

// function for requests and responses 
function routes(req, res) {
  const path = req.url;
  console.log("hello");
  console.log(path);

  switch (path) {
    case "/":
      return function (req, res) {
        console.log("hello from index.html route!");
        fs.readFile(__dirname + "/index.html", function (err, data) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        });
      }
    case "/survey":
      return function (req, res) {
        fs.readFile(__dirname + "/survey.html", function (err, data) {
          // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        });
      }

    case "/apiFriendsList":
      return function (req, res) {
        fs.readFile(__dirname + "/apiFriendList.html", function (err, data) {
          // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);

        });
      }

  case "/gitHubRepo":
      return function (req, res) {
        fs.readFile(__dirname + "/gitHubRepo.html", function (err, data) {
          // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        });
      }

  }

}
  // Starts our server
  server.listen(PORT, function () {
    console.log("Server linstening ");
  });