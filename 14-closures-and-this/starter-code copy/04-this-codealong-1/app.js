function aFunc() {
	this.foo = 'bar';
	function inner() {
		console.log(this);
	}
	inner();
}

new aFunc();
