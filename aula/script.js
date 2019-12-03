function clickElement(e) {
  console.log("element");
  console.log(this);
  console.log(e);
}

function clickJavascript(e) {
  console.log("javascript");
  console.log(this);
  console.log(e);
  console.log(e.target);
}

window.onload = function() {
  let h1 = document.getElementsByTagName("h1")[0];
  h1.addEventListener("click", clickJavascript);
};
