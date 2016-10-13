angular.module('listApp', [])
  .controller('ListController', function() {
    var parksList = this;
    parksList.parks = [
      {
        "name":"Buena Vista Park",
        "location":"Buena Vista & Haight",
        "hours":"5am to midnight",
        "link":"http://sfrecpark.org/destination/buena-vista-park/",
        "photo":"http://sfrecpark.org/wp-content/uploads/Buena-Vista-Park-408x288.jpg"
      },
      {
        "name":"Fay Park",
        "location":"2366 Leavenworth St",
        "hours":"5am to midnight",
        "link":"http://sfrecpark.org/destination/fay-park/",
        "photo":"http://sfrecpark.org/wp-content/uploads/Fay-Park.jpg"
      },
      {
        "name":"Mission Dolores Park",
        "location":"19th St & Dolores St",
        "hours":"6am to 10pm",
        "link":"http://sfrecpark.org/destination/mission-dolores-park/",
        "photo":"http://sfrecpark.org/wp-content/uploads/IMG_7903-1000x288.jpg"
      },
      {
        "name":"Holly Park",
        "location":"Holly Park Circle",
        "hours":"6am to 10pm",
        "link":"http://sfrecpark.org/destination/holly-park/",
        "photo":"http://sfrecpark.org/wp-content/uploads/Holly-Park-398x288.jpg"
      },
      {
        "name":"John McLaren Park",
        "location":"Mansell St & John F Shelley Dr",
        "hours":"5am to midnight",
        "link":"http://sfrecpark.org/destination/john-mclaren-park/",
        "photo":"http://sfrecpark.org/wp-content/uploads/John-McLaren-Park-400x288.jpg"
      },
      {
        "name":"Lake Merced Park",
        "location":"Skyline Blvd & Harding Rd",
        "hours":"5am to midnight",
        "link":"http://sfrecpark.org/destination/lake-merced-park/",
        "photo":"http://sfrecpark.org/wp-content/uploads/12603-960x288.jpg"
      }
    ];
  }
); 