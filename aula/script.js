let p1 = document.getElementById("p1");
p1.innerText = "<h3>Tem h3 dento p</h3>";

let p2 = document.getElementById("p2");
p2.textContent = "<h3>Tem h3 dento p</h3>";

let p3 = document.getElementById("p3");
p3.innerHTML = "<h3>Tem h3 dento p</h3>";

p1.className = "";
p1.style = "color: blue;";

let meuAttr = p1.getAttribute("meuAttr");
console.log(meuAttr);
console.log(p1);

p1.setAttribute("meuAttr", "Outro valor");
console.log(p1);

p1.setAttribute("novoAttr", "Nobo valor");
console.log(p1);

p1.style.backgroundColor = "red";
