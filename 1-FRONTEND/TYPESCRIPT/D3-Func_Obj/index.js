"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* ======================================
Objects
====================================== */
let obj = {
    name: "Ayan",
    age: 25
};
let userObj = {
    name: "Ayan",
    age: 25,
    company: "Sheryians",
    address: {
        city: "Johannesburg",
        state: "Gauteng"
    },
};
/* =====================================
Functions
====================================== */
/* void - returns nothing */
let greet = () => {
    console.log("Hello Everyone");
};
// greet()
/* define type of parameters, and the return type */
let addNums = (a, b) => {
    return a + b;
};
let result = addNums(80, 70);
// console.log(result);
/* default parameters */
let add = (a, b = 0) => {
    return a + b;
};
let res = add(8);
// console.log(res);
/* rest parameters */
let total = (...nums) => {
    return nums.reduce((acc, num) => acc + num, 0);
};
let res1 = total(10, 20, 30, 40, 50);
// console.log(res1);
/* callback functions */
let processUser = (name, callback) => {
    console.log("Processing user: " + name);
    callback();
};
processUser("Aman", () => {
    console.log("Welcome, Aman");
});
// callback with return
let calculator = (a, cb) => {
    return a + cb();
};
let res2 = calculator(5, () => {
    return 10;
});
console.log(res2);
/* =====================================
------------ INTERVIEW QUES ------------
====================================== */
// CURRYING Function
let sum = (a) => {
    return (b) => {
        if (b !== undefined)
            return sum(a + b);
        return a;
    };
};
// Currying in one line :
// let sum = (a: number) => (b: number) => b !== undefined ? sum(a + b) : a
// let data = sum(12)(62)(14)(84)(25)()
let data = sum(12)();
console.log(data);
//# sourceMappingURL=index.js.map