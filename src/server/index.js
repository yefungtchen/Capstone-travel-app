const dotenv = require('dotenv');
dotenv.config();

var path = require("path");

// Requires Express to run server and routes
const express = require("express");
const app = express();

/** Initialize the main project folder
 *   This line of code connects our server-side code (the code in the server/index.js file)
 *   to our client-side code (the browser code written in the files housed in the dist folder).
 **/
app.use(express.static("dist"));

// Configuring that express use cors
const cors = require("cors");
app.use(cors());

/** Middleware
 *   "body-parser extract the entire body portion of an incoming request stream and exposes it on req.body."
 *   (Source: https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express)
 **/
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log("CAPSTONE Travel App listening on port 8080!");
});

// Setting up the GET route (Client takes data from Server)
app.get("/", function (request, response) {
    response.sendFile("dist/index.html");
});

// GET Test Route
app.get("/xatar", function(request,response){
    response.send({ essen: "einen Köftespieß" })
})

// Sending destination information
app.post("/sendDestinationAndDay", function (request, response) {
    console.log(request.body)
    allData = request.body;
    console.log(allData);
    response.send(allData);
});
