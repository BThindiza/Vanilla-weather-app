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
let day =  days[date.getDay()];
return `${day} ${hours}:${minutes}`;
}

function displayForescast(response){
    let forecast = response.data.daily;
let forecastElement = document.querySelector("#weather-forecast");
let forecastHTML =`<div class = "row">`;
forecast.forEach(function(_forecast,index){
    if (index < 6){
        forecastHTML = forecastHTML + ` < div class ="col-2">
        <div class ="weather-forecast-date">${formatDay (forecastDqay.dt)}</div>
        <img src = "http://openweathermap.org/img/wn/${
            forecastDay.weather[0].icon
          }@2x.png"
          alt=""
          width="42"
        />
        <div class="weather-forecast-temperatures">
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
    let apiKey ="6ee72f51667c1ac4a6bc6bfa1cc";
    let apiUrl =`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForescast);
}

function displayTemperature(response){
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElelment = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");
    let celsiusTemperature =response.data.main.temp;
        temperatureElement.innerHTML= Math.round(celsiusTemperature);
cityElement.innerHTML= response.data.city;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML= response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed * 3.6);
dateElelment.innerHTML= formatDate(response.data.time*1000);
iconElement.setAttribute("alt",response.data.weather[0].description);
getForecast(response.data.coord);
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

 let form =document.querySelector("#form");
 form.addEventListener("submit",handleSubmit);

search("Polokwane");