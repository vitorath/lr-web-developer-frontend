var d = new Date("sep 05 2017 22:30");

d = new Date("07 05 2017  22:30");
console.log(d);

d = new Date("12/25/2018");
console.log(d);

var dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

console.log(d.getFullYear());
console.log(d.getDate());
console.log(dias[d.getDay()]);
console.log(d.getTime());
