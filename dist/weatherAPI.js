import config from './config.js';
async function weatherAPI() {
    try {
        const city = 'Barcelona';
        const { key, baseUrl } = config.weatherApi;
        const apiUrl = `${baseUrl}/current.json?key=${key}&q=${city}&aqi=no`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Weather API request failed');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching weather:', error);
        return null;
    }
}
async function displayWeather() {
    const weatherData = await weatherAPI();
    if (!weatherData) {
        console.error('No weather data received');
        return;
    }
    const weatherElement = document.getElementById('weather-display');
    if (!weatherElement) {
        console.error('Weather element not found');
        return;
    }
    const temp = weatherData.current.temp_c;
    const condition = weatherData.current.condition.text;
    const icon = weatherData.current.condition.icon;
    const city = weatherData.location.name;
    weatherElement.innerHTML = `
    <div class="weather-info">
      <img src="${icon}" alt="${condition}" class="weather-icon" />
      <div class="weather-details">
        <span class="temperature">${temp}°C</span>
        <span class="condition">${condition}</span>
        <span class="city">${city}</span>
      </div>
    </div>
  `;
}
// Update weather every 5 minutes
displayWeather();
setInterval(displayWeather, 5 * 60 * 1000);
//# sourceMappingURL=weatherAPI.js.map