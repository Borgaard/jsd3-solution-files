'use strict';
var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "5cfd001cfa45c288b4b9f06001cc5046";

getWeather('San Francisco', 'CA');

$('#getTemp').on('click', function(e) {
  getWeather($('#city').val(), $('#state').val());
});

function getWeather(city, state) {
  $.ajax({
      url: weatherUrl + city + ',' + state + '&appid=' + apiKey,

      // Work with the response
      success: function( response ) {
          updateUISuccess(response.main.temp, city, state);
      },

      error: function() {
        updateUIError();
      }
  });
}

function updateUISuccess(temp, city, state) {
  $('#city, #state').val('');
  $('#location').html(city + ', ' + state);
  var degF = (temp - 273.15) * 1.8 + 32;
  var degFInt = Math.floor(degF);
  $('#temp').html(degFInt + "&deg; F");
}

function updateUIError() {
  alert("There was an error getting weather data :(");
}
