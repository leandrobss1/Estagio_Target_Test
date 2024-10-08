// Criando objeto e variável

const billingByState = {
	SP: 67836.43,
	RJ: 36678.66,
	MG: 29229.88,
	ES: 27165.48,
	Outros: 19849.53,
};

let total = Object.values(billingByState).reduce((acc, val) => acc + val, 0);

// Criação de condicional

for (let state in billingByState) {
	let percentage = (billingByState[state] / total) * 100;
	console.log(`${state}: ${percentage.toFixed(2)}%`);
}
