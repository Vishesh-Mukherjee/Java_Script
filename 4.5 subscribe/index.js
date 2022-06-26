document.getElementById("myButton").onclick = function() {
	const subCheckBox = document.getElementById("subCheckBox");
	if (subCheckBox.checked) {
		console.log("User is subscribed");
	} else {
		console.log("User is not subscribed");
	}
	const oneStar = document.getElementById("one");
	const twoStar = document.getElementById("two");
	const threeStar = document.getElementById("three");
	if (oneStar.checked) {
		console.log("One star rating");
	} else if (twoStar.checked) {
		console.log("Two star rating");
	} else if (threeStar.checked) {
		console.log("Three star rating");
	} else {
		console.log("No rating");
	}
}
