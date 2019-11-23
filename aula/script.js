console.log("True and True", true && true);
console.log("True and False", true && false);
console.log("False and False", false && false);
console.log("True or True", true || true);
console.log("True or False", true || false);
console.log("False or False", false || false);

var c = true;
c &= false;
console.log("&=", c);
c |= true;
console.log("|=", c);
