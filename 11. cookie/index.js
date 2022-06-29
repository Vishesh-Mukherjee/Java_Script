// document.cookie = "userFirst=Vishesh; expires=Thu, 18 Dec 2030 12:00:00 UTC; path=/";	
// document.cookie = "userLast=Mukherjee; expires=Thu, 18 Dec 2030 12:00:00 UTC; path=/";    

// setCookie("email", "random@gamil.com", 365);
// setCookie("firstName", "Vishesh", 365);

// deleteCookie("userFirst");
// deleteCookie("userLast");

// deleteCookie("email");
// deleteCookie("firstName");

const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitButton = document.querySelector("#myButton");
const cookieButton = document.querySelector("#cookieButton");

submitButton.addEventListener("click", () => {
	setCookie("firstName", firstText.value, 365);
	setCookie("lastName", lastText.value, 365);
});

cookieButton.addEventListener("click", () => {
	firstText.value = getCookie("firstName");
	lastText.value = getCookie("lastName");
});

function setCookie(name, value, daysToLive) {
	const date = new Date();
	date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
	let expires = "expires=" + date.toUTCString();
	document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name) {
	setCookie(name, null, null);
}

function getCookie(name) {
	const cDecoded = decodeURIComponent(document.cookie);
	const cArray = cDecoded.split("; ");	
	console.log(cArray);
	let result = null;
	cArray.forEach(element => {
		if (element.indexOf(name) == 0) {
			result = element.substring(name.length+1);
		}
	});
	return result;
}
