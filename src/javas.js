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
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

let apiKey = "66af7215126c3001af4a20c9cde9c1c1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=${apiKey}&units=metric`;

axios.get(apiURL).then(displayTemperature);
