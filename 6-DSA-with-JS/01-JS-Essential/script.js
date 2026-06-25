/* ============================
Q1. Variables (var, let, const)
============================= */
var varVariable = 10
let letVariable = 63
const constantVariable = 3.14


/* ============================
Q2. Relation between integer
and string
============================= */
// string + string = string (concatenation)
// string + integer = string (concatenation)
// integer + integer = integer (arithmetic)

let s1 = "Hello"
let s2 = "DSA"
let int = 10
console.log(s1 + s2);
console.log(s1 + int);

let a = 10
let b = 20
console.log("The sum of " + a + " and " + b + " is " + a + b); // concatenation
console.log("The sum of " + a + " and " + b + " is " + (a + b)); // arithmetic (BODMAS)


/* ============================
Q3. Type coercion
============================= */
console.log('1' - 1); // arithmetic
/* 
• Change the type of '1' to number
and it is called type coercion.
• Only happens when -, *, /, % are used.
*/


/* ============================
Q4. Accept & print the answer
  - greet the user
============================= */
let prompt = require('prompt-sync')()
let name = prompt("Enter your name: ")
let age = Number(prompt("Enter your age: "))
console.log(`Name: ${name} \nAge: ${age}`);


/* ============================
Q5. Swap two variables via
3 methods
============================= */

// METHOD 1
{
  let e = 56, f = 14;

  /**
   * Method 1: Using 3rd variable
   * temp = e // temp = 56
   * e = f // e = 14
   * f = temp // f = 56
  */

  console.log(`Before e: ${e} , f: ${f}`);

  let temp = e
  e = f
  f = temp

  console.log(`After e: ${e} , f: ${f}`);
}

// METHOD 2
{
  let x = 20, y = 30;

  /**
   * Method 2: Using addition & subtraction
   * x = x + y // x = 50
   * y = x - y // y = 20
   * x = x - y // x = 30
  */

  console.log(`Before x: ${x} , y: ${y}`);

  x = x + y // x = 50
  y = x - y // y = 20
  x = x - y // x = 30

  console.log(`After x: ${x} , y: ${y}`);
}

// METHOD 3
{
  let r = 3, s = 8;

  /**
   * Method 3: Swapping destructuring arras
   * [r, s] = [s, r] // [r=s->8, s=r->3] = [s=8, r=3]
   * r = 8
   * s = 3
  */

  console.log(`Before r: ${r} , s: ${s}`);

  [r, s] = [s, r]

  console.log(`After r: ${r} , s: ${s}`);
}