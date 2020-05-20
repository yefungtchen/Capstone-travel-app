/**  Global Variables
 *    Please use German postal codes to test
 *    You can use "67059" for Ludwigshafen am Rhein, Germany
 *    Or "60439" for Frankfurt am Main, Germany
 *    Build the code with the help of the UDACITY FEND course.
 *    Created everything step-by-step with the codes which were provided by the course material
 **/
const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
const api_Key = "b571e009c37ae154cf536c52b84b2f1c";
const countryCode = "de";
const queryParameter = "&appid=";
const unitConversion = "&units=metric";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1) + "." + d.getDate() + "." + d.getFullYear();

// Async GET (Client takes data from Server)
const getData = async (baseURL, zipCode, api_Key) => {
  // Open Weather Map API
  const getReq = await fetch(baseURL + zipCode + "," + countryCode + queryParameter + api_Key + unitConversion)
  /** Solution for the CORS blocked policy. Found solution in Peer Project Help.
   *  Detailed explanation
   *  https://www.freecodecamp.org/forum/t/calling-openweathermap-api-is-blocked-due-to-cors-header-access-control-allow-origin-missing/191868
   *  https://www.freecodecamp.org/forum/t/cross-domain-calls-why-sometimes-needs-callback/177690
  **/
  // headers.delete()
  console.log(getReq);

  try {
    const weatherData = await getReq.json();
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    console.log("An error occured", error);
  }
};

// Async POST request (Client sending data to Server)
const postData = async (url = "", data = {}) => {
  const postReq = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  try {
    const newData = await postReq.json();
    console.log(newData);
    return newData;
  } catch (error) {
    // appropriately handle the error
    console.log("An error occured", error);
  }
};

// Updating the UI is the last thing we do. This function depends on previous data
const uiUpdate = async () => {
  const uiRequest = await fetch("http://localhost:8000/allData");
  try {
    const updateData = await uiRequest.json();
    // Accessing the DOM Elements
    document.getElementById("date").innerHTML = updateData.date;
    document.getElementById("temp").innerHTML = updateData.temp;
    document.getElementById("content").innerHTML = updateData.userEntry;
  } catch (error) {
    console.log("An error occured", error);
  }
}

// Click Event "Generate" : Used Tutorial: FEND Udacity Async JS Lesson 4: Adding Fetch to Your Code
document.getElementById("generate").addEventListener("click", executeAction);

function executeAction(e) {
  // Accessing the DOM Elements
  const feelings = document.getElementById("feelings").value;
  const zipCode = document.getElementById("zip").value;
  console.log("1. Date: " + newDate);
  console.log("2. Zipcode: " + zipCode);
  console.log("3. The Feelings: " + feelings);
  // 1. Get the data from the API first
  getData(baseURL, zipCode, api_Key)
    // 2. then run the function and post the received data
    .then(function (data) {
      postData('http://localhost:8000/addWeather', { temp: data.main.temp, date: newDate, userEntry: feelings })
        // 3. then run the function and update the UI
        .then(function () {
          uiUpdate()
        })
    })
}