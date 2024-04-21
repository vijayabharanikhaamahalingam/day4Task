/* Create a function that returns the number of frames shown in a given number of minutes for a certain FPS. */

function frames(num1, num2) {
	///Your code Starts here 
	
	return ((num1 * num2) * 60);
	
	
	
	///Your code Ends here
}

console.log(frames(1, 1));
console.log(frames(10, 1));
console.log(frames(10, 25));