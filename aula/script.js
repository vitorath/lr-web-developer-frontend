let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");

t1.onclick = colorcarEmMaiusculo;
t2.onclick = colorcarEmMaiusculo;

function colorcarEmMaiusculo() {
  this.innerHTML = this.innerHTML.toUpperCase();
}
