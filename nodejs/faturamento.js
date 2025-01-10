const faturamento = require("../dados.json");

const valores = faturamento
  .filter((dia) => dia.valor > 0)
  .map((dia) => dia.valor);

// Calculando o menor, maior valor e a média
const menor = Math.min(...valores);
const maior = Math.max(...valores);
const media = valores.reduce((acc, val) => acc + val, 0) / valores.length;

// Contando os dias com faturamento superior ? média
const diasAcimaMedia = valores.filter((valor) => valor > media).length;

console.log(`Menor valor de faturamento: R$${menor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$${maior.toFixed(2)}`);
console.log(`Dias com faturamento superior a media: ${diasAcimaMedia}`);
