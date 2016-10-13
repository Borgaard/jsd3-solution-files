'use strict';

var weatherData = {};
weatherData.apikey = "5cfd001cfa45c288b4b9f06001cc5046";
weatherData.url = "http://api.openweathermap.org/data/2.5/weather?q=San Francisco,CA&appid=" + weatherData.apikey;
weatherData.category = "weather";

var timeData = {};
timeData.apikey = "JEK8GVV03BEF";
timeData.url = "http://api.timezonedb.com/v2/get-time-zone?key=" + timeData.apikey + "&format=json&by=zone&zone=America/Los_Angeles";
timeData.category = "time";

function getExternalData(url, callback, type) {
  $.ajax({
      url: url,
      // Work with the response
      success: function (r) {
        callback(r)
      },
      error: function () {
        updateUIError(type)
      }
  })
}

function updateWeather(response) {
  var degF = (response.main.temp - 273.15) * 1.8 + 32;
  var degFInt = Math.floor(degF);
  console.log("Temperature: " + degFInt + " deg F");
}

function updateTime(response) {
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date((response.timestamp - response.gmtOffset)*1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  console.log("Time: " + formattedTime);
}

function updateUIError(type) {
  console.log("There was an error getting " + type + " data :(");
}

getExternalData(weatherData.url, updateWeather, weatherData.category);
getExternalData(timeData.url, updateTime, timeData.category);
