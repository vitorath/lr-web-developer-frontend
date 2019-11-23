function criarAluno(nome, nota1, nota2) {
  return {
    nome: nome,
    nota1: nota1,
    nota2: nota2,
    media: function() {
      return (this.nota1 + this.nota2) / 2;
    }
  };
}

function Aluno(nome, nota1, nota2) {
  this.nome = nome;
  this.nota1 = nota1;
  this.nota2 = nota2;

  this.media = function() {
    return (this.nota1 + this.nota2) / 2;
  };
}

var turma = [new Aluno("Vitor", 9, 8), new Aluno("Franciane", 9, 8.5)];

turma.forEach(function(elemento) {
  console.log(elemento.nome, elemento.media());
});
