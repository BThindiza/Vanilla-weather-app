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

function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElelment = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");

    let celsiusTemperature =response.data.main.temp;
    
        temperatureElement.innerHTML= Math.round(celsiusTemperature);
cityElement.innerHTML= response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML= response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed * 3.6);
dateElelment.innerHTML= formatDate(response.data.time*1000);
iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@01d.png`);
iconElement.setAttribute("alt",response.data.weather[0].description);

getForecast(response.data.coord);

}

function search(city){
    let apiKey ="6ee72f51667c1ac4a6bc6bfa1cc12d42";
let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
}
function handleSubmit(event) {
    event.preventDefault();
    let cityElement = document.querySelector("#city");
    search(cityElement.value);
}
 function displayFahrenheitTemperature(event){
    event.preventDefault();
    celsiusLink.classList.remove("active");
    fahrenheitLink.classList.add("active");
    let temperatureElement = document.querySelector("#temperature");
    let fahrenheitTemperature =(celsiusTemperature * 9)/ 5 + 32;
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
 }
 function displayCelsiusTemperature(event){
    event.preventDefault();
    fahrenheitLink.classList.remove("active");
    celsiusLink.classList.add("active");
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(celsiusTemperature);
 }


let form =document.querySelector("#form");
 form.addEventListener("submit",handleSubmit);
 
 search("Polokwane");

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click",displayFahrenheitTemperature);

let celsiusLink = document.querySelector("celsius-link");
celsiusLink.addEventListener("click",displayCelsiusTemperature);

