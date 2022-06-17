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
}

let form = document.querySelector("#city-form");
form.addEventListener("click", search);

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
