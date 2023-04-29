/*
A function is a block of code, written once, called many times.

It can take inputs, and return output

It can also produce side effects.

example of side effects: printing, calling other functions
*/

// function definition or declarition
function greet(name) {
  log("Hello " + name + "!.");
}

// calling a function
greet("Alice");
greet("Bob");

function add(num1, num2) {
  return num1 + num2;
}

log(add(5, 10));
log(add(20, 10));

function multiply(num1, num2) {
  return num1 * num2;
}

function multiply(num1, num2, num3) {
  return num1 * num2 * num3;  
}

log(multiply(2, 3, 5));

function divide(num1, num2) {
  return num1 / num2;
}

log(divide(4, 2));

function remander(num1, num2) {
  return num1 % num2;
}

log(remander(14, 2));

function equation(x, y, z) {
  var f = multiply (x, y);
  return divide(f, z);
}




