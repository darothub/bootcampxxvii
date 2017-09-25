'use strict'

var aritGeo = (arr) =>{

	if (arr.length === 0){
		return 0
	}
	if(isArithmetric(arr)){
		return "Arithmetic"
	}
	if(isGeometric(arr)){
		return "Geometric"
	}

	if(!isGeometric(arr) || !isArithmetric(arr)){
		return -1
	}
}
var isArithmetric =(arr) =>{
	let diff = arr[1] - arr[0];
	for (let i = 2; i < arr.length; i++){
		if(arr[i+1]-arr[i] === diff){
			return true
		}
	}
	return false
}
var isGeometric = (arr) =>{
	let div = (arr[1]/arr[0]);
	for (let i = 2; i < arr.length; i++){
		if(arr[i+1]/arr[i] === div){
			return true
		}
	}
	return false
}
module.exports = {
	aritGeo : aritGeo
};
