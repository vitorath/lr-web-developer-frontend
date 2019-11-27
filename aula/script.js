function clickH1() {
  console.log("Executando função");
  this.style.color = "red";
}

function changeInput(input) {
  let h1 = document.getElementsByTagName("h1")[0];
  h1.innerText = input.value;
}

function toggleH1() {
  console.log("tes");
  let h1 = document.getElementsByTagName("h1")[0];
  if (h1.style.display === "none") {
    h1.style.display = "block";
  } else {
    h1.style.display = "none";
  }
}
