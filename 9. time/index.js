// setTimeout() = invokes a function after a number of milliseconds
// 		  asynchronous function (doesn't pause execution)

let item = "cryptocurrency";
let price = 420.69;

let t1 = setTimeout(() => window.alert(`Buy this ${item} for $${price}!`), 3000);
let t2 = setTimeout(() => window.alert("This is not a scam!"), 6000);
let t3 = setTimeout(() => window.alert("DO IT!"), 9000);

document.getElementById("myButton").onclick = function() {
	clearTimeout(t1);
	clearTimeout(t2);
	clearTimeout(t3);
	window.alert("Thanks for buying <3");
}

// setInterval() = invokes a function repeatedly after a number of milliseconds
// 	 asynchronous function (doesn't pause execution)

let count = 0;
let max = window.prompt("Count up to what number?: ");
max = Number(max);

const id = setInterval(countUp, 1000);

function countUp() {
	count ++;
	console.log(count);
	if (count >= max) {
		clearInterval(id);
	}
}
