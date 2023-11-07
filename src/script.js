let now = new Date();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let time = document.querySelector("#time");
time.innerHTML = `${hours}:${minutes}`;
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let date = now.getDate();
let year = now.getFullYear();
let fullDate = document.querySelector("#date");
fullDate.innerHTML = `${month} ${date}, ${year}`;

let apiKey = "05fo015e85414d77adb5a43ddt2314b8";

//current weather
function showTemperature(response) {
  console.log(response);

  //rounding off the temperature
  let temperature = Math.round(response.data.temperature.current);


  let location = document.querySelector("#location");
  location.innerHTML = `${response.data.city}`;

  //using weather icon
  let iconUrl = `${response.data.condition.icon_url}`;
  document.querySelector("#weather-icon").src = iconUrl;

  let city = document.querySelector("#city");
  city.innerHTML = `${response.data.city}, ${response.data.country}`;

  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = `${temperature}°`;

  //unit conversion from celsius to farenheit
  let celsiusButton = document.getElementById("celsius");
  let originalTemperature = document.getElementById("current-temperature");
  celsiusButton.addEventListener("click", function () {
    originalTemperature.innerHTML = `${temperature}°`;
  });

  let farenheitButton = document.getElementById("farenheit");
  let convertedTemperature = document.getElementById("current-temperature");
  farenheitButton.addEventListener("click", function () {
    let farenheitConversion = temperature * 1.8 + 32;
    let farenheit = Math.round(farenheitConversion);
    convertedTemperature.innerHTML = `${farenheit}°`;
  });

  
  let weatherDescription = document.querySelector("#weather-description");
  weatherDescription.innerHTML = response.data.condition.description;

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.temperature.humidity}%`;

  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerHTML = `${response.data.wind.speed} m/s`;

  let pressure = document.querySelector("#pressure");
  pressure.innerHTML = `${response.data.temperature.pressure} hPa`;
}
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}
//weather forecast
function showForecast(response) {
  console.log(response);


  let temperatureMax = Math.round(response.data.daily[0].temperature.maximum);
  let temperatureMin = Math.round(response.data.daily[0].temperature.minimum);
let highestTemperature = document.querySelector("#highest-temp");
highestTemperature.innerHTML = `${temperatureMax}°`;
let lowestTemperature = document.querySelector("#lowest-temp");
lowestTemperature.innerHTML = `${temperatureMin}°`;

  let forecastHTML = "";
  response.data.daily.forEach(function (day, index) {
    if (index < 7) {
      forecastHTML =
        forecastHTML +
        `
       <div class="forecast-day">
         <div class="forecast-date">
           <strong>
             ${formatDay(day.time)}
           </strong>
          </div>
          <div class="forecast-humidity">
           💧 ${day.temperature.humidity}%
          </div>
        <img src="${day.condition.icon_url}" class="weather-forecast-icon" />
        <div class="weather-forecast-temperatures">
          <span id="max-temp-day">
            ${Math.round(day.temperature.maximum)}° |
          </span>
          <span id="min-temp-day">
           ${Math.round(day.temperature.minimum)}°
          </span>
        </div>
      </div>
      `;
    }
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHTML;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input-text");
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function forecast(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input-text");
  let apiurl = `https://api.shecodes.io/weather/v1/forecast?query=${searchInput.value}&key=${apiKey}&units=metric`;
  axios.get(apiurl).then(showForecast);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", forecast);

//getting weather for current location
function showPosition(position) {
  console.log(position);

  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let forecastUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&units=metric&key=${apiKey}`;
  let url = `https://api.shecodes.io/weather/v1/current?lat=${lat}&lon=${lon}&units=metric&key=${apiKey}`;
  axios.get(url).then(showTemperature);
  axios.get(forecastUrl).then(showForecast);
}
function navigate() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

//unit conversion
let celsius = document.getElementById("celsius");
celsius.addEventListener("click", showTemperature);
