"use strict";
/* ==========================================================
   TYPESCRIPT PRACTICE — 15 QUESTIONS
========================================================== */
Object.defineProperty(exports, "__esModule", { value: true });
/* --------------------------------------------
Q1. (Easy - Primitives)
Create a variable "myAge" with the correct type,
and assign it a number value.
-------------------------------------------- */
let myAge = 10;
/* --------------------------------------------
Q2. (Easy - Arrays & Tuples)
Create a tuple called "person" that holds exactly
a name (string) and an age (number). Example: ["Ayan", 25]
-------------------------------------------- */
let person = ["Ayan", 17];
/* --------------------------------------------
Q3. (Easy - Union Types)
Write a function "printId" that accepts a parameter
which can be EITHER a number OR a string, and just
console.logs it.
-------------------------------------------- */
const printId = (param) => {
    console.log(param);
};
let product = {
    name: "Ayan",
    price: 4999
};
/* --------------------------------------------
Q5. (Easy-Medium - Functions)
Write a function "multiply" that takes two numbers,
where the second number is optional and defaults to 2.
Return the result.
-------------------------------------------- */
const multiply = (x, y = 2) => x * y;
/* --------------------------------------------
Q6. (Medium - Rest Parameters)
Write a function "getAverage" that accepts any number
of number arguments (using rest parameters) and returns
their average.
-------------------------------------------- */
const getAverage = (...a) => {
    let avg = a.reduce((acc, val) => acc += val, 0) / a.length;
    return avg;
};
let employeeObj = {
    id: 4950124821,
    name: "Ayan",
    showDetails() { console.log(this.name); }
};
/* --------------------------------------------
Q8. (Medium - Generics)
Write a generic function "wrapInArray" that takes
a single value of ANY type, and returns it inside an array.
Example: wrapInArray(5) should return [5]
-------------------------------------------- */
const wrapInArray = (a) => {
    return [a];
};
wrapInArray(2);
const getLength = (params) => {
    return params.length;
};
console.log(getLength("Mohd Ayan"));
console.log(getLength([1, 3, 1, 6, 2, 3, 1]));
console.log(getLength("Hello World"));
/* --------------------------------------------
Q11. (Medium - typeof)
Create a normal JS object called "settings" with any 3
properties you like. Then create a type "SettingsType"
using typeof, based on that object.
-------------------------------------------- */
const settings = {
    devID: 30294293210,
    role: "Full-Stack",
    company: "Google",
};
//# sourceMappingURL=index.js.map