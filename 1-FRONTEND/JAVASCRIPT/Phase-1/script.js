// Console Methods
console.log("Hello World from JavaScript")
console.warn("It's Warning")
console.error("It's Error")
console.table([1, 2, 3, 4, 5])

// Variables
var a; // Declaration
a = 10; // Assignment

var name = "Mohammad Ayan Asim"
var age = 17
console.log(name, age)

// Arithmetic Operators
var x = 12
var y = 4

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)

/* Noo Need To Define The Data Type Like :
int x = 10;
float y = 3.14;
char z = 'A';
string name = "Mohammad Ayan Asim";
*/

// 'mohdayan' -> Lowercase
// 'MOHDAYAN' -> Uppercase
// 'modhAyan' -> CamelCase (Standard Naming Convention)
// 'ModhAyan' -> PascalCase

/*
Data Types

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


// alert() , confirm() , prompt()
/*
alert("I'm an Alert") // used to tell smt to user

var ans = confirm("Are you sure?") // Questions of either True or False
console.log(ans)

var name = prompt("Enter Your Name") // used to ask smt to user (Always Return String)
console.log(name)
*/

// Concatenation
var p = '10'
var q = '20'
console.log(p + q)  // "1020" - (Concatenation)
console.log(p - q)  // -10 - (Coercion)
console.log(p * q)  // 200 - (Coercion)
console.log(p / q)  // 0.5 - (Coercion)

var r = 'Ayan'
var s = 10
console.log(r + s)  // "Ayan10" - (Concatenation)
console.log(r - s)  // NaN
console.log(r * s)  // NaN
console.log(r / s)  // NaN