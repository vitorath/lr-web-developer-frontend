let pessoas = ["Vitor", "João", "Pamela", "Marcos"];

function sortear() {
  let np = pessoas.length;
  let ns = Math.floor(Math.random() * np);
  document.getElementById("display").innerHTML = pessoas[ns];
}
