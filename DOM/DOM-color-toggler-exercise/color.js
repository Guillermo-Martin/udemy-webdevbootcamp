var button = document.querySelector("button");
var body = document.querySelector("body");
var isPurple = false;							//Colt's solution:  var isPurple = false ("Is the background purple?")

button.addEventListener("click", function (){
	if(isPurple) {								//if the background is purple,				//the site doesn't start off as purple
		body.style.background = "white";		//change it to white
		isPurple = false;						//and then isPurple is false because we changed it to white
	} else {									//otherwise (if it's not purple)
		body.style.background = "purple";		//change it to purple
		isPurple = true;
	}
});
	

//My Logic: 
//if the background is white, change it to purple, 
	//else change it to white

	//background starts out white

	//store the current color as a variable

//if(isPurple) is shorthand for "if isPurple is true..."