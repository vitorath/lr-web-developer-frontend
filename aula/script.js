// localStorage.setItem("nome", "vitor");
// console.log(localStorage.getItem("nome"));
// localStorage.removeItem("nome");
// console.log(localStorage.getItem("nome"));

let aluno = { nome: "Vitor", nota: "9.2" };
localStorage.setItem("aluno", JSON.stringify(aluno));
let alunoReceive = localStorage.getItem("aluno");
console.log(JSON.parse(alunoReceive));
localStorage.clear();

onload = function() {
  let nome = this.localStorage.getItem("name");
  let h1 = document.getElementById("name");
  h1.innerHTML = nome;
};

function atualizar(element) {
  let valor = element.value;
  console.log(valor);

  let h1 = document.getElementById("name");
  h1.innerHTML = valor;

  localStorage.setItem("name", valor);
}
