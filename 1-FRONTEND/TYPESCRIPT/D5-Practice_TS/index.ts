/* ==========================================================
   TYPESCRIPT PRACTICE — 15 QUESTIONS
========================================================== */


/* --------------------------------------------
Q1. (Easy - Primitives)
Create a variable "myAge" with the correct type, 
and assign it a number value.
-------------------------------------------- */
let myAge: number = 10



/* --------------------------------------------
Q2. (Easy - Arrays & Tuples)
Create a tuple called "person" that holds exactly 
a name (string) and an age (number). Example: ["Ayan", 25]
-------------------------------------------- */
let person: [string, number] = ["Ayan", 17]



/* --------------------------------------------
Q3. (Easy - Union Types)
Write a function "printId" that accepts a parameter 
which can be EITHER a number OR a string, and just 
console.logs it.
-------------------------------------------- */
const printId = (param: number | string): void => {
  console.log(param);
}



/* --------------------------------------------
Q4. (Easy - Objects & Optional Properties)
Create a type "Product" with: name (string), price (number), 
and an OPTIONAL discount (number). Then create one object 
using this type WITHOUT the discount field.
-------------------------------------------- */
type Product = {
  name: string;
  price: number;
  discount?: number;
}

let product: Product = {
  name: "Ayan",
  price: 4999
}



/* --------------------------------------------
Q5. (Easy-Medium - Functions)
Write a function "multiply" that takes two numbers, 
where the second number is optional and defaults to 2. 
Return the result.
-------------------------------------------- */
const multiply = (x: number, y: number = 2): number => x * y



/* --------------------------------------------
Q6. (Medium - Rest Parameters)
Write a function "getAverage" that accepts any number 
of number arguments (using rest parameters) and returns 
their average.
-------------------------------------------- */
const getAverage = (...a: number[]): number => {
  let avg = a.reduce((acc, val) => acc += val, 0) / a.length
  return avg
}



/* --------------------------------------------
Q7. (Medium - Interfaces)
Create an interface "Employee" with: id (number), 
name (string), and a method "showDetails" that returns void.
Then create one object that follows this interface 
(the method can just console.log the name).
-------------------------------------------- */
interface Employee {
  id: number;
  name: string;
  showDetails: () => void;
}

let employeeObj: Employee = {
  id: 4950124821,
  name: "Ayan",
  showDetails() { console.log(this.name) }
}



/* --------------------------------------------
Q8. (Medium - Generics)
Write a generic function "wrapInArray" that takes 
a single value of ANY type, and returns it inside an array.
Example: wrapInArray(5) should return [5]
-------------------------------------------- */
const wrapInArray = <T>(a: T): T[] => {
  return [a]
}
wrapInArray<number>(2)



/* --------------------------------------------
Q9. (Medium - Generic Constraints)
Write a generic function "getLength" that accepts ANY type, 
but that type MUST have a "length" property (like arrays 
or strings). Return the length.
-------------------------------------------- */
interface Length {
  length: number;
}

const getLength = <T extends Length>(params: T): number => {
  return params.length
}
console.log(getLength<string>("Mohd Ayan"))
console.log(getLength<number[]>([1, 3, 1, 6, 2, 3, 1]))
console.log(getLength("Hello World"))



/* --------------------------------------------
Q10. (Medium - keyof)
Create a type "Laptop" with: brand (string), ram (number), 
price (number). Then create a type "LaptopKeys" using keyof 
that represents all the property names of Laptop.
-------------------------------------------- */
type Laptop = {
  brand: string;
  ram: number;
  price: number;
}

type LaptopKeys = keyof Laptop



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
}


type SettingsType = typeof settings



/* --------------------------------------------
Q12. (Medium-Hard - Indexed Access Types)
Using the "Laptop" type from Q10, create a new type 
"LaptopPrice" that grabs ONLY the type of the "price" 
property (should just be "number").
-------------------------------------------- */
type LaptopPrice = Laptop["price"]



/* --------------------------------------------
Q13. (Medium-Hard - Mapped Types)
Create a type "Course" with: title (string), duration (number).
Then write your OWN mapped type "ReadonlyCourse" that makes 
every property in Course readonly (don't use the built-in 
Readonly<T> utility type — build it yourself using [key in keyof...]).
-------------------------------------------- */
type Course = {
  title: string;
  duration: number;
}

type ReadonlyCourse = {
  readonly [key in keyof Course]: Course[key]
}



/* --------------------------------------------
Q14. (Hard - Utility Types combo)
Create a type "Order" with: orderId (number), item (string), 
qty (number), price (number).
Then:
  a) Create a type "OrderPreview" using Pick, with only 
     "item" and "qty".
  b) Create a type "NewOrder" using Omit, removing "orderId" 
     (since it gets auto-generated later).
-------------------------------------------- */
type Order = {
  orderId: number;
  item: string;
  qty: number;
  price: number;
}

// :) a
type OrderPreview = Pick<Order, "item" | "qty">

// :) b
type NewOrder = Omit<Order, "orderId">



/* --------------------------------------------
Q15. (Hard - Conditional Types)
Write a conditional type "IsArray" that checks if a given 
type T is an array. If it is, return the string type "Yes it's an array", 
otherwise return "Not an array".
Test it with: IsArray<string[]> and IsArray<number>
-------------------------------------------- */
type IsArray<T> = T extends any[] ? "Yes it's an array" : "Not an array"