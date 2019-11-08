//OPTIONAL:  BUILDING YOUR OWN FOREACH FUNCTION

var nums = [45,65,77,34]

nums.forEach(function(num) {		//this is currently how .forEach works
	console.log(num);
}); 

//***building our own forEach***

//myForEach(arr, function(num) {		//it's going to take two arguments 
	//console.log(num);
//});

//first, let's define a function

function myForEach(arr, func) {
	//loop through array
	for(var i = 0; i < arr.length; i++) {
		//call func for each item in array
		func(arr[i]);
	}
}

var colors = ["red", "orange", "yellow"]; 

myForEach(colors, alert);

//now, we're going to pass in an anonymous function

myForEach(colors, function(){alert("HI")})

//now, we're going to pass in an argument into the function

myForEach(colors, function(color){
	console.log(color);
});

//testing it out

Array.prototype.myForEach = function(func) {
	for(var i = 0; i < this.length; i++) {				//"this" refers to the particular array we're calling this function on 
		func(this[i]);
	}	
}