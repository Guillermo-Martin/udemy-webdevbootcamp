//1.  isEven()

function isEven(number) {
	if(number % 2 === 0) {
		return true;
	}

	else {
		return false;
	}
}

//Colt's solution:

/*function isEven(num) {
	return num % 2 === 0; 
}*/

//2.  factorial()

function factorial(number) {
	for(var i = number - 1; i >= 1; i--) {
	number = number * i;
	}
	return number;
}

//for the way I did it, we would need to put in an if statement:
	//if(num === 0){
		//return 1;
	//}

//Colt's solution:
//function factorial(num) {
	//define a result variable
	//var result = 1;
	//calculate factorial and store value in result
	//for(var = 2; i <= num; i++) {
		//result = result * i;
		//}
		//return result; 
//}
	
	

//3.  kebabToSnake()

function kebabToSnake(string) {
	var str = string;
	var newStr = str.replace(/-/g, "_");
	return newStr;
}
