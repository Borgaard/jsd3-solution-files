var App = {};

// Data is usually obtained from an online source
App.stories = {
    story : {
      story1 : {
          headline: "Opinions vary on shape of Earth",
          topic: "Economics",
          url: "http://example.com"
      },
      story2 : {
          headline: "Same as it ever was",
          topic: "Current events",
          url: "http://example.com"
      },
      story3 : {
          headline: "Breakup of the week",
          topic: "Entertainment",
          url: "http://example.com"
      }  
    }  
}

App.compile = function() {
  var source = $("#storyTemplate").html();
  // Handlebars compiles the template into a callable function
  var template = Handlebars.compile(source);
  
  // call the compiled function with the template data
  var compiledTemplate = template(App.stories);

  $("body").append(compiledTemplate);
}

$("document").ready(function() {
  App.compile();
});

