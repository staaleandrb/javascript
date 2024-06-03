function fetchWeather() {
    const weatherDiv = document.getElementById("weather");
    const apiUrl = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58";

    fetch(apiUrl, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
        }
    })
    .then(response => response.json())
    .then(data => {
        const temperature = data.properties.timeseries[5].data.instant.details.air_temperature;
        weatherDiv.textContent = `Temperatur: ${temperature}°C`;
    })
    .catch(error => {
        weatherDiv.textContent = `Det oppstod en feil: ${error.message}`;
    });
}

fetchWeather();
