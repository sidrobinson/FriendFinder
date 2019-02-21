var express = require("express");
var path = require("path");

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 1738;

// express.json and express.urlEncoded make it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('css'));

app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);

// LISTENER
// The below code effectively "starts" our server

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "./survey.html"));
});

app.get("/gitHubRepo", function(req, res) {
  res.sendFile(path.join(__dirname, "./gitHubRepo.html"));
});

app.get("/apiFriendList", function(req, res) {
  res.sendFile(path.join(__dirname, "./apiFriendList.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});