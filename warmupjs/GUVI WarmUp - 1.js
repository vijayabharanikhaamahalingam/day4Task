/* Write a function called "getOpposite".
If the given value is an integer, return its opposite value, otherwise return -1 */

function getOpposite(num) {
	///Your code Starts here 
	if (isNaN(num)) {
		return -1;
	} else if (num % 1 != 0) {
		return -1;
	} else
		return -(num)
	///Your codEnds here
}
console.log(getOpposite(5));
console.log(getOpposite(0));
console.log(getOpposite(-5));
console.log(getOpposite(5.5));
console.log(getOpposite("5a"));
/*
Lines For TestCase

getOpposite(5);
getOpposite(0);
getOpposite(-5);
getOpposite("5a");
getOpposite(5.5)
*/