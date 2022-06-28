/*
 * promise: object that encapsulates the result of an asynchronous operation
 * 	    let asychronous methods return values like synchronous methods
 * 	    "I promise to return something in the future"
 *	    
 *	    the STATE is 'pending' then: 'fulfilled' or 'rejected'
 *	    the RESULT is what can be returned 
 *	    2 parts producing and consuming
 */

/*
const promise = new Promise((resolve, reject) => {
	let fileLoaded = false;
	if (fileLoaded) {
		resolve("File loaded");
	} else {
		reject("File not loaded");
	}
});

promise.then((msg) => console.log(msg)).catch((error) => console.log(error));
*/

/*
const promise = new Promise(resolve => {
	setTimeout(resolve, 5000);
});

promise.then(() => console.log("Thanks for waiting"));
*/

/*
const wait = time => new Promise(resolve => {
	setTimeout(resolve, time);
});

wait(3000).then(() => console.log("Thanks for waiting"));
*/

// async = makes a function returns a Promise

/*
async function loadFile() {
	fileLoaded = false;
	if (fileLoaded) {
		return "File loaded";
	} else {
		throw "File NOT loaded";
	}
}

loadFile().then(msg => console.log(msg)).catch(error => console.log(error));
*/

/*
function loadFile() {
	let fileLoaded = false;
	if (fileLoaded) {
		return Promise.resolve("File loaded");
	} else {
		return Promise.reject("File not loaded");
	}
}

loadFile().then(msg => console.log(msg)).catch(error => console.log(error));
*/

// await = makes an async function wait for a promise

async function loadFile() {
	let fileLoaded = true;
	if (fileLoaded) {
		return "File loaded";
	} else {
		throw "File NOT loaded";
	}
}

// loadFile().then(msg => console.log(msg)).catch(error => console.log(error));
//

async function startProcess() {
	try {
		let msg = await loadFile();
		console.log(msg);
	} catch(error) {
		console.log(error);
	}
}

startProcess();
