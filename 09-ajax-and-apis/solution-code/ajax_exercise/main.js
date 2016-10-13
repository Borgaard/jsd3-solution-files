'use strict';

var httpRequest;
document.getElementById("getDataButton").onclick = function() {
  console.log('making request');
  makeRequest('http://data.consumerfinance.gov/api/views.json');
};

document.getElementById("getCustomDataButton").onclick = function() {
  console.log('Making request');
  makeRequest('https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD');
}

function makeRequest(url) {
  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = responseMethod;
  httpRequest.open('GET', url);
  httpRequest.send();
}

function responseMethod() {
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      console.log('Error: there was a problem with the request.');
    }
  }
}
