'use strict'
var levelSymbol = Symbol();

class Student{
	constructor (name, height, weight){
		this.name = name;
		this.height = height;
		this.weight = weight;
		this[levelSymbol] = 0;


	}

	get levelSymbol(){
		return this[levelSymbol];

	}
	set level(number){
		if (number > 200){
			return "You are not qualified for this program"
		}
		this[levelSymbol] = number;

	}
	
}


module.exports = {
	Sport : Sport
};