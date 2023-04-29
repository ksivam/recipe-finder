// single line comment
/*
multi
line 
comment
*/

/*
Introduction to Javascript Programming
0. Keywords
1. Variables
2. Data Types
3. Operators
4. Control Structures
*/

// Keywords: var, true, false, function, type,

// variables:
var name; // declaration
var age;

// data types
/*
- string: anything that goes inside a double quotes is a string
- number: (- <-> +) whole number, decimals/fractions, 
- boolean: true or false
- object: {}
*/

// assignemt
name = "John"; // string
age = 23; // number

// declare and assignemnt in a single step
var isMinor = false; // boolean
var address = { // object
  number: 13,
  street: "Green",
  city: "Richmond",
  province: "BC",
  country: "Canada"
};


// operators
/*
- Arthimetic: +, -, *, / (quotient), % (remainder)
- Assignment: =, +=, -=, *=, /=
- Comparison: output of comaprison is either true or false. 
=== (equals), !== (not equals), >, <, >=, <=
- Logic: && (and) , || (or)
- Unary: ++, --
*/

x++; // x = x + 1;, x += 1;
x--; // x = x - 1;, x -= 1;

var x = 20;
var y = 21;
var z = x + y;
log(z);
z = x - y;
log(z);
z = x * y;
log(z);
z = x / y;
log(z);
z = y % x;
log(z);


x = x + y;
x += y;
log(x);
x = x - y;
x -= y;
log(x);
x = x * y;
x *= y; 
log(x)
x = x / y;
x /= y;
log(x);

x = 20;
y = 21;

var v = (x === y); // equals to
log(v);
v = x != y; // not equal to
log(v);
v = x > y; // greater than
log(v);
v = x < y; // less than
log(v);
v = x >= y; // greater or equal to
log(v);
v = x <= y; // less than or equal to 
log(v);

/**
true && true = true
true && false = false 
false && true = false  
false && false = false

true || true = true
true || false = true 
false || true = true
false || false = false
*/
x = 10;
y = 20;
z = 30;

v = (x === y) && (x === z);
log(v);

v = (x > y) || (x < z);
log(v);

v = (x >= y) || (z <= x);
log(v);

v = (x < y) && (x < z);
log(v);

v = (z > y) && (y > x);
log(v);

x = 10;
y = 20;
z = 15;

v = (x < y) && (y < z); // x, y and z are in ascendaing order
log(v);


x = 10;
// check whether x is even number
v = (x % 2) === 0;
log(v);

v = (x % 2)  != 0;
log(v);

var bananaNutrients;
log("I am going to build a banana nutrient list");
bananaNutrients = {
  name: "Banana",
  calories: 200,
};




// === QUIZ ===
//comment
/*
multi
line
comment
long
long
*/
var num; 
num = 12;
var name = "foobar";
var fool = true;
fool = false;
var resturaunt = {};

resturaunt.name = "Mcdonalds";// . tells 
resturaunt.location = "Richmond";
resturaunt.name = "Arbys";

log(resturaunt.name);
log(resturaunt.location);


var x = 20;
var y = 30;

var r = x === y;

r = x > y; 
r = (x > 50) && (y % 2 === 0); 
r = (y % 2 === 0) || (x % 2 === 0)



