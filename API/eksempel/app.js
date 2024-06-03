document.addEventListener("DOMContentLoaded", () => {
    const weatherDiv = document.getElementById("weather");

    // Funksjon for å hente værdata
    async function fetchWeather() {
        try {
            // API URL (eksempel)
            const apiUrl = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58";

            // Fetch data fra API
            const response = await fetch(apiUrl, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
                }
            });

            // Sjekk om responsen er OK
            if (!response.ok) {
                throw new Error("Nettverksresponsen var ikke OK");
            }

            // Parse JSON data
            const weatherData = await response.json();

            // Oppdater HTML med værdata
            updateWeather(weatherData);
        } catch (error) {
            weatherDiv.textContent = `Det oppstod en feil: ${error.message}`;
        }
    }

    // Funksjon for å oppdatere HTML med værdata
    function updateWeather(data) {
        // Eksempel på å hente ut temperatur
        const timeseries = data.properties.timeseries;
        const firstTimepoint = timeseries[0];
        const temperature = firstTimepoint.data.instant.details.air_temperature;
        const windSpeed = firstTimepoint.data.instant.details.wind_speed;

        weatherDiv.innerHTML = `
            <p>Temperatur: ${temperature}°C</p>
            <p>Vindhastighet: ${windSpeed} m/s</p>
        `;
    }

    // Kall funksjonen for å hente værdata
    fetchWeather();
});
