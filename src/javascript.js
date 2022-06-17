// Feature 1
let now = new Date();

let dateAndTimeOnPage = document.querySelector("#date-and-time");

let date = now.getDate();
let hours = now.getHours();
let minuites = now.getMinutes();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

dateAndTimeOnPage.innerHTML = `${day} ${date} ${month} ${year} </br> ${hours}:${minuites}`;

//Feature 2

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-search");

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
  //put API call here
  let apiKey = "a8378d3784950378fd87ca7c671cf2f4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}`).then(showTemperature);
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", search);

// Feature 3
function changeToFahrenheit(event) {
  event.preventDefault();
  let temp = document.querySelector("#temperature");
  temp.innerHTML = `41`;
}

function changeToCelsius(event) {
  event.preventDefault();
  let temp = document.querySelector("#temperature");
  temp.innerHTML = `5`;
}

let temperatureInfahrenheit = document.querySelector("#fahrenheit");
temperatureInfahrenheit.addEventListener("click", changeToFahrenheit);

let temperatureInDegrees = document.querySelector("#degrees-celsius");
temperatureInDegrees.addEventListener("click", changeToCelsius);

//Week 5 challenge

function showTemperature(response) {
  console.log(response);
  //console.log(response.data.main.temp);
  let currentTemperature = Math.round(response.data.main.temp);
  let displayTemperature = document.querySelector("#temperature");
  displayTemperature.innerHTML = `${currentTemperature}`;
  let currentCity = response.data.name;
  let displayCity = document.querySelector("h1");
  displayCity.innerHTML = `${currentCity}`;
}

function showPosition(position) {
  //console.log(position);
  //console.log(position.coords.longitude);
  //console.log(position.coords.latitude);
  let apiKey = "a8378d3784950378fd87ca7c671cf2f4";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiGeolocationUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(`${apiGeolocationUrl}`).then(showTemperature);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("#current-location-button");
button.addEventListener("click", getCurrentPosition);
