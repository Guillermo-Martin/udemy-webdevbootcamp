/* var answer = prompt("Are we there yet?");

while(answer !== "yes" && answer !== "yeah") {
	var answer = prompt("Are we there yet?");
}

alert("Yay, we made it!"); */

//VERSION 2 (A user can enter any string as long as it contains "yes" in it.)

var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1) //the -1 means that the word "yes" doesn't exist in our answer. 
											{
	var answer = prompt("Are we there yet?");
}

alert("Yay, we made it!");