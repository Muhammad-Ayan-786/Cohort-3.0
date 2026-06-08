/* =============== Console Methods ============== */
console.log("Hello World from JavaScript")
console.warn("It's Warning")
console.error("It's Error")
console.table([1, 2, 3, 4, 5])



/* =============== Variables ============== */
var a; // Declaration
a = 10; // Assignment

var myName = "Mohammad Ayan Asim"
var myAge = 17
console.log(myName, myAge)

/* Noo Need To Define The Data Type Like :
int x = 10;
float y = 3.14;
char z = 'A';
string name = "Mohammad Ayan Asim";
*/

/* Naming Conventions :
'mohdayan' -> Lowercase
'MOHDAYAN' -> Uppercase
'modhAyan' -> CamelCase (Standard Naming Convention)
'ModhAyan' -> PascalCase (Used in Object-Oriented Programming)
*/



/* =============== Arithmetic Operators ============== */
var x = 12
var y = 4

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)

/* ------ Unary Operators ------ */
var n = 5;
n++;   // n is now 6 (post-increment)
++n;   // n is now 7 (pre-increment)
n--;   // n is now 6
--n;   // n is now 5



/* =============== Assignment Operators ============== */
let z = 10;
z += 5;   // z = z + 5 → 15
z -= 3;   // z = z - 3 → 12
z *= 2;   // z = z * 2 → 24
z /= 4;   // z = z / 4 → 6
z %= 4;   // z = z % 4 → 2



/* =============== Comparison Operators ============== */
console.log(5 == "5");    // true   (loosely coupled — converts types)
console.log(5 === "5");   // false  (strict equality — checks type AND value)
console.log(5 != "5");    // false
console.log(5 !== "5");   // true
console.log(5 > 3);       // true
console.log(5 <= 5);      // true
// Rule: Always use === and !==. Avoid == and != because they do type coercion and cause hidden bugs.



/* =============== Logical Operators ============== */
var j = true, k = false;

console.log(j && k);   // false   AND: both must be true
console.log(j || k);   // true    OR: at least one must be true
console.log(!j);       // false   NOT: flips the value

/*
<------ Short-circuit behavior: ------>

- `&&` returns the **first falsy** value, or the last value if all are truthy.
- `||` returns the **first truthy** value, or the last value if all are falsy.
*/

console.log("hello" && "world");  // "world"
console.log(0 && "hello");        // 0
console.log("" || "default");     // "default"
console.log("user" || "guest");   // "user"



/*
<=============== Data Types ==============>

- Primitive Data Types
  - Number (10 , 20.55 , -10 , 0 , 99999999)
  - null (Intentional absesnce of any value (Empty))
  - Boolean (true , false)
  - BigInt (number's range greaten than 2^53-1, beyond that is called BigInt)
  - String ('h' , 'Ayan' , "Sheryians Coding School")
  - Symbol (Unique or immutable identifier)
  - undefined (variable is declared but not assigned, value assigned by JS engine is undefined)

- Non-Primitive Data Types (Reference Data Types)
  - Array
  - Object
  - Function
  Note: (All of the above are Objects)
*/

var num = 10;
var empty = null;
var bool = true;
var big = 1234567890123456789012345678901234567890n;
var str = "Hello World";
var sym = Symbol("Hello World");
var und = undefined;
console.log(typeof (num));
console.log(typeof (empty));
console.log(typeof (bool));
console.log(typeof (big));
console.log(typeof (str));
console.log(typeof (sym));

// Symbol
var s1 = Symbol("Hello World");
var s2 = Symbol("Hello World");
console.log(s1 === s2); // false b'cuz Symbol is unique



/* =============== Concatenation ============== */
var r = 'Ayan'
var s = 10
console.log(r + s)  // "Ayan10" - (Concatenation)
console.log(r - s)  // NaN
console.log(r * s)  // NaN
console.log(r / s)  // NaN

var p = '10'
var q = '20'
console.log(p + q)  // "1020" - (Concatenation)
console.log(p - q)  // -10 - (Coercion)
console.log(p * q)  // 200 - (Coercion)
console.log(p / q)  // 0.5 - (Coercion)



/* =============== Type Coersion ============== */
// - implicit
// - explicit

/* ------ Implicit ------ */
var n1 = '10'
var n2 = '5'
console.log(n1 - n2);
// Converts n1 and n2 to Number implicitly (automatically)

/* ------ Explicit ------ */
var n3 = '8'
var n4 = Number(n3)
console.log(n4);
// Converts n1 and n2 to Number explicitly (forcefully)



/* =============== Numbers ============== */
// JavaScript has one number type — both integers and decimals are just number.
var int = 42;
var float = 3.14;
var negative = -100;
var exponent = 5e3;   // 5000

console.log(int, float, negative, exponent);


/* ------ Number Methods ------ */
var number = 3.14159;

console.log(number.toFixed(2));     // "3.14" (returns string!)
console.log(Number("42"));          // 42
console.log(Number("42abc"));       // NaN
console.log(parseInt("42px"));      // 42 (parses what it can)
console.log(parseFloat("3.14kg"));  // 3.14
console.log(isNaN("hello"));        // true
console.log(Number.isInteger(5));   // true
console.log(Number.isInteger(5.5)); // false


/* ------ Math Object ------ */
console.log(Math.PI);            // 3.14159...
console.log(Math.E);             // 2.71828...

console.log(Math.round(4.6));    // 5
console.log(Math.floor(4.9));    // 4 (always rounds down)
console.log(Math.ceil(4.1));     // 5 (always rounds up)
console.log(Math.abs(-7));       // 7
console.log(Math.max(1, 5, 3));  // 5
console.log(Math.min(1, 5, 3));  // 1
console.log(Math.pow(2, 10));    // 1024
console.log(Math.sqrt(16));      // 4
console.log(Math.random());      // random number between 0 and 1

// Common pattern — random integer between min and max :
var min = 1, max = 10;
var rand = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(rand);


/* ------ Infinity and NaN ------ */
console.log(1 / 0);   // Infinity
console.log(0 / 0);   // NaN


/* ------ Precision Errors ------ */
console.log(0.1 + 0.2);   // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);   // false

// JavaScript stores numbers in binary (0s and 1s).
// Decimal values like 0.1 and 0.2 cannot be represented exactly in binary,
// so JS stores tiny approximations of them.
// When added together, the result becomes 0.30000000000000004 instead of exactly 0.3.
// Therefore, (0.1 + 0.2 === 0.3) returns false.



/* =============== Useful String Methods ============== */
var string = "Hello, World!";

console.log(string.toUpperCase());            // "HELLO, WORLD!"
console.log(string.toLowerCase());            // "hello, world!"
console.log(string.length);                   // 13
console.log(string.indexOf("World"));         // 7  (position of "World")
console.log(string.includes("Hello"));        // true
console.log(string.slice(0, 5));              // "Hello"
console.log(string.substring(7, 12));         // "World"
console.log(string.replace("World", "JS"));   // "Hello, JS!"
console.log(string.split(", "));              // ["Hello", "World!"]
console.log("   hi   ".trim());               // "hi"
console.log("abc".repeat(3));                 // "abcabcabc"
console.log(string.startsWith("Hello"));      // true
console.log(string.endsWith("!"));            // true
console.log(string.charAt(0));                // "H"
console.log(string[0]);                       // "H" (also works)



/* =============== Truthy and Falsy ============== */

/* 
----- In a boolean context, every value is either truthy or falsy. -----
Falsy values (memorize these 6):
false, 0, "" (empty string), null, undefined, NaN
*/

if (10) console.log("I'll run");                // 0<num - Truthy
if (true) console.log("I'll run");              // true - Truthy
if ('Ayan') console.log("I'll run");            // 'Ayan' - Truthy
if ('false') console.log("I'll run");            // 'false' - Truthy
if ([]) console.log("I'll run");                // [] - Truthy
if ({}) console.log("I'll run");                // {} - Truthy
if (function () { }) console.log("I'll run");   // Function - Truthy

if (false) console.log("Won't run!");       // false - Falsy
if (0) console.log("Won't run!");           // 0 - Falsy
if ('') console.log("Won't run!");          // '' - Falsy
if (null) console.log("Won't run!");        // null - Falsy
if (NaN) console.log("Won't run!");         // NaN - Falsy
if (undefined) console.log("Won't run!");   // undefined - Falsy



/* =============== Conditions ============== */
var maths = Number(prompt("Enter you marks for Maths"));
var physics = Number(prompt("Enter you marks for Physics"));
var chemistry = Number(prompt("Enter you marks for Chemistry"));

let average = (maths + physics + chemistry) / 3;

if (average >= 85) {
  console.log("A++ ⭐");
} else if (average >= 70) {
  console.log("A+");
} else if (average >= 60) {
  console.log("B+");
} else if (average >= 50) {
  console.log("C+");
} else if (average >= 33) {
  console.log("D");
} else {
  console.log("Fail");
}

/* ------ Nested if ------ */
var age = Number(prompt("Enter your age"));
var hasLicense = true;

if (age >= 18) {
  if (hasLicense) {
    console.log("Can drive");
  } else {
    console.log("Get a license first");
  }
} else {
  console.log("Too young to drive");
}



/* =============== Ternary Operator ============== */
console.log(10 > 5 ? "10 is greater" : "5 is greater")
console.log(10 === '10' ? "10 is equal" : "10 is not equal")



/* =============== Switch-Case Statement ============== */
let day = "Saturday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Weekend coming!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("Midweek day");
}



/*
<=============== Loops ==============>
  - for loop
  - while loop
  - do-while loop
*/

/* ------ while ------ */
//1. Printing the numbers from 0 to 4
var i = 0
while (i < 5) {
  console.log(i);
  i++;
}

// 2. Printing the even numbers from 1 to 25
var j = 1
while (j <= 25) {
  if (j % 2 == 0) {
    console.log(j);
  }
  j++;
}

// 3. Multiplication Table
var multipe = Number(prompt("Enter a number to print its multiplication table"))
var k = 1
while (k <= 10) {
  console.log(`${multipe} X ${k} = ${multipe * k}`)
  k++;
}


/* ------ do-while ------ */
// 1. Printing the numbers from 0 to 4
var u = 0
do {
  console.log(u);
  u++;
} while (u < 5)

// 2. Entering RIGHT password to continue
do {
  var password = Number(prompt("Enter Password"))
} while (password !== 123);


/* ------ for ------ */
// 1. Printing the numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Printing the odd numbers from 1 to 25
for (let j = 1; j <= 25; j++) {
  if (j % 2 != 0) {
    console.log(j);
  }
}



/* =============== Break and Continue ============== */
// Break
for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// Continue
for (let i = 1; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// Printing the even numbers with continue keyword
for (let i = 1; i <= 10; i++) {
  if (i % 2 != 0) {
    continue;
  }
  console.log(i);
}

/* =============== alert(), confirm(), prompt ============== */
alert("I'm an Alert") // used to tell smt to user

var ans = confirm("Are you sure?") // Questions of either True or False
console.log(ans)

var name = prompt("Enter Your Name") // used to ask smt to user (Always Return String)
console.log(name)