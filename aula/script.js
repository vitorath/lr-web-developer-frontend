console.log(document);
console.log(document.body);
console.log(document.body.innerHTML);
document.body.innerHTML =
  "<h1>Este título foi inserido no javascript</h1>" + document.body.innerHTML;
console.log(document.body.innerHTML);
