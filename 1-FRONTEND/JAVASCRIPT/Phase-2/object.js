/* Object - An object is a collection of key-value pairs. Arrays store ordered data; objects store named data. */

/*
<====================== Creating Object =====================>
• The text before : is the key (always a string under the hood).
• The text after : is the value (any type, including other objects, arrays, functions).
*/
let person = {
  name: "Ayan",
  age: 25,
  city: "Johannesburg",
  isStudent: true
};
console.log(person)


console.log('--------------------------------------------')


/*
<====================== CRUD Operations =====================>
• Create: Add a new key-value pair to the object.
• Read: Access the value of a specific key.
• Update: Modify the value of an existing key.
• Delete: Remove a key-value pair from the object.
*/
let user = {
  name: "Mohd Ayan",
  age: 17,
  batch: 'Cohort 2.0'
}

/* <-------- Adding Object Properties (C - Create) --------> */
// • Dot notation: person.name = "John" OR Bracket notation: person["name"] = "John"
user.studentOf = "Sheryians Coding School"

/* <-------- Accessing Object Properties (R - Read) --------> */
// • Dot notation: person.name OR Bracket notation: person["name"]
console.log(user.name)

/* <-------- Modifying Object Properties (U - Update) --------> */
// • Dot notation: person.name = "John" OR Bracket notation: person["name"] = "John"
user.batch = "Cohort 3.0"

/* <-------- Deleting Object Properties (D - Delete) --------> */
// • Dot notation: delete person.name OR Bracket notation: delete person["name"]
delete user.age
console.log(user)


console.log('--------------------------------------------')


/*
<====================== Object Methods =====================>
• Object.key() - Returns the keys of an object as an array.
• Object.values() - Returns the values of an object as an array.
• Object.entries() - Returns the key-value pairs of an object as an array of arrays.
• Object.assign() - Copies the values of all enumerable own properties from one or more source objects to a target object.
  - Modern code prefers { ...person, ... } spread syntax, but you'll see Object.assign in older codebases.
*/
let phone = {
  model: "Iphone 13",
  color: "Black",
  price: 100000
}

console.log(Object.keys(phone))     // Return array of object keys
console.log(Object.values(phone))   // Return array of object values
console.log(Object.entries(phone))  // Return array of object key-value pairs
console.log(Object.assign({}, phone, { color: "White", price: 120000 })); // Return new object


console.log('--------------------------------------------')


/* <====================== Nested Objects =====================> */
let actor = {
  name: "Shahrukh Khan",
  age: 54,
  nickName: ["King Khan", "Badshah"],
  movies: ["DDLJ", "Duplicate", "Dunki", "DON"],
  adress: {
    city: "Mumbai",
    state: "Maharashtra",
    country: "India"
  },
  DDLJ: {
    name: "Dilwale Dulhania Le Jayenge",
    released: 1995,
    coActors: {
      father: "Amitabh Bachchan",
      mother: "Jaya Bachchan",
      brother: "Hritik Roshan"
    }
  }
}

console.log(actor.DDLJ.coActors.brother)
console.log(actor)


console.log('--------------------------------------------')


/* <====================== Methods - Functions Inside Objects =====================> */

// <-------- Example - Robot Object With Methods -------->
let robot = {
  name: 'Chindi',
  color: 'Orange',
  age: 2,
  introduce: function () {    // Method (Function)
    console.log(`My Intro: Hi, I'm Chindi Robot and I'm 2 years old.`)
  },
  bootUp: (name) => {   // Method (Arrow Function)
    console.log(`Hi, ${name}. How may I help you?`)
  },
  shutDown() {    // Method (Shorthand Function
    console.log('Shutting down...')
  }
}
robot.introduce()
robot.bootUp('Ayan')
robot.shutDown()

// <-------- Another Example - Custom Printing Methods -------->
let print = {
  normal(text) {
    console.log(text)
  },
  alert(text) {
    console.warn(text)
  },
  mistake(text) {
    console.error(text)
  },
  bold(text) {
    console.log(`%c${text}`, 'font-weight: bold')
  },
  underline(text) {
    console.log(`%c${text}`, 'text-decoration: underline')
  },
  colorPrint(text, color) {
    console.log(`%c${text}`, `color: ${color}`)
  }
}

print.normal('Hello World')
print.alert('Hello World')
print.mistake('Hello World')
print.bold('Hello World')
print.underline('Hello World')
print.colorPrint('Hello World', 'red')


console.log('--------------------------------------------')


/*
<====================== Object.freeze & Object.seal =====================>
• `freeze` — fully immutable.
• `seal` — can modify existing properties, but can't add or delete.
*/
let frozen = Object.freeze({ name: "Aman", age: 25 });
frozen.age = 26;          // Can't modify
frozen.isStudent = true;  // Can't add Or delete
console.log(frozen)

let sealed = Object.seal({ name: "Aman", age: 25 });
sealed.name = "Jerry";      // ✅ can modify existing
delete sealed.age;          // Can't add Or delete
console.log(sealed)


console.log('--------------------------------------------')


/* <====================== Object Destructuring =====================> */
let employee1 = { name: "David", age: 20, city: "New York" };

// Extract properties into variables, cleanly.
let { name, age } = employee1;
console.log(name, age);   // "David", 20

// Rename while destructuring:
let { name: fullName, age: years } = employee1;
console.log(fullName, years);   // "David", 20

// Default values:
let { country = "Europe" } = employee1;
console.log(country);   // "Europe" (since employee has no country)

// Nested destructuring:
let employee2 = { name: "Saif", address: { city: "Durban", state: "KwaZulu-Natal" } };
let { address: { city, state } } = employee2;
console.log(city);   // "Durban"


console.log('--------------------------------------------')


/*
<====================== Shallow Copy =====================>
• Spread (...) creates a new outer object only.
• Nested objects/arrays are still shared (same reference).
*/
const shallowObj = {
  name: 'Kaif',
  age: 20,
  marks: 94,
  college: {
    name: "LLCT",
    students: 20000
  },
  skills: ["HTML", "CSS", "JS"]
}

const shallowCopy = { ...shallowObj }

shallowCopy.marks = 88
shallowCopy.college.name = "IIT"

console.log(shallowObj)
console.log(shallowCopy)


console.log('--------------------------------------------')


/*
<====================== Deep Copy =====================>
• JSON.stringify() converts the object into a JSON string.
• JSON.parse() creates a completely new object from that string.

• All nested objects and arrays get their own copies, so nothing is shared with the original object.
*/
const deepObj = {
  name: 'Ayan',
  age: 18,
  marks: 94,
  college: {
    name: "LLCT",
    students: 20000
  },
  skills: ["HTML", "CSS", "JS"]
}

const strObj = JSON.stringify(deepObj)
const deepCopy = JSON.parse(strObj)

// const deepCopy = JSON.parse(JSON.stringify(deepObj)) - OR Like this in one line

deepCopy.marks = 98
deepCopy.college.name = "IIT"
deepCopy.skills.push("ReactJS", "NextJS")

console.log(deepObj)
console.log(deepCopy)


console.log('--------------------------------------------')


/*
<====================== Deep Copy - Using structuredClone() =====================>
• structuredClone() creates a deep copy of an object.
*/
const structDeepObj = {
  name: 'Jubin',
  age: 19,
  marks: 94,
  college: {
    name: "LLCT",
    students: 20000
  },
  skills: ["HTML", "CSS", "JS"]
}

const structDeepCopy = structuredClone(structDeepObj)

structDeepCopy.marks = 86
structDeepCopy.college.name = "NIT"
structDeepCopy.skills.push("NodeJS")

console.log(structDeepObj)
console.log(structDeepCopy)