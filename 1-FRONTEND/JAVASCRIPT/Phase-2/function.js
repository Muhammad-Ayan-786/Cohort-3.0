/*
<====================== FUNCTIONS IN JS ======================>

Four big benefits:

1. Reusability — write once, use many times.
2. Readability — `calculateArea(5, 3)` tells you what's happening; `5 * 3` doesn't.
3. Maintainability — fix a bug in one place, not ten.
4. Accessibility — you can use them from anywhere in your code.

Parameters vs Arguments:

- Parameter = the placeholder in the definition (`name`)
- Argument = the actual value passed when calling (`"Aman"`)


DRY Principle - Don't repeat yourself : Function follows the DRY principle 
*/



/* 
<=============== Functions Declaration ==============> 
• The Classis syntax
*/

function greet1(name) {
  console.log(`Good Morning... ${name}`);
}
greet1('Ayan');



/*
<=============== Functions Expression ==============>
• A function can also be stored in a variable.

Key difference from declarations:

- Function declarations are "hoisted"
    (you can call them before they're written — mentioned in Phase 3).
- Function expressions are "not" hoisted in the same way.
*/

const greet2 = function (name) {
  console.log(`Welcome ${name} to our Code Base`);
}
greet2('Harry');



/*
<=============== Anonymous Functions ==============>
• A function without a name is called "anonymous". The function expression above is anonymous — it has no name; it's just stored in a variable.

• Anonymous functions are very commonly used as callbacks.
*/

const anonymous = function () {
  console.log("Anonymous function!");
};
anonymous();



/*
<=============== Arrow Functions ==============>

When to use arrow vs regular functions?

- For short, single-purpose helpers → arrow functions.
- For methods inside objects, or anywhere you need `this` → regular functions (Mentioned in Phase 4).
- For top-level "main" functions in a file → either works; team style decides.
*/

const welcome = (name) => {
  console.log(`Welcome ${name} to our Code Base`);
}
welcome('Harsh');


/* <----- Shorthand rules: -----> */
// Single expression → implicit return (no braces, no return keyword)
const sub = (a, b) => a - b;

// Single parameter → parentheses optional
const square = x => x * x;

// No parameters → empty parentheses required
const greet = () => console.log("Hello");

// Multi-line body → braces and explicit return required
const add = (a, b) => {
  const sum = a + b;
  return sum;
};



/*
<=============== IIFE ==============>
• IIFE - Immediately Invoked Function Expression
• An IIFE is a function that runs the moment it's defined.

Why the extra parentheses?

- Wrapping the function in `( )` turns it into an expression.
- The final `()` calls it.

Why use IIFE? Mainly to create a private scope so variables don't pollute the global scope. Modern code uses modules instead, but you'll still see IIFEs in older codebases and interviews.
*/

(function () {
  console.log("I run immediately! (IIFE)");
})();

(() => console.log("I run immediately! (IIFE)"))();



/*
<=============== Return Keyword ==============>
• A function can return a value back to whoever called it.

Rules about `return`:

- A function can have "multiple return statements" — but only one will actually execute (the first one reached).
- `return` immediately exits the function — code after it doesn't run.
- A function without `return` returns `undefined` by default.
*/

function checkAge(age) {
  if (age < 0) return "Invalid age";  // early return
  if (age >= 18) return "Adult";
  return "Minor";
}

console.log(checkAge(-5));   // "Invalid age"
console.log(checkAge(20));   // "Adult"
console.log(checkAge(10));   // "Minor"



/* 
<=============== Pure & Impure Functions ==============>
• Why care? Pure functions are easier to test, debug, and reason about. Prefer pure functions whenever possible.
*/

/* 
<----- Pure Function ----->
• Given the same input, always returns the same output.
• No side effects (doesn't change anything outside itself).
*/
function sqrt(n) {
  return Math.sqrt(n);
}
console.log(sqrt(25));   // 5
console.log(sqrt(100));  // 10


/*
<----- Impure Function ----->
• Output may vary, OR it changes something outside (modifies a global variable, logs to
*/
let total = 0;
function addToTotal(n) {
  total += n;   // side effect - changes outer variable 
  return total;
}
console.log(addToTotal(5));   // 5
console.log(addToTotal(10));  // 15



/* 
<=============== Parameters: Defaults, Rest, and Edge Cases ==============>
*/

/* 
<----- Defaul Parameters ----->
• If no argument is passed, use a default value:
*/
function sayHello(name = "Guest") {
  console.log("Hello, " + name);
}

sayHello("Aman");    // Hello, Aman
sayHello();          // Hello, Guest


/* 
<----- Rest Parameters ----->
• Sometimes you don't know how many arguments will be passed. Use '...' to collect them all into an array:
*/
function sum(...numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}

console.log(sum(1, 2, 3));           // 6
console.log(sum(1, 2, 3, 4, 5, 6));  // 21
// numbers is a real array here — you can use any array method on it.



/* 
<=============== Functions as First-Class Citizens ==============>
• In JavaScript, functions are values, just like numbers or strings. This means you can:
  1. Store functions in variables.
  2. Pass functions as arguments to other functions.
  3. Return functions from other functions.

• This is one of JavaScript's most powerful features. We'll use it constantly.
*/
// 1. Store in a variable
const sayHi = function () { console.log("Hi"); };

// 2. Pass as argument
function callTwice(fn) {
  fn();
  fn();
}
callTwice(sayHi);   // Hi  Hi

// 3. Return from a function
function makeGreeter(greeting) {
  return function (name) {
    console.log(greeting + ", " + name);
  };
}
const helloGreeter = makeGreeter("Hello");
helloGreeter("Aman");   // Hello, Aman
// OR
makeGreeter("Yo")("Harry");   // Yo, Harry



/* 
<=============== Callback Functions ==============>
• A callback is a function that is passed as an argument to another function, to be called later.

• Why callbacks matter: They are everywhere in JavaScript — array methods, event handlers, async operations. Get comfortable with them now.
*/
function processUser(name, callback) {
  console.log("Processing user: " + name);
  callback(name);
}

function welcomeUser(name) {
  console.log("Welcome, " + name);
}

processUser("Aman", welcomeUser);
// Processing user: Aman
// Welcome, Aman

/* Real-world example you've already seen: setTimeout. */
setTimeout(function () {
  console.log("2 seconds passed");
}, 2000);
// Here, the anonymous function is a **callback** that `setTimeout` calls after 3000ms.



/* 
<=============== Higher-Order Functions (HOF) ==============>
• A "higher-order function" is a function that either:

- Takes another function as an argument, OR
- Returns a function.

Both `processUser` and `makeGreeter` above are higher-order functions.

This isn't a new concept — it's just the 'name' for the pattern you just learned. 
*/