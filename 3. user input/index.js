// EASY WAY: window prompt
// DIFFICULT WAY: HTML textbox

// let username = window.prompt("What's your name: ");
// console.log("Hello, " + username);

let username = "Testing";
document.getElementById("myButton").onclick = function() {
	username = document.getElementById("myText").value;
	// console.log(username);
	document.getElementById("myLabel").innerHTML = "Hello, " + username;
}




