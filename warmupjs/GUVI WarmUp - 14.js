/* Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space. */

function getFullName(firstName, lastName) {
	///Your code Starts here 
	if (firstName != "" && lastName == undefined)
		return firstName;
	
	if (firstName != "" && lastName != "")
		return firstName + " " + lastName;
	
	
	if (firstName == "" && lastName == "")
		return firstName + lastName;
	
	///Your code Ends here
}
console.log(getFullName("GUVI", "GEEK"));
console.log(getFullName("GUVI"));
console.log(getFullName("GEEK"));
console.log(getFullName("", ""));