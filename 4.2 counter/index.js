let counter = 0;

document.getElementById("incrementButton").onclick = function() {
	counter ++;
	document.getElementById("count").innerHTML = counter;
}

document.getElementById("decrementButton").onclick = function() {
	counter --;
	document.getElementById("count").innerHTML = counter;
}

document.getElementById("resetButton").onclick = function() {
	counter = 0;
	document.getElementById("count").innerHTML = counter;
}
