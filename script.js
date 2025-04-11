const weather = document.getElementById('weather');

fetch('https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=b473fd53043a7c848e3b9ed5682323d2&units=metric')
.then(response => response.json ())
.then(data => {
    console.log(data);
    comsole.log(data.main.temp);
    weather.textContent = "Current Weather in Cancun : " +data.main.temp+" \u00B0C";
});



