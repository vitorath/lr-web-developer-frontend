function mudarCor() {
  let h = document.getElementsByTagName("h1")[0];
  h.style.color = "blue";
}

var numero = 0;
var interval;
var timer;

function atualizarTexto() {
  let h = document.getElementsByTagName("h1")[0];
  h.innerHTML += " " + numero;
  numero++;
}

function iniciar() {
  timer = setTimeout(mudarCor, 5000);
  interval = setInterval(atualizarTexto, 1000);
}

function parar() {
  clearInterval(interval);
  clearTimeout(timer);
}
