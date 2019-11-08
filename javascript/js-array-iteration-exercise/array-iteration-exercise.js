var numbers = [1,2,3,4,5,6,7,8,9,10];

//print out numbers divisible by 3 using a for loop

for (var i = 0; i < numbers.length; i++) {
	if(numbers[i] % 3 === 0) {
		console.log(numbers[i]);
	}
}