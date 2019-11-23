var nota1 = 5.0;
var nota2 = 5.8;

var media = (nota1 + nota2) / 2;
var conceito = "";

if (media >= 8) {
  conceito = "Ótimo";
} else if (media >= 6.5) {
  conceito = "Bom";
} else {
  conceito = "Regular";
}
console.log("Média: " + media + " - Conceito: " + conceito);

switch (conceito) {
  case "Ótimo":
    console.log("Parabéns, você é um ótimo aluno");
    break;
  case "Bom":
    console.log("Você é quase perfeito");
    break;
  case "Regular":
    console.log("Estudo um pouco mais");
    break;
  default:
    console.log("Houve algum erro");
    break;
}
