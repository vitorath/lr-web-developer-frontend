function calcMedia() {
  return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
  nome: "Vitor",
  notas: [7.5, 9.8],
  media: calcMedia
};

var aluno2 = {
  nome: "Franciane",
  notas: [7.5, 9.8],
  media: calcMedia
};

console.log(aluno, aluno.media());
console.log(aluno2, aluno2.media());
