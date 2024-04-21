/* Write a function called "isEven". "isEven" Should return whether it is even or not. Return -1 for invalid input. */

function isEven(num) {
	///Your code Starts here 
	if (num % 2 == 0) {
		return true;
	} else if (isNaN(num)) {
		return -1;
	} else {
		return false;
	}
}

console.log(isEven(12));
console.log(isEven(0));
console.log(isEven(11));
console.log(isEven("11h"));