// Criação de objeto e função

const billingMonthly = [
	{ dia: 1, valor: 35987.1999 },
	{ dia: 2, valor: 31451.6295 },
];

function calculateBilling(invoicing) {
	let total = 0,
		count = 0;
	let min = Number.MAX_VALUE,
		max = Number.MIN_VALUE;

	invoicing.forEach((day) => {
		if (day.valor > 0) {
			total += day.valor;
			count++;
			if (day.valor < min) min = day.valor;
			if (day.valor > max) max = day.valor;
		}
	});

	let average = total / count;
	let daysAboveAverage = invoicing.filter((dia) => dia.valor > average).length;

	return { min, max, daysAboveAverage };
}

// Mostrando o resultado solicitado

const resultado = calculateBilling(billingMonthly);
console.log(`Menor valor: ${resultado.min}`);
console.log(`Maior valor: ${resultado.max}`);
console.log(`Dias acima da média: ${resultado.daysAboveAverage}`);
