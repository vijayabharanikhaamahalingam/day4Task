/* Create a function to calculate the distance between two points defined by their x, y coordinates. */

function getDistance(x1, y1, x2, y2) {
	///Your code Starts here 
	
	return Math.floor(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)));
	
	
	
	///Your code Ends here
}

console.log(getDistance(100, 100, 400, 300));
console.log(getDistance(1, 2, 4, 6));