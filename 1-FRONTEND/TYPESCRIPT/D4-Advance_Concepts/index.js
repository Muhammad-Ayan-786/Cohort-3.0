"use strict";
/* ======================================
1. GENERICS
====================================== */
Object.defineProperty(exports, "__esModule", { value: true });
/*
  Generics let you write ONE function that works
  for MANY types, but TypeScript still knows exactly what type it is.

  Think of it like a BOX. You can put anything in the box
  (a number, a string, anything). The box doesn't care what's inside,
  but once you put something in, TS remembers exactly what it is.
*/
function putInBox(item) {
    return item;
}
let box1 = putInBox("Apple"); // TS knows box1 is a string
let box2 = putInBox(100); // TS knows box2 is a number
let box3 = putInBox(true); // TS auto-detects: boolean
console.log(box1, box2, box3);
/* Generic with an array — works for any type of array */
function getFirstItem(list) {
    return list[0];
}
let fruits = ["Mango", "Apple", "Banana"];
let firstFruit = getFirstItem(fruits); // "Mango"
console.log(firstFruit);
// T can be any type, but it MUST have a "name" property
function greetPerson(person) {
    console.log("Hello, " + person.name);
}
greetPerson({ name: "Ayan", age: 25 }); // ✅ works, has "name"
// this type is now: "brand" | "model" | "year"
let propertyName = "brand"; // ✅ allowed
// let wrong: CarProperty = "color";     // ❌ not allowed, "color" isn't a Car property
/* ======================================
4. TYPEOF
====================================== */
/*
  "typeof" looks at a VALUE you already wrote,
  and creates a TYPE from it automatically.
  So you don't have to write the same shape twice.
*/
const myPhone = {
    brand: "Samsung",
    price: 25000,
    isAvailable: true
};
let anotherPhone = {
    brand: "iPhone",
    price: 90000,
    isAvailable: false
};
console.log(anotherPhone);
// same as: { name: string, country: string }
let author1 = {
    name: "Ayan",
    country: "South Africa"
};
console.log(author1);
let newStudent = {
    name: "Aman"
    // "grade" not required, because we made it optional
};
console.log(newStudent);
/* Partial<T> = makes all properties optional */
let draftMovie = {
    title: "Inception"
    // year and rating not required
};
/* Required<T> = makes all properties compulsory */
let finalMovie = {
    title: "Inception",
    year: 2010,
    rating: 9
};
/* Readonly<T> = you cannot change the value after creating it */
let lockedMovie = {
    title: "Interstellar",
    year: 2014,
    rating: 9
};
let shortMovie = { title: "Tenet" };
let movieNoRating = { title: "Dunkirk", year: 2017 };
let genreCount = {
    action: 10,
    comedy: 5,
    drama: 3
};
function getScore() {
    return 95;
}
//# sourceMappingURL=index.js.map