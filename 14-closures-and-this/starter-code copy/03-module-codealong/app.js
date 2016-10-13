var car = (function(kind) {
  var wheelCount = 4;

	// a closure
  var start = function() {
    console.log('started with ' + wheelCount + ' wheels - vroom, vroom baby!');
  };

  return {
    make: kind,
    wheels: wheelCount,
    startEngine: start
  };
})('Tesla');

console.log(car.make);
// => Tesla

car.startEngine();
// => started with 4 wheels.