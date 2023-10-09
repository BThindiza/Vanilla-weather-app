function formatDate(timestamp){
let date= new Date(timestamp);
let hours= date.getHours();
if (hours < 10){
    hours =`0${hours}`;
} 
let minutes= date.getMinutes();
if (minutes< 10){
    minutes =`0${hours}`;
} 
let days=["Sunday", "Monday", "Tuesday", "Wednesday" ,"Thursday","Friday","Saturday"];
let months =["January","February","March","April","May","June","July","August","September","October","November","December"];
let month = months[date.getMonth()];
let day =  days[date.getDay()];
return `${day} ${month}, ${hours}:${minutes}`;
}


function displayTemperature(response){
    let temperatureelement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElelment = document.querySelector("#date");
    temperatureelement.innerHTML= Math.round(response.data.main.temp);
cityElement.innerHTML= response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML= response.data.main.humidity;
windElement.innerHTML = math.round(response.data.wind.speed);
dateElelment.innerHTML= formatDate(response.data.dt*1000);
}

function search(event){
    event.preventDefault();
    let citySearchElement = document.querySelector("#city-search");
    console.log(cityElementSearchElement.value);
}

let apiKey ="3t1a5685d95o5fd95bdaaac3a43d5083";
let apiUrl="https://api.shecodes.io/weather/v1/current?lon=-9.13333&lat=38.7166&key=3t1a5685d95o5fd95bdaaac3a43d5083&units=metric"; 
axios.get(apiUrl).then(displayTemperature);

let form = document.querySelector("#form");
form.addEventListener("submit",search);