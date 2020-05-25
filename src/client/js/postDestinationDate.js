// GeoNames API
const geonames_baseURL = "http://api.geonames.org/postalCodeSearchJSON?";
// const countryCode = "&country=DE&";
const geoParams = "placename=";
const geoParam2 = "&maxRows=1&username="
const username = "fungieren";

// WeatherBit API
const weatherbit_baseURL = "https://api.weatherbit.io/v2.0/forecast/daily";
const weatherbit_APIKey = "3d22158619f04f0a963e77531c9f4503";

// Pixabay API
const pixabay_baseURL = "https://pixabay.com/api/";
const pixabay_APIKey = "16700254-b30dd28cbf729394156c7695e";

let longitude = 0;
let latitude = 0;


// POST-Route client to server: sending destination
const postDestinationDate = async () => {
    // Store destination and date which was entered by the user
    const destination = document.getElementById("destination").value;
    const geoNamesUrl = geonames_baseURL + geoParams + destination + geoParam2 + username;
    console.log("GET Destination Date Function");
    console.log(geoNamesUrl);

    await fetch(geoNamesUrl, {
        method: "GET"
    })
        .then((response) => response.json())
        .then((sendedData) => {
            longitude = sendedData.postalCodes[0].lng;
            latitude = sendedData.postalCodes[0].lat;
            fetchWeatherbitApi(latitude, longitude);
            fetchPixabayApi(destination);
        }).catch((error) => {
            console.log("Sending Destination and Date failed", error)
        });
}

// Getting the date for latitude and longitude from the GeoNames API
// ?lat=38.0&lon=-78.0&start_date=2020-05-19&end_date=2020-05-20&threshold=63&units=I&key=API_KEY&tp=daily
const fetchWeatherbitApi = async (latitude, longitude) => {
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    let days = ((new Date(endDate).getTime() - new Date(startDate).getTime()) / 86400000);

    await fetch(weatherbit_baseURL + "?lat=" + latitude + "&lon=" + longitude + "&start_date="
        + startDate + "&end_date" + endDate + "&key=" + weatherbit_APIKey + "&tp=daily", {
        method: "GET"
    })
        .then((response) => response.json())
        .then((sendedData) => {
            let data = []
            for (let i = 0; i <= days; i++) {
                data.push(sendedData.data[i + 1])
            }
            console.log(data);
            let temperatureString = "";

            data.forEach(element => {
                temperatureString += "Date: " + element.datetime + "<br>";
                temperatureString += "Max Temperature: " + element.max_temp + "°C<br>";
                temperatureString += "Min Temperature: " + element.min_temp + "°C<br><br>";
            });
            document.getElementById("infobox").innerHTML = temperatureString;
        }).catch((error) => {
            console.log("Sending weather failed", error)
        });
}

const fetchPixabayApi = async (destination) => {
    const pixabayUrl = pixabay_baseURL + "?key=" + pixabay_APIKey + "&q=" + destination + "&image_type=photo" + "&min_width=250px&min_height=250px";

    await fetch(pixabayUrl, {
        method: "GET"
    })
        .then((response) => response.json())
        .then((sendedData) => {
            console.log(sendedData);
            let pixaUrl = sendedData.hits[0].webformatURL;
            document.getElementById("pixabay").innerHTML = `<img src="` + pixaUrl + `" alt="Girl in a jacket" width="250" height="250"></img>`
        }).catch((error) => {
            console.log("Sending picture failed", error)
        });
}

export { postDestinationDate }