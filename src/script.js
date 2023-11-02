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

  //let temperatureMax = Math.round(response.data.main.temp_max);
  //let temperatureMin = Math.round(response.data.main.temp_min);

  let location = document.querySelector("#location");
  location.innerHTML = `${response.data.city}`;

  let weatherIcon = document.querySelector("#weather-icon");
  weatherIcon.innerHTML = `${response.data.condition.icon}`;

  let city = document.querySelector("#city");
  city.innerHTML = `${response.data.city}, ${response.data.country}`;

  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = `${temperature}°`;

  //let highestTemperature = document.querySelector("#highest-temp");
  //highestTemperature.innerHTML = `${temperatureMax}°`;
  //let lowestTemperature = document.querySelector("#lowest-temp");
  //lowestTemperature.innerHTML = `${temperatureMin}°`;
  let weatherDescription = document.querySelector("#weather-description");
  weatherDescription.innerHTML = response.data.condition.description;

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.temperature.humidity}%`;

  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerHTML = `${response.data.wind.speed} m/s`;

  let pressure = document.querySelector("#pressure");
  pressure.innerHTML = `${response.data.temperature.pressure} hPa`;
}

//weather forecast
function showForecast(response) {
  console.log(response);

  let humidityDay1 = document.querySelector("#humidity-day1");
  humidityDay1.innerHTML = `💧 ${response.data.daily[0].temperature.humidity}%`;
  let tempMaxDay1 = Math.round(response.data.daily[0].temperature.maximum);
  let maxTempDay1 = document.querySelector("#max-temp-day1");
  maxTempDay1.innerHTML = `${tempMaxDay1}°`;
  let tempMinDay1 = Math.round(response.data.daily[0].temperature.minimum);
  let minTempDay1 = document.querySelector("#min-temp-day1");
  minTempDay1.innerHTML = ` ${tempMinDay1}°`;

  let humidityDay2 = document.querySelector("#humidity-day2");
  humidityDay2.innerHTML = `💧 ${response.data.daily[1].temperature.humidity}%`;
  let tempMaxDay2 = Math.round(response.data.daily[1].temperature.maximum);
  let maxTempDay2 = document.querySelector("#max-temp-day2");
  maxTempDay2.innerHTML = `${tempMaxDay2}°`;
  let tempMinDay2 = Math.round(response.data.daily[1].temperature.minimum);
  let minTempDay2 = document.querySelector("#min-temp-day2");
  minTempDay2.innerHTML = ` ${tempMinDay2}°`;

  let humidityDay3 = document.querySelector("#humidity-day3");
  humidityDay3.innerHTML = `💧 ${response.data.daily[2].temperature.humidity}%`;
  let tempMaxDay3 = Math.round(response.data.daily[2].temperature.maximum);
  let maxTempDay3 = document.querySelector("#max-temp-day3");
  maxTempDay3.innerHTML = `${tempMaxDay3}°`;
  let tempMinDay3 = Math.round(response.data.daily[2].temperature.minimum);
  let minTempDay3 = document.querySelector("#min-temp-day3");
  minTempDay3.innerHTML = ` ${tempMinDay3}°`;

  let humidityDay4 = document.querySelector("#humidity-day4");
  humidityDay4.innerHTML = `💧 ${response.data.daily[3].temperature.humidity}%`;
  let tempMaxDay4 = Math.round(response.data.daily[3].temperature.maximum);
  let maxTempDay4 = document.querySelector("#max-temp-day1");
  maxTempDay4.innerHTML = `${tempMaxDay4}°`;
  let tempMinDay4 = Math.round(response.data.daily[3].temperature.minimum);
  let minTempDay4 = document.querySelector("#min-temp-day4");
  minTempDay4.innerHTML = ` ${tempMinDay4}°`;

  let humidityDay5 = document.querySelector("#humidity-day5");
  humidityDay5.innerHTML = `💧 ${response.data.daily[4].temperature.humidity}%`;
  let tempMaxDay5 = Math.round(response.data.daily[4].temperature.maximum);
  let maxTempDay5 = document.querySelector("#max-temp-day5");
  maxTempDay5.innerHTML = `${tempMaxDay5}°`;
  let tempMinDay5 = Math.round(response.data.daily[4].temperature.minimum);
  let minTempDay5 = document.querySelector("#min-temp-day5");
  minTempDay5.innerHTML = ` ${tempMinDay5}°`;

  let humidityDay6 = document.querySelector("#humidity-day6");
  humidityDay6.innerHTML = `💧 ${response.data.daily[5].temperature.humidity}%`;
  let tempMaxDay6 = Math.round(response.data.daily[5].temperature.maximum);
  let maxTempDay6 = document.querySelector("#max-temp-day6");
  maxTempDay6.innerHTML = `${tempMaxDay6}°`;
  let tempMinDay6 = Math.round(response.data.daily[5].temperature.minimum);
  let minTempDay6 = document.querySelector("#min-temp-day6");
  minTempDay6.innerHTML = ` ${tempMinDay6}°`;

  let humidityDay7 = document.querySelector("#humidity-day7");
  humidityDay7.innerHTML = `💧 ${response.data.daily[6].temperature.humidity}%`;
  let tempMaxDay7 = Math.round(response.data.daily[6].temperature.maximum);
  let maxTempDay7 = document.querySelector("#max-temp-day7");
  maxTempDay7.innerHTML = `${tempMaxDay7}°`;
  let tempMinDay7 = Math.round(response.data.daily[6].temperature.minimum);
  let minTempDay7 = document.querySelector("#min-temp-day7");
  minTempDay7.innerHTML = ` ${tempMinDay7}°`;
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
form.addEventListener("submit", forecast);
