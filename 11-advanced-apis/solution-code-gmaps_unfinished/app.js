
$(function() {
  // DOM is now ready

  // When the user logs in we will pull their favorite photos
/*  _500px.on('authorization_obtained', function() {
    $('.sign-in-view').hide();
    $('.image-results-view').show();*/
    function handleResponse() {
    // check if navigator geolocation is available from the browser
      if (navigator.geolocation) {
        // if it is use the getCurrentPosition method to retrieve the Window's location
        navigator.geolocation.getCurrentPosition(function(position) {
          var lat = position.coords.latitude;
          var long = position.coords.longitude;

          console.log('lat: ', lat);
          console.log('long: ', long);

          var mapOptions = {
              center: {lat:lat, lng: long},
              zoom: 11
          };
 //         var map = new google.maps.Map($('.images'), mapOptions);
        var map = new google.maps.Map(document.getElementById("#images"), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
          // Now that we have the user's location, let's search the API for landscape photos nearby
          /*_500px.api('/photos/search', searchOptions, function(response) {
            if (response.data.photos.length == 0) {
              alert('No photos found!');
            } else {
              handleResponseSuccess(response);
            }
          });*/

          // Get the currently logged in user
          /*_500px.api('/users', function(response) {
            var me = response.data.user;
            // Now we have access to the user name and other information
            console.log('Loggin in: ', me);
          });*/
        });
      } else {
        $('#images').append('Sorry, the browser does not support geolocation');
      }
    }


 /*     var script = document.createElement("script");
      script.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true&callback=handleResponse";
      document.body.appendChild(script);*/


  });



  /*function handleResponseSuccess(response) {
    var allData = response.data.photos;

    $.each(allData, function() {
      var element = $('<img>').attr('src', this.image_url).addClass('image');
      $('.images').append(element);
    });
  }*/

  // If the user clicks the login link, log them in
  /*$('#login').click(function() {
    _500px.login();
  });*/

  // If the user has already logged in & authorized your application, this will fire an 'authorization_obtained' event
  // This keeps the site from prompting the user to log in each time the page is refreshed
  //_500px.getAuthorizationStatus();
//});
