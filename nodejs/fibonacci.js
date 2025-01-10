function calculaFibonacci(numero) {
  const fibonacci = [0, 1];

  while (fibonacci[fibonacci.length - 1] < numero) {
    const [a, b] = fibonacci.slice(-2);
    fibonacci.push(a + b);
  }

  return fibonacci;
}

function solicitarNumero() {
  const prompt = require("prompt-sync")();

  while (true) {
    const input = prompt("Digite um número: ");
    const numero = parseInt(input);

    if (!isNaN(numero)) {
      return numero;
    }

    console.log("Por favor, insira um número inteiro válido.");
  }
}

const numero = solicitarNumero();
const fibonacci = calculaFibonacci(numero);

if (fibonacci.includes(numero)) {
  console.log(`Sequência de Fibonacci até ${numero}: [${fibonacci}]`);
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
