let notes = [];

function updateNotes() {
	let res = "";
	for (let i = 0; i < notes.length; i ++) {
		let temp = `${i+1}. ${notes[i]}<br>`;
		res += temp;
	}
	document.getElementById("notes").innerHTML = res;
}

document.getElementById("myButton").onclick = function() {
	data = document.getElementById("noteInput").value;
	notes.push(data);
	updateNotes();
}

document.getElementById("deleteLast").onclick = function() {
	notes.pop();
	updateNotes();
}

document.getElementById("addStart").onclick = function() {
	data = document.getElementById("noteInput").value;
	notes.unshift(data);
	updateNotes();
}

document.getElementById("deleteStart").onclick = function() {
	notes.shift();
	updateNotes();
}	
