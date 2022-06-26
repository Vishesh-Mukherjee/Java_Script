document.getElementById("roll").onclick = function() {

	console.log("Testing");
	let a = Math.floor(Math.random() * 6) + 1;
	let b = Math.floor(Math.random() * 6) + 1;
	let c = Math.floor(Math.random() * 6) + 1;

	document.getElementById("one").innerHTML = a;
	document.getElementById("two").innerHTML = b;
	document.getElementById("three").innerHTML = c;
}
