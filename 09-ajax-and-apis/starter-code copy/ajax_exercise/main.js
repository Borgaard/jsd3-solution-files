/*

- Refactor the codealong to work with user interaction. In the index.html file
there is a "Get Consumer Finance Data" button. When the user clicks the button,
pull data from the provided link above (http://data.consumerfinance.gov/api/views.json).
Handle the link success and error responses accordingly, displaying results in
console.log() if successful.

- Separate your logic so that you can use your functions for another user button
click of "Get Custom Data". Interact with an API of your choice and handle both
success and error scenarios.

- Alternate data source: https://data.cityofnewyork.us/api/views/jb7j-dtam/rows.json?accessType=DOWNLOAD
*/

'use strict';

var httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
            console.log(httpRequest.responseText);
        } else {
            console.log("There was a problem.");
        }
    }
};

httpRequest.open("GET", "http://data.consumerfinance.gov/api/views.json");

httpRequest.send();