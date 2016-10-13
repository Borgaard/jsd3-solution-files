$(function() {
  // DOM is now ready
  _500px.init({
    sdk_key: 'c095a1ed8923d151066ec81a6569a9dd1195e5c5'
  });

//  $('#login').click(function() {
//    _500px.login();
//  });

  // When a successful login to 500px is made, they fire off the 'authorization_obtained' event
//  _500px.on('authorization_obtained', function() {
    // Successful OAuth login!


/*_500px.getAuthorizationStatus(function (status) {
    if (status == 'not_logged_in' || status == 'not_authorized') {
      _500px.login(function (status) {
          if (status === 'authorized') {
              console.log('You have logged in');
              _500px.api('/users', function (response) {
                console.log(response);
                console.log("Your username is " + response.data.user)
              });
          } else {
              console.log('You denied my application');
          }
      }); 
    }
});*/


        // When the user logs in we will pull their favorite photos
        _500px.on('authorization_obtained', function () {
          console.log("authorization_obtained");
          // Get my user id
          _500px.api('/users', function (response) {
            console.log(response);
            var me = response.data.user;
            // Get my favorites
            _500px.api('/photos', { feature: 'user_favorites', user_id: me.id }, function (response) {
              if (response.data.photos.length == 0) {
                console.log('You have no favorite photos.');
              } else {
                $.each(response.data.photos, function () {
 //                 $('#logged_in').append('<img src="' + this.image_url + '" />');
                });
              }
            });
          });
        });
        _500px.on('logout', function () {
          $('#not_logged_in').show();
          $('#logged_in').hide();
          $('#logged_in').html('');
        });
        // If the user has already logged in & authorized your application, this will fire an 'authorization_obtained' event
        _500px.getAuthorizationStatus();
        // If the user clicks the login link, log them in
        $('#login').click(_500px.login);


    //$('.sign-in-view').hide();
    $('.image-results-view').show();


  // check if navigator geolocation is available from the browser
    if (navigator.geolocation) {
      // if it is use the getCurrentPosition method to retrieve the Window's location
      navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        console.log('lat: ', lat);
        console.log('long: ', long);

        // Feel free to adjust the search radius as you see fit
        var radius = '25mi';

        var searchOptions = {
          geo: lat + ',' + long + ',' + radius,
          only: 'Landscapes', // We only want landscape photos
          image_size: 3 // This isn't neccessary but by default the images are thumbnail sized
        };

        _500px.api('/photos/search', searchOptions, function(response) {
          if (response.data.photos.length === 0) {
            console.log('No photos found!');
          } else {
            // Handle the successful response here
            //console.log('Request succeeded!');
            handleResponseSuccess(response);
          }
        });
      })
    } else {
      $('.images').append('Sorry, the browser does not support geolocation');
    }

  });

  function handleResponseSuccess(response) {
    var allData = response.data.photos;

    $.each(allData, function() {
      var element = $('<img>').attr('src', this.image_url).addClass('image');
      $('.images').append(element);
    });
  }




