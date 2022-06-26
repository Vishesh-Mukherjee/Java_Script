let age = window.prompt("How old are you?: ");

console.log(typeof age);
age =  Number(age);
console.log(typeof age);
age += 1;

console.log("Happy birthday! you are ", age, " years old");

x = Number("3.14");
console.log(typeof x);

y = String(3.14);
console.log(typeof y);

z = Boolean("");
console.log(typeof z, z);

z = Boolean("Something");
console.log(typeof z, z);
