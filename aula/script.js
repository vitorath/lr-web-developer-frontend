function mudarText() {
  this.innerHTML = "Novo Texto";
}

function mouseOut() {
  this.innerHTML = "Mouse fora do elemento";
}

function loaded() {
  let t = document.getElementById("titulo");
  // t.onclick = mudarText;
  t.addEventListener("click", mudarText);
  t.addEventListener("mouseout", mouseOut);
}
