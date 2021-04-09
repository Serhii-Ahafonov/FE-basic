function visitLink(path) {
	let currentValue = localStorage.getItem(path) ? parseInt(localStorage.getItem(path)) : 0;
    let newValue = currentValue + 1;
    localStorage.setItem(path, newValue);
}

function viewResults() {
	const ul = document.createElement('ul');
	document.getElementById('content').appendChild(ul);
	let keys = Object.keys(localStorage);
	for (let i = 0 ; i<keys.length; i++) {
		const li = document.createElement('li');
		li.textContent = `You visited ${keys[i]} ${localStorage.getItem(keys[i])} time(s) `
		ul.appendChild(li);
	}
	localStorage.clear();
}