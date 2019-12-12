let a = {
  nome: "Vitor",
  age: 25
};

let b = JSON.stringify(a);

let a2 = '{"nome": "Vitor","age": 25 }';
let b2 = JSON.parse(a2);

console.log(a);
console.log(b);
console.log(a2);
console.log(b2);
