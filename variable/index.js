/*
 * A variable is a container for storing data
 * A variable behaves as if it was the value that it contains
 *
 * Two steps:
 * 1. Declaration (var, let, const)
 * 2. Assignment (= assignment operator)
 */

let pie;
console.log(pie); // Undefined
pie = 3.14;
console.log(pie); // 3.14

let age = 21;
console.log(age); // 21

let name = "Vishesh Mukherjee";
console.log(name); // Vishesh Mukherjee

let flag = false;
console.log(flag); // false

let n = "100";
n = n + 1;
console.log(n) // 1001 - Concatenation

console.log("Hello, my name is " + name + " and I'm " + age + " years old.");
console.log("Value of pie: " + pie);

document.getElementById("p1").innerHTML = "Hello, my name is " + name + " and I'm " + age + " years old";
document.getElementById("p2").innerHTML = "Value of pie" + pie;
