var App = {};

App.forecast = {
      "high" : 65,
      "low" : 48,
      "precip" : 20,
      "uv" : "moderate"
  };

  App.build = function() {
      var source = $("#weatherTemplate").html();
      var template = Handlebars.compile(source);
      var compiledTemplate = template(App.forecast);
      return compiledTemplate;
  };

$("document").ready(function() {
    $("body").append(App.build);
})