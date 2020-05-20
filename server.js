// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
// ** Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/** Middleware
 *   "body-parser extract the entire body portion of an incoming request stream and exposes it on req.body."
 *   (Source: https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express)
 **/
var bodyParser = require("body-parser");

// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** Cors for cross origin allowance
 *   CORS is a node.js package for providing a Connect/Express middleware that can be
 *   used to enable CORS with various options.
 **/
const cors = require("cors");

// Here we are configuring express to use cors
app.use(cors());

/** Initialize the main project folder
 *   This line of code connects our server-side code (the code in the server.js file)
 *   to our client-side code (the browser code written in the files housed in the website folder).
 **/
app.use(express.static("website"));

// Setting up the GET Route (Client takes data from Server) Returns the projectData object
app.get("/allData", function (req, res) {
  res.json(projectData);
  res.end();
});

// Setting up the POST Route (Client sending data to Server)
app.post("/addWeather", function (req, res) {
  // Attach the data to the Post Request on the req.body
  projectData.date = req.body.date;
  projectData.temp = req.body.temp;
  projectData.userEntry = req.body.userEntry;
  res.json({ "status": "ok" });
  console.log(projectData);
  res.end();
});

// Setup Server
const port = 8000;

const server = app.listen(port, listening);

// Server Callback
function listening() {
  console.log("server running");
  console.log(`running on localhost: ${port}`);
}
