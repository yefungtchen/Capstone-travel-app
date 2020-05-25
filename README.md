# FEND CAPSTONE Travel App

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI.
In this project we used all the previous knowledge which we gained from the Udacity course.

In the form fields you can add your travel destination and your start and end date.
If you click on "Let's go" the geonames api will be triggered. You receive two datas from geonames: latitude and longitude.
Those two datas will be needed for the weatherbit api. The weather forecast will be determined by latitude and longitude.
The last api I used here is the pixabay api. You will get a piture of the city you put into the destination in the form field.



## What this project includes
Working with webpack
- Entry points, dist folder, loaders, plugins, mode, other tools
- Sass, Jest, Weatherbit API, Pixabay API, GeoNames API
- fetch() api, working with the DOM and Node.js

## How to run
Open your terminal and

npm install to install all needed node packages

npm run build-dev for development environment
npm run build-prod fore production environment
npm start to run the server on http://localhost:8080/