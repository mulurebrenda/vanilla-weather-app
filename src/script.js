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

let apiKey = "1615adaa703ba9f96a337d48232ad32d";
function showTemperature(response) {
  console.log(response);

  //rounding off the temperature
  let temperature = Math.round(response.data.main.temp);
  let temperatureMax = Math.round(response.data.main.temp_max);
  let temperatureMin = Math.round(response.data.main.temp_min);

  let location = document.querySelector("#location");
  location.innerHTML = `${response.data.name}`;
  let city = document.querySelector("#city");
  city.innerHTML = `${response.data.name}, ${response.data.sys.country}`;
  let currentTemperature = document.querySelector("#current-temperature");
  currentTemperature.innerHTML = `${temperature}°`;
  let highestTemperature = document.querySelector("#highest-temp");
  highestTemperature.innerHTML = `${temperatureMax}°`;
  let lowestTemperature = document.querySelector("#lowest-temp");
  lowestTemperature.innerHTML = `${temperatureMin}°`;
  let weatherDescription = document.querySelector("#weather-description");
  weatherDescription.innerHTML = response.data.weather[0].description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.main.humidity}%`;
  let windSpeed = document.querySelector("#wind-speed");
  windSpeed.innerHTML = `${response.data.wind.speed}km/hr`;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input-text");

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);