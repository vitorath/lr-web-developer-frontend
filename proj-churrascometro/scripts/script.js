let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

async function calcular() {
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;
  const settings = await findByDuration(parseInt(duracao));
  console.log(settings);

  if (!settings) {
    resultado.innerHTML = "<p>Ocorreu um erro ao realizar o calculos</p>";
    return;
  }

  let qtdsKgCarne = (adultos * settings.carne + (settings.carne / 2) * criancas) / 1000;
  let qtdsLatasCerveja = Math.ceil((adultos * settings.cerveja) / 355);
  let qtdsPets2lBebidas = Math.ceil((adultos * settings.bebida + (settings.bebida / 2) * criancas) / 2000);

  resultado.innerHTML = `<p>${qtdsKgCarne}kg de carne`;
  resultado.innerHTML += `<p>${qtdsLatasCerveja} latas de cerveja`;
  resultado.innerHTML += `<p>${qtdsPets2lBebidas} Pet's 2l de outras bebidas`;
}

async function findByDuration(duracao) {
  try {
    const settings = await fetch("../data/settings.json").then(response => response.json());
    let returnedSettings = null;
    for (let setting of settings) {
      if (duracao > setting.minDuracao && duracao <= setting.maxDuracao) {
        returnedSettings = setting;
      }
    }
    return returnedSettings;
  } catch (e) {
    return null;
  }
}
