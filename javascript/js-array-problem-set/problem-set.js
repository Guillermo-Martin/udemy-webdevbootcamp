//Write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order
//hint:  use a loop

var numbers = [1, 2, 3, 4];

var letters = ["a", "b", "c"];

//1. have it start at the last thing in the array
//2. have it repeat the code until i=0

function printReverse(array) {
	for(var i = array.length - 1; i >= 0; i--) {
	console.log(array[i]);
	}
}
//printReverse(numbers);
//printReverse(letters);
//printReverse([1, 2, 3, 4]);

//Write a function isUniform() which takes an array as an argument and returns true if all elements in the array are identical
//hint:  use a loop; use a variable that keeps track of the very first item in the index, then compare it to the next item

var num1 = [1,1,1,1]; //and [2,1,1,1] 

function isUniform(array2) {
	var result = array2[0];						//put var result before the for loop; variable is equal to the very first item in the array 
	for(var i = 0; i < array2.length; i++) {	//colt's solution:  i = 1
		if(result === array2[i]) {				//colt's solution:  if(arr[i] !== result) {
		}										// return false
		} else {								//}
			return false;						//structuring the loop this way will make it so the loop checks everything 
		}
	}
	return true;								//have the result come after the for loop; this is if you make it through the entire loop
}

var letters = ["a", "b", "p"]; //and ["b","b","b"]

function isUniform(array3) {
	var result = array3[0];
	for(var i = 0; i < array3.length; i++) {
		if(result === array3[i]) {
		} else {
			return false;
		}
	}
	return true;							//have the result come after the for loop
}

//Write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array
//hint:  use a loop; use a variable called result or something that will be added to during the loop

var num = [1,2,3]; // and [10,3,10,4] and [-5 and 100]

function sumArray(array4) {
    var result = 0;								
    for(var i = 0; i < array4.length; i++) {	//colt's solution:  arr.forEach(function(element)) {
        result = result + array4[i];				//total += element; 
    }												//});
    return result;									//return total;
}													//

//Write a function max() that accepts an array of numbers and returns the maximum number in the array
//hint:  use a loop; use a variable that stores the maximum number and every time through the loop the variable 
//needs to be updated if the next number is greater than the older maximum

var num2 = [1,2,3]; // and [10,3,10,4] and [-5 and 100]

function max(array5) {
	var max = array5[0];  
	for(var i = 0; i < array5.length; i++) {
		if(array5[i] > max) {					//if array[i] > max
			max = array5[i]; 					//variable max is now equal to array[i]
		}
	}
	return max;									//return max when the loop is done
}
