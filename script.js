// define variables
let searchBtn = document.getElementById("searchBtn");
let cityInput = document.querySelector('#cityInput');
let subForm = document.querySelector('#submissionForm');
let currentForecast = document.getElementById("currentForecast");
let day1 = document.getElementById("day1");
let day2 = document.getElementById("day2");
let day3 = document.getElementById("day3");
let day4 = document.getElementById("day4");
let day5 = document.getElementById("day5");

// prevent default, reset input box, alert if input empty
let reset = function(event) {
    event.preventDefault();
    let cityName = cityInput.value.trim();
    if (cityName) {
      callFunction(cityName);
      cityInput.textContent = '';
      cityInput.value = '';
    } else {
      alert('Please enter a city.');
    }};

// api call
let callFunction = function(cityName) {
    let weatherAPI = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=65e4e58787a7fd23ec32767cf0dce3ec';
  
    fetch(weatherAPI).then(function(response) {
        if (response.ok) {
          response.json().then(function(data) {
            console.log(data);
            // pass response data to dom function
            titleFunction(data);
          });
        }
        else {
          alert("There was a problem with your request!");
        }
      })
      .catch(function(error) {
        alert('Unable to connect to openweathermap.org.');
      });
  };

// pass city name data into title div
let titleFunction = function(data) {
        let dataName = (data).city.name;
        document.getElementById('currentTitle').textContent = "Current Weather for " + dataName;
        forecastFunction(data);
};

// pass forecast data into day1-6 divs
let forecastFunction = function(data) {

    let currentTemp = (data).list[0].main.temp
    let currentHumid = (data).list[0].main.humidity
    let currentWind = (data).list[0].wind.speed
    document.getElementById('currentInfo').textContent = "Temperature: " + currentTemp + "Wind speed: " + currentWind + "Humidity: " + currentHumid

    let day1Temp = (data).list[1].main.temp
    let day1Humid = (data).list[1].main.humidity
    let day1Wind = (data).list[1].wind.speed
    document.getElementById('day1').textContent = day1Temp + day1Wind + day1Humid

} // close forecastFunction

// create button with last searched city as name, rerun when clicked 

// search button event listener
subForm.addEventListener('submit', reset);

// open weather api key
// 65e4e58787a7fd23ec32767cf0dce3ec