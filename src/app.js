function formatDate(timestamp){
    
}

function displayTemperature(response){
    let temperatureelement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElelment.innerHTML("#date");
    temperatureelement.innerHTML= Math.round(response.data.main.temp);
cityElement.innerHTML= response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML= response.data.main.humidity;
windElement.innerHTML = math.round(response.data.wind.speed);
dateElelment.innerHTML="Friday. 12;00";
}

let apiKey ="3t1a5685d95o5fd95bdaaac3a43d5083";
let apiUrl="https://api.shecodes.io/weather/v1/temperature?lon=-9.13333&lat=38.7166&key=3t1a5685d95o5fd95bdaaac3a43d5083&units=metric"; 
axios.get(apiUrl).then(displayTemperature);