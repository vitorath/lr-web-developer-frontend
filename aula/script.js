var aluno = { nome: "Vitor", nota: [7.5, 9.8] };
aluno.matriculo = "12345";
aluno["sobrenome"] = "Thomazini";

var novaPropriedade = "status";
aluno[novaPropriedade] = "Aprovado";

console.log(aluno.nome, aluno["notaA"]);
console.log(aluno);
