// Project Scenario


// ## Scenario 1 — Weather Dashboard with Error Handling

// Build a small weather dashboard that fetches current weather data from a public weather API (e.g., OpenWeatherMap).

// ### Requirements

// - Make the API request asynchronously using `fetch` with `async/await`.
// - Handle API request failures (for example, invalid city name) using `try/catch`.
// - Create and throw custom errors based on weather conditions (e.g., extremely high or low temperature) and handle them appropriately.

// ### Suggested tasks

// - Build a simple UI to input a city name and display the result.
// - Show user-friendly error messages for network errors, invalid input, or API errors.
// - Demonstrate at least one custom thrown error (e.g., `ExtremeTemperatureError`) and handle it in the UI.


async function getWeather(city) {
    try{
        let apikey = `514f099a91437eb6d933ac876f96670a`;

        let rawData = await fetch
        (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);

        if(!rawData.ok) {
            throw new Error("City not found")
        }
        
        let realData = await rawData.json();
        let temp = Math.floor(realData.main.temp - 273.15);

        if (temp<0){
            console.warn(`Too cold out there....${temp}°C`)
        }
        else if (temp>34) {
            console.warn(`Too hot out there....${temp}°C`)
        }
        else{
            console.log(temp)
        }
    } catch(err){
        console.log(err.message)
    }
}

getWeather("sikkim")