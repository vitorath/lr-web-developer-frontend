window.onload = function() {
  // let d1 = document.getElementById("d1");
  // let h1 = d1.children[0];
  // console.log(h1.parentElement);
  // console.log(document.body.children);
  // console.log(document.body.children[0].children);

  function qualOPai(e) {
    let t = e.target;
    console.log(t.parentElement);
  }

  let h1 = document.getElementsByTagName("h1");
  for (let h of h1) {
    h.addEventListener("click", qualOPai);
  }
};
