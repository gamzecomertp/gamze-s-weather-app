function formatDate(timestamp) {
  let date = new Date(timestamp);
  let currentHour = date.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinutes = date.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[date.getDay()];
  return `Last updated: ${currentDay} ${currentHour}:${currentMinutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature1");
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature1").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;

  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description1").innerHTML =
    response.data.weather[0].description;
  console.log(response.data);
  document.querySelector("#date").innerHTML = formatDate(
    response.data.dt * 1000
  );
}

let apiKey = "66af7215126c3001af4a20c9cde9c1c1";
let city = "Warsaw";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
