// https://openweathermap.org/api/geocoding-api
/** http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key} */
/** `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric` */

let apiKey = "";
let inputCity = document.getElementById("city");
let searchBtn = document.getElementById("search");
let current = document.getElementById("current");

let cityInfo = {};

searchBtn.addEventListener("click", getCoordinate);

function getCoordinate() {
  let url = `http://api.openweathermap.org/geo/1.0/direct?q=${inputCity.value}&appid=${apiKey}`;

  let xml = new XMLHttpRequest();
  xml.open("GET", url);

  xml.addEventListener("readystatechange", function () {
    if (xml.readyState === 4 && xml.status === 200) {
      console.log(JSON.parse(xml.responseText));
      //resolve(JSON.parse(xml.responseText));
      getWeatherData(JSON.parse(xml.responseText));
    }
  });

  xml.send();
}
console.log(inputCity, searchBtn);

function getWeatherData(cityData) {
  cityInfo = {
    country: cityData[0].country,
    lon: cityData[0].lon,
    lat: cityData[0].lat,
    name: cityData[0].name,
  };

  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${cityInfo.lat}&lon=${cityInfo.lon}&appid=${apiKey}&units=metric`;

  let xml = new XMLHttpRequest();
  xml.open("GET", url);

  xml.addEventListener("readystatechange", function () {
    if (xml.readyState === 4 && xml.status === 200) {
      //console.log(JSON.parse(xml.responseText));

      displayWeatherData(JSON.parse(xml.responseText));
    }
  });

  xml.send();
}

function displayWeatherData(weatherData) {
  let html = "";
  let temp = weatherData.main;
  let dt = weatherData.dt;
  let name = weatherData.name;
  let weatherIcon = weatherData.weather[0].icon;

  html += `
    <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="Weather icon">
    <h1>City name: ${cityInfo.name}, ${name}</h1>
    <h2>Day name: ${dayName(dt)}</h2>
    <h3>Temperature: ${Math.floor(temp.temp)} &degC</h3>
    <p>Feels like: ${Math.floor(temp.feels_like)} &degC</p>
  `.trim();

  current.innerHTML = html;
}

function dayName(time) {
  let date = new Date(time * 1000);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[date.getDay()];
}
