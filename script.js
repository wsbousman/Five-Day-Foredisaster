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

    let arb = new Date();
    arb.setDate(arb.getDate());
    let day1Add = 1;
    let day2Add = 2;
    let day3Add = 3;
    let day4Add = 4;
    let day5Add = 5;
    let dd = arb.getDate();
    let mm = arb.getMonth() + 1;
    let y = arb.getFullYear();
    let reformat1 = mm + '/' + (dd + day1Add) + '/'+ y;
    let reformat2 = mm + '/' + (dd + day2Add) + '/'+ y;
    let reformat3 = mm + '/' + (dd + day3Add) + '/'+ y;
    let reformat4 = mm + '/' + (dd + day4Add) + '/'+ y;
    let reformat5 = mm + '/' + (dd + day5Add) + '/'+ y;

    // current forecast
    let currentTemp = (data).list[0].main.temp
    let currentHumid = (data).list[0].main.humidity
    let currentWind = (data).list[0].wind.speed
    document.getElementById('currentInfo').textContent = "Temperature(K): " + currentTemp + "          Wind speed(mph): " + currentWind + "          Humidity(%): " + currentHumid
    document.getElementById('fiveDay').textContent = "Five Day Forecast"

    // day 1
    let day1Temp = (data).list[1].main.temp
    let day1Humid = (data).list[1].main.humidity
    let day1Wind = (data).list[1].wind.speed
    document.getElementById('day1Date').textContent = reformat1
    document.getElementById('day1Temp').textContent = "Temperature(K): " + day1Temp
    document.getElementById('day1Wind').textContent = "Wind speed(mph): " + day1Wind
    document.getElementById('day1Humid').textContent = "Humidity(%): " + day1Humid

    // day 2
    let day2Temp = (data).list[2].main.temp
    let day2Humid = (data).list[2].main.humidity
    let day2Wind = (data).list[2].wind.speed
    document.getElementById('day2Date').textContent = reformat2
    document.getElementById('day2Temp').textContent = "Temperature(K): " + day2Temp
    document.getElementById('day2Wind').textContent = "Wind speed(mph): " + day2Wind
    document.getElementById('day2Humid').textContent = "Humidity(%): " + day2Humid

    // day 3
    let day3Temp = (data).list[3].main.temp
    let day3Humid = (data).list[3].main.humidity
    let day3Wind = (data).list[3].wind.speed
    document.getElementById('day3Date').textContent = reformat3
    document.getElementById('day3Temp').textContent = "Temperature(K): " + day3Temp
    document.getElementById('day3Wind').textContent = "Wind speed(mph): " + day3Wind
    document.getElementById('day3Humid').textContent = "Humidity(%): " + day3Humid

    // day 4
    let day4Temp = (data).list[4].main.temp
    let day4Humid = (data).list[4].main.humidity
    let day4Wind = (data).list[4].wind.speed
    document.getElementById('day4Date').textContent = reformat4
    document.getElementById('day4Temp').textContent = "Temperature(K): " + day4Temp
    document.getElementById('day4Wind').textContent = "Wind speed(mph): " + day4Wind
    document.getElementById('day4Humid').textContent = "Humidity(%): " + day4Humid

    // day 5
    let day5Temp = (data).list[5].main.temp
    let day5Humid = (data).list[5].main.humidity
    let day5Wind = (data).list[5].wind.speed
    document.getElementById('day5Date').textContent = reformat5
    document.getElementById('day5Temp').textContent = "Temperature(K): " + day5Temp
    document.getElementById('day5Wind').textContent = "Wind speed(mph): " + day5Wind
    document.getElementById('day5Humid').textContent = "Humidity(%): " + day5Humid

} // close forecastFunction

// create button with last searched city as name, rerun when clicked 

// search button event listener
subForm.addEventListener('submit', reset);

// open weather api key
// 65e4e58787a7fd23ec32767cf0dce3ec