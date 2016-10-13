$(function() {
  // DOM is now ready
  _500px.init({
  //  sdk_key: 'YOUR JAVASCRIPT SDK KEY'
    sdk_key: 'c095a1ed8923d151066ec81a6569a9dd1195e5c5'
  });

  $('.sign-in-view').hide();
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
        image_size: 3, // This isn't neccessary but by default the images are thumbnail sized
        rpp: 28,  // Return 28 results
        sort: 'highest_rating'  // Sort results by highest rated
      };

      // Now that we have the user's location, let's search the API for landscape photos nearby
      _500px.api('/photos/search', searchOptions, function(response) {
        if (response.data.photos.length === 0) {
          console.log('No photos found!');
        } else {
          handleResponseSuccess(response);
        }
      });
    });
  } else {
    $('.images').append('Sorry, the browser does not support geolocation');
  }

  function handleResponseSuccess(response) {
    var allData = response.data.photos;

    $.each(allData, function() {
      var element = $('<img>').attr('src', this.image_url).addClass('image');
      $('.images').append(element);
    });
  }
});