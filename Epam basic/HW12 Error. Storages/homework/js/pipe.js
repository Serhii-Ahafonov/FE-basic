function isFunction(functionToCheck) {
	return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]' ;
}

const pipe = (value, ...funcs) => {	
	for (let i = 0; i<funcs.length; i++){
		let currentFunction = funcs[i];
		try {
			throw isFunction(currentFunction);
		} catch (e) {
			if (Boolean(e) === false) {
				return `Provided argument at position ${funcs.indexOf(currentFunction)} is not a function!`;
			} else {
				value = currentFunction(value);
			}
		}
	}
	return value
};

const replaceUnderscoreWithSpace = (value) => value.replace(/_/g, ' ');
const capitalize = (value) =>
	value
		.split(' ')
		.map((val) => val.charAt(0).toUpperCase() + val.slice(1))
		.join(' ');
const appendGreeting = (value) => `Hello, ${value}!`;

const error = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, '');

alert(error); // Provided argument at position 2 is not a function!

const result = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, appendGreeting);

alert(result); // Hello, John Doe!
