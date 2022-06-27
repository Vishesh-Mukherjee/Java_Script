/* array.forEach():
 * 	executes a provided callback function
 * 	once for each array element.
 */

let students = ["vishesh", "tushar", "shubham"];

students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array) {
	array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element) {
	console.log(element);
}

/* array.map():
 * 	executes a proivded callback function
 * 	once for each array element
 * 	and creates a new array
 */

let numbers = [1, 5, 2, 4, 3];

function timesTwo(element) {
	return 2*element;
}

let modifiedNumbers = numbers.map(timesTwo);

modifiedNumbers.forEach(print);

/* array.filter():
 * 	create a new array with all elements 
 * 	that pass the test provided by a function
 */

let ages = [21, 16, 15, 18, 19, 23, 32, 14];
let adults = ages.filter(checkAge);

function checkAge(element) {
	return element >= 18;
}

adults.forEach(print);

/* array.reduce():
 * 	reduce an array to a single value
 */

let price = [5, 10, 15, 20, 25];
let total = price.reduce(checkOut);

console.log(`The total is ${total}`);

function checkOut(total, element) {
	return total+element;
}

/* array.sort():
 * 	Used for sorting
 */

let grades = [50, 100, 90, 60, 80, 70];

grades = grades.sort(decending);
grades.forEach(print);

function ascending(a, b) {
	return a-b;
}

function decending(a, b) {
	return b-a;
}

