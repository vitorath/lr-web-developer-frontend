var nomes = ["Vitor", "Franciane", "Ana"];
var notasA = [7.8, 8.0, 8.5];
var notasB = [9.0, 8.5, 5.0];

function media(notaA, notaB) {
  return (notaA + notaB) / 2;
}

function passou(media) {
  if (media > 7) {
    return "Aprovado";
  }
  return "Reprovado";
}

for (var index in nomes) {
  var notaA = notasA[index];
  var notaB = notasB[index];
  var notaMedia = media(notaA, notaB);
  console.log(
    nomes[index] +
      " - " +
      notaA +
      " - " +
      notaB +
      " - " +
      notaMedia +
      " - " +
      passou(notaMedia)
  );
}
