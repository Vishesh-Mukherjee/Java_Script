function startProgram() {
	let username = document.getElementById("name").value;
	let userage = document.getElementById("age").value;
	userage = Number(userage);
	singSong(username, userage);
}

function singSong(username, userage) {
	document.getElementById("one").innerHTML = "Happy birthday to you!";
	document.getElementById("two").innerHTML = "Happy birthday to you!";
	document.getElementById("three").innerHTML = "Happy birthday dear " + username;
	document.getElementById("four").innerHTML = "Happry birthday to you!";
	document.getElementById("five").innerHTML = "You are " + (userage+1) + " years old!";
}
	

document.getElementById("myButton").onclick = function() {
	startProgram();
}

