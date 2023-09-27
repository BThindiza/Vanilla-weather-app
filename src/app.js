

function displayTemperature(response){
    console.log(response.data.main.temp);
    let temperatureelement = document.querySelector("#temperature");
    temperatureelement.innerHTML= Math.round(response.data.main.temp)
}
let apiKey ="3t1a5685d95o5fd95bdaaac3a43d5083";
let apiUrl="https://api.shecodes.io/weather/v1/current?lon={lon}&lat={lat}&key={key}"; 
axios.get(apiUrl).then(displayTemperature);