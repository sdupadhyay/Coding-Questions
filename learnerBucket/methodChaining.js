/*  Methoid 1 using Object   */
const calculator = {
	total: 0,
	add: function (val) {
		this.total += val;
		return this;
	},
	subtract: function (val) {
		this.total -= val;
		return this;
	},
	divide: function (val) {
		this.total /= val;
		return this;
	},
	multiply: function (val) {
		this.total *= val;
		return this;
	},
};

calculator.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator.total);
//20

/* Method 2 using Function */
const CALC = function () {
	this.total = 0;
	this.add = function (val) {
		this.total += val;
		return this;
	};
	this.subtract = function (val) {
		this.total -= val;
		return this;
	};
	this.divide = function (val) {
		this.total /= val;
		return this;
	};
	this.multiply = function (val) {
		this.total *= val;
		return this;
	};
};
const a = new CALC();
a.add(10).subtract(5).multiply(20).divide(10);
console.log(a.total);

/* Method 3: Using Class  */
class CalculatorClass {
	constructor() {
		this.total = 0;
	}
	add(val) {
		this.total += val;
		return this;
	}
	subtract(val) {
		this.total -= val;
		return this;
	}
	print() {
		console.log(this.total);
	}
}
const b = new CalculatorClass();
b.add(10).subtract(1).print();
