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
let months = ["January","February","March","April","May","June","July", "August","September","October","November","December"];
let month = months[date.getMonth()];
let day =  days[date.getDay()];
return `${day} ${month}, ${hours}:${minutes}`;
}
function formatDay(timestamp){
    let date =new Date(timestamp * 1000);
    let day =date.getDay();
    let days =["Sun", "Mon","Tues","Wed","Thurs","Fri","Sat"];
    return days[day];
}
function displayForescast(response){
    let forecast = response.data.daily;
let forecastElement = document.querySelector("#weather-forecast");
let forecastHTML =`<div class = "row">`;
forecast.forEach(function(forecast,index){
    if (index < 6){
        forecastHTML = forecastHTML + ` < div class ="col-2">
        <div class ="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
        <img src = "http://openweathermap.org/img/wn/${
            forecastDay.weather[0].icon
          }@2x.png"
          alt=""
          width="42"
        />
        <div class="weather-forecast-temperature">
        <span class = "weather-forecast-temperature-max"> ${Math.round(forecastDay.temp.max)} °</span>
        <span class ="weather-forecast-temperature-min">${Math.round(forecastDay.temp.min)}° </span>
        </div>
        </div>
        `;
}
});

forecastHTML = forecastHTML + `</div>`;
forecastElement.innerHTML = forecastHTML;
}
function getForecast(coordinates){
    let apiKey ="3t1a5685d95o5fd95bdaaac3a43d5083";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=3t1a5685d95o5fd95bdaaac3a43d5083&units=metric`;
    axios.get(apiUrl).then(displayForescast);
}

function displayTemperature(response){
    let temperatureelement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElelment = document.querySelector("#date");


    temperatureelement.innerHTML= Math.round(response.data.temperature.current);
cityElement.innerHTML= response.data.city;
descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML= response.data.main.humidity;
windElement.innerHTML = math.round(response.data.wind.speed);
dateElelment.innerHTML= formatDate(response.data.time*1000);
celsiusTemperature= response.data.temperature.current;
}

function search(city){
    let apiKey ="6ee72f51667c1ac4a6bc6bfa1cc12d42";
let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event){
    event.preventDefault();
    let citySearchElement = document.querySelector("#city-search");
    search(citySearchElement.value);
}
 function displayFahrenheitTemperature(event){
    event.preventDefault();
    let temperatureElement= document.querySelector("#temperature");
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    let FahrenheitTemperature =(celsiusTemperature *9 ) /5 * 32;

    temperatureElement.innerHTML =Math.round(FahrenheitTemperature);
 }

 function  displayCelsiusTemperature(event){
event.preventDefault();
celsiusLink.classList.add("active");
fahrenheitLink.classList.remove("active");
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = Math.round(celsiusTemperature);
 }
let celsiusTemperature =null;

let form = document.querySelector("#form");
form.addEventListener("submit",handleSubmit);

let fahrenheitLink= document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink= document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

search("Polokwane");