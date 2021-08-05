// define variables
let searchBtn = document.getElementById("searchBtn");
let cityInput = document.getElementById("cityInput");
let cityName = cityInput.value.trim();
let currentForecast = document.getElementById("currentForecast");
let day1 = document.getElementById("day1");
let day2 = document.getElementById("day2");
let day3 = document.getElementById("day3");
let day4 = document.getElementById("day4");
let day5 = document.getElementById("day5");

// prevent default, reset input box, alert if input empty
let reset = function(event) {
    event.preventDefault();
    if (cityName) {
      callFunction(cityName);
      cityInput.textContent = '';
      cityInput.value = '';
    } else {
      alert('Please enter a city.');
    }
  };

// api call
let callFunction = function(cityName) {
    let weatherAPI = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=65e4e58787a7fd23ec32767cf0dce3ec';
  
    fetch(weatherAPI).then(function(response) {
        if (response.ok) {
          response.json().then(function(data) {
              console.log(data);
            // pass response data to dom function
            domFunction(data);
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

// pass returned data into divs
let domFunction = function() {
    
}

// create button with last searched city as name, rerun application when clicked 

// search button event listener
searchBtn.addEventListener("click", callFunction);

// open weather api key
// 65e4e58787a7fd23ec32767cf0dce3ec

