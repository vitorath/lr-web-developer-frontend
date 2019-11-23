var numero = 5;

for (var vez = 0; vez < numero; vez++) {
  console.log("Executando o for, pela " + vez + " vez");
  vez = 4;
}
console.log("Acabou for");

numero = Math.random() * 100;

while (numero < 90) {
  console.log("Número " + numero);
  numero = Math.random() * 100;
}
console.log("Acabou while");
