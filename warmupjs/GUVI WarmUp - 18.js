/* Given an array and an integer, "getNthElement" returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’. */

function getNthElement(array, n) {
	///Your code Starts here 
	if (array.length == 0) {
		return undefined
	} else
		return array[n];
	
	///Your code Ends here
}
console.log(getNthElement([1, 3, 5], 1));
console.log(getNthElement([1, 3, 5], 2));
console.log(getNthElement([], 2));