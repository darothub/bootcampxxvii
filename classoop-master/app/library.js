'use strict'


class Bird{
	constructor (){
		this.wings = 2;
		this.flight = {
			north: 0,
			south: 0
		};
	}

	fly (north, south){
		this.flight =+ north;
		this.flight =+south;

	}
	

}

class Fowl extends Bird {
	constructor(name, color, weight){
		super();
		this.name = name
		this.color = color;
		this.weight = weight;
		
	}
	
	attribute(habitat){
		return this.name +" with " + this.color + " color" + " and " + this.weight + " is found in " + habitat;
	  
	}
}

let adiye = new Fowl("Adiye","black", "12kg");
console.log(adiye.attribute("egba"))



module.exports = {
	Sport : Sport
};