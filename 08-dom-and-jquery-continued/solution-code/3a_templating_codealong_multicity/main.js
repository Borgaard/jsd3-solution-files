var App = {};

// Data is usually obtained from an online source
App.forecast = {
    "weather" : [
      {
        "city" : "San Francisco",
        "high" : 65,
        "low" : 48,
        "precip" : 20,
        "uv" : "moderate"
      },
      {
        "city" : "Omaha",
        "high" : 91,
        "low" : 62,
        "precip" : 45,
        "uv" : "high"
      },
      {
        "city" : "Boston",
        "high" : 87,
        "low" : 54,
        "precip" : 30,
        "uv" : "high"
      }
    ]
  };

App.build = function() {
  var source = $("#weatherTemplate").html();
  // Handlebars compiles the template into a callable function
  var template = Handlebars.compile(source);
  
  // call the compiled function with the template data
  var compiledTemplate = template(App.forecast);
  return compiledTemplate;
};

$("document").ready(function() {
  $("body").append(App.build);
});
