var applicant = {
	age: 58,
	zip: 08142,
	gender: 'f'
}
var rating = (function runAnalysis(age, zip, gender) {
	var x = 52.38975,
		y = 0.9824;
	// a closure:
	var calculate = (function() {
		var intermediate = (zip / x) * (age * y);
		if (gender = "m") {
			final = intermediate + 16.83;
		} else if (gender = "f") {
			final = intermediate - 4.02;
		}
		return final;
	})();
	var publicCalc = function() {
		return calculate;
	}
	return {
		determine: calculate
	};
})(applicant.age, applicant.zip, applicant.gender);

console.log(rating);
console.log(rating.figureOut);
console.log(rating.determine);

// var martha = runAnalysis(58, 08142, 'f');

// console.log(martha);

// console.log(runAnalysis); // no parens, so this returns the function code itself

