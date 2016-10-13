function makePerson(name, age) {

	return {

		kids: [],

		name: name,

		age: age,

		getKids: function() {
			return this.kids;
		},

		haveAKid: function(kidName) {
			this.kids.push(kidName);
		},

		getName: function() {
			return this.name;
		},

		getAge: function() {
			return this.age;
		},

		celebrateBirthday: function() {
			this.age += 1;
		}
	};
}

var bart = new makePerson('Bart', 32);

bart.celebrateBirthday();

console.log(bart.getAge()) // 33

console.log(bart.getKids()) // []

bart.haveAKid('judah');

console.log(bart.getKids()) // ['judah']