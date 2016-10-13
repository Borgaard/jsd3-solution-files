var App = {};

// Data is usually obtained from an online source
App.favorites = {
    "recipe" : [
      {
        "name" : "Shakshuka",
        "serves" : 4,
        "meal" : "breakfast"
      },
      {
        "name" : "Black Bean Chili",
        "serves" : 8,
        "meal" : "dinner"
      },
      {
        "name" : "Classic Peanut Butter Cookies",
        "serves" : "3 dozen",
        "meal" : "dessert"
      }
    ]
  };

App.compile = function() {
  var source = $("#recipeTemplate").html();
  // Handlebars compiles the template into a callable function
  var template = Handlebars.compile(source);
  
  // call the compiled function with the template data
  var compiledTemplate = template(App.favorites);

  $("body").append(compiledTemplate);
}

$("document").ready(function() {
  App.compile();
});

