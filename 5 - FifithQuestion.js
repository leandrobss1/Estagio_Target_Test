function invertString(string) {
	let inverted = "";
	for (let i = string.length - 1; i >= 0; i--) {
		inverted += string[i];
	}
	return inverted;
}

let stringVariable = "Example";
console.log(invertString(stringVariable));
