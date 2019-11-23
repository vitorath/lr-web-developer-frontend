function media(n1, n2) {
  return (n1 + n2) / 2;
}

var med = media;

console.log(med(10, 9));
console.log(media(10, 9));
console.log(media(7, 8));
console.log(media(6.5, 8.3));

var media = function(n1, n2) {
  return (n1 + n2) / 2;
};

console.log("Função anônima " + media(10, 9));

var media = (n1, n2) => {
  return (n1 + n2) / 2;
};

console.log("Função anônima (arrow functions) " + media(10, 9));
