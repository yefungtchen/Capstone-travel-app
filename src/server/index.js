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

const projectData = {};
const geonamesData = {};
const weatherbitData = {};
const pixabayData = {};

// Setting up the GET route (Client takes data from Server)
app.get("/", function (request, response) {
    response.sendFile("dist/index.html");
});

app.get("/xatar", function (request, response) {
    response.send({ Essen: "Köfte" });
});

// Sending destination information (projectData)
// app.post("/sendDestinationAndDay", function (request, response) {
//     console.log(request.body)
//     allData = request.body;
//     console.log(allData);
//     response.send(allData);
// });

// GeoNames Data
app.post("/geonamesData", function (request, response) {
    geonamesData = request.body;
    geonamesData.longitude = request.postalCodes[0].lng;
    geonamesData.latitude = request.postalCodes[0].lat;
    console.log(geonamesData);
    response.send(geonamesData);
});

// Weatherbit Data
app.post("/weatherbitData", function (request, response) {
    weatherbitData = request.body;
    weatherData.max_temp = request.body.max_temp;
    weatherData.min_temp = request.min_temp;
    console.log(weatherData);
    response.send(weatherData);
});
// Pixabay Data
app.post("/pixabayData", function (request, response) {
    pixabayData = request.body;
    pixabayData.picture = request.hits[0].webformatURL;
    console.log(pixabayData);
    response.send(pixabayData);
});

