fetch('https://api.openweathermap.org/data/2.5/weather?q=Cancun&APPID=b473fd53043a7c848e3b9ed5682323d2&units=metric')
.then(response => response.json ())
.then(data => {
    console.log(data);
    console.log(data.main.temp);
    weather.textContent = "Current Weather in Cancun : " +data.main.temp+" \u00B0C";
});

const iconCode = data.weather[0].icon;
const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
document.getElementById('weathericon').src = iconUrl;
document.getElementById('weathericon').alt = data.weather[0].description;
console.log("Weather icon url", iconUrl);



/* does not work */

