// Criando função de fibonnaci

function isFibonacci(num) {
	let a = 0,
		b = 1,
		c;
	while (b < num) {
		c = a;
		a = b;
		b = c + b;
	}
	return b === num || num === 0;
}

let number = 21;

// Criando uma condicional para mostrar o resultado da fibo

if (isFibonacci(number)) {
	console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
	console.log(`${number} não pertence à sequência de Fibonacci.`);
}
