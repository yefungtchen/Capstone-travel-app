// GeoNames API
const geonames_baseURL = "api.geonames.org/postalCodeSearchJSON?";
// GeoNames Username needs to be put into .env later
const username = "fungieren";

// WeatherBit API
const weatherbit_baseURL = "";
const weatherbit_APIKey = "";

// Pixabay API
const pixabay_baseURL = "";
const pixabay_APIKey = "";

const getGeoNamesData = async (destination) => {
    if(!destination) {
        console.log("Please enter your destination")
    } else {
        console.log("You are going to " + destination);
        const getGeonameData = async (geonames_baseURL, username) => {
            const getGeoRequest = await fetch()
            console.log(getGeoRequest);
        
            try {
                const geoData = await getGeoRequest.json();
                console.log(geoData);
                return geoData;
            } catch (error) {
                console.log("An error occured", error)
            }
        };     
    }
}
