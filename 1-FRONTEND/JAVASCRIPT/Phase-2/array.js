/* Array - An array is an ordered list of values. It's how we store collections in JavaScript. */

/* <====================== Creating Arrays =====================> */
let subjects = ["AI", "DSA", "Web Dev"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["Aman", 25, true, null];   // arrays can hold any types
let empty = [];
// You can also use the Array constructor, but the literal syntax [ ] is preferred.


console.log('-----------------------------')


/*
<====================== Accessing Elements (Zero-Indexed) =====================>
• Arrays start at index 0.

• Negative indices don't work like in Python. `fruits[-1]` is `undefined`.
*/

let fruits = ["apple", "banana", "mango"];

console.log(fruits[0]);   // "apple"
console.log(fruits[1]);   // "banana"
console.log(fruits[2]);   // "mango"
console.log(fruits[3]);   // undefined (doesn't exist)


/* To get the last element: */
console.log(fruits[fruits.length - 1]);   // "mango"
console.log(fruits.at(-1));               // "mango" (modern, cleaner)


console.log('-----------------------------')


/*
<====================== Array Length ======================>
• length is always one more than the last index.
*/
let a = [10, 20, 30, 40];
console.log(a.length);   // 4

// You can even set length to truncate an array (rarely useful but worth knowing):
a.length = 2;
console.log(a);   // [10, 20]


console.log('-----------------------------')


/*
<====================== Mutating Methods (Change the Original) ======================>
• These methods modify the array in place.

          METHODS                       |                              DESCRIPTION
    push(x)                             |          Adds x to the end
    pop()                               |          Removes the from end (Returns the removed element)
    unshift(x)                          |          Adds x to the start
    shift()                             |          Removes the from start (Returns the removed element)
    splice(start, count, ...items)      |          Removes count elements from start, then adds items
    reverse()                           |          Reverses the array in place
    sort()                              |          Sorts the array in place
*/

/* ----- Push() ----- */
let arr1 = [1, 2, 3, 4];
arr1.push(85);    // Add 85 (end)
arr1.push(86);    // Add 86 (end)
console.log(arr1) // arr1 is now [1, 2, 3, 4, 85, 86]


/* ----- Pop() ----- */
let arr2 = [1, 2, 3, 4];
arr2.pop();       // Remove 4 (end)
arr2.pop();       // Remove 3 (end)
console.log(arr2) // arr2 is now [1, 2]


/* ----- Unshift() ----- */
let arr3 = [1, 2, 3, 4];
arr3.unshift(10);   // Add 10 (start)
arr3.unshift(20);   // Add 20 (start)
console.log(arr3)   // arr3 is now [20, 10, 1, 2, 3, 4]


/* ----- Shift() ----- */
let arr4 = [1, 2, 3, 4];
arr4.shift();     // Remove 1 (start)
arr4.shift();     // Remove 2 (start)
console.log(arr4) // arr4 is now [3, 4]


/*
----- Splice() -  The swiss army knife -----
• Syntax: arr.splice(startCount, deleteCount, newItem1, newItem2, ...)
*/

// Remove 2 elements starting from index 1
let arr5 = [1, 2, 3, 4, 5];
arr5.splice(1, 2);
console.log(arr5) // arr is now [1, 4, 5]

// Insert without removing: count = 0
let arr6 = [1, 2, 5];
arr6.splice(2, 0, 3, 4);
console.log(arr6) // arr2 is now [1, 2, 3, 4, 5]

// Replace: remove + insert
let arr7 = [1, 2, 99, 4];
arr7.splice(2, 1, 3);
console.log(arr7) // arr3 is now [1, 2, 3, 4]


/* ----- Reverse() ----- */
let arr8 = [1, 2, 3, 4].reverse();
console.log(arr8) // arr8 is now [4, 3, 2, 1]


/* ----- Sort() ----- */
// • By default, sort converts everything to strings and sorts alphabetically.
let arr9 = [10, 1, 5, 100].sort();
console.log(arr9) // [1, 10, 100, 5]  ← surprising!

// • For numeric sorting, pass a compare function:
let arr10 = [10, 1, 5, 100].sort((a, b) => a - b);   // [1, 5, 10, 100]  ascending
let arr11 = [10, 1, 5, 100].sort((a, b) => b - a);   // [100, 10, 5, 1]  descending
console.log(arr10)
console.log(arr11)


console.log('-----------------------------')


/*
<====================== Non-Mutating Methods (Return New Array) ======================>
• These don't change the original — they return a new array or value.

          METHODS                       |                              DESCRIPTION
    slice(start, end)                   |          Returns a shallow copy of a portion of an array
    concat([])                          |          Conbines two or more arrays and returns a new array
    includes(x)                         |          Returns true if the array contains x
    indexOf(x)                          |          Returns the index of the first occurrence of x
    join(separator)                     |          Combines all elements of an array into a single string
*/

let arr12 = [1, 2, 3, 4, 5];

// ----- Slice() ----- //
console.log(arr12.slice(1, 3))      // [2, 3, 4]  (original unchanged)

// ----- Concat() ----- //
console.log(arr12.concat([6, 7]))   // [1, 2, 3, 4, 5, 6, 7]

// ----- Includes() ----- //
console.log(arr12.includes(3))      // true

// ----- IndexOf() ----- //
console.log(arr12.indexOf(3))       // 2
console.log(arr12.indexOf(99))      // -1 (not found)

// ----- Join() ----- //
console.log(arr12.join("-"))      // "1-2-3-4-5"


console.log('-----------------------------')


/* <====================== Looping Through Arrays ======================> */
let arr13 = [1, 2, 3, 4, 5];

// ----- For Loop ----- //
console.log('For Loop')
for (let i = 0; i < arr13.length; i++) {
  console.log(arr13[i]);
}

// ----- For-of Loop ----- //
console.log('For-in Loop')
for (val of arr13) {
  console.log(val);
}


console.log('-----------------------------')


/* <====================== Multi-Dimensional Arrays ======================> */
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[1][2]);   // 6 (row 1, column 2)

// Loop through a 2D array
console.log('Loop through a 2D array')
for (let row of matrix) {
  for (let val of row) {
    console.log(val);
  }
}


console.log('-----------------------------')


/* <====================== Reference Behavior ======================> */
let arr14 = [1, 2, 3];
let arr15 = arr14;
arr14.push(4);
console.log(arr14) // [1, 2, 3, 4]
console.log(arr15) // [1, 2, 3, 4]
// Both arrays point to the same memory location (Reference / Pointer)


console.log('-----------------------------')


/* <====================== Spread — expand an array ======================> */
let nums = [1, 2, 3];
let more = [0, ...nums, 4];
console.log(more);   // [0, 1, 2, 3, 4]

// Copy an array (shallow)
let copy = [...nums];

// Combine arrays
let combined = [...[1, 2], ...[3, 4]];   // [1, 2, 3, 4]

// Pass as function arguments
console.log(Math.max(...[5, 3, 9, 1]));   // 9


console.log('-----------------------------')


/* <====================== Destructuring Arrays ======================> */
let arr16 = [1, 2, 3];
let [i, j, k] = arr16;
console.log(i, j, k);   // 1 2 3

// Swap variables
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x, y);   // 2 1


console.log('-----------------------------')


/*
<====================== Iteration Methods (The Powerful Ones) ======================>
• These methods take a callback and run it for each element. This is where Phase 2 gets exciting.

      METHODS       |       PURPOSE
    forEach()       |   For Iteration
    map()           |   For Transformation
    filter()        |   For Filtering
    reduce()        |   For Reduction
*/

/*
<------- forEach — just run a function on each element --------->
• forEach does NOT return anything (it returns undefined). It's just for side effects.
*/
let numsArr1 = [1, 2, 3];

numsArr1.forEach(function (n) {
  console.log(n * 2);
}); // 2, 4, 6

// With arrow function:
numsArr1.forEach(n => console.log(n * 3));

// The callback can also receive index and the whole array:
numsArr1.forEach((value, index, array) => {
  console.log(index, value, array);
});


/*
<------- map — transform each element into something new --------->
• map returns a new array of the same length.
*/
let numsArr2 = [1, 2, 3, 4];

let doubled = numsArr2.map((n) => {
  return n * 2
});

console.log(doubled);     // [2, 4, 6, 8]
console.log(numsArr2);    // [1, 2, 3, 4] ← unchanged


/*
<------- filter — keep only elements that pass a condition --------->
• filter returns a new array, possibly shorter.
*/
let numsArr3 = [1, 2, 3, 4, 5, 6];

let evens = numsArr3.filter((n) => {
  return n % 2 === 0
});

console.log(evens);   // [2, 4, 6]


/*
<------- reduce — boil the array down to a single value --------->
• reduce is the most powerful — and the most confusing at first. Give students lots of practice.
• reduce returns a single value.
*/
let numsArr4 = [1, 2, 3, 4];

let sum = numsArr4.reduce((acc, n) => {
  return acc + n
}, 0);

console.log(sum);   // 10

/*
- `acc` = accumulator (the running result)
- `n` = current element
- `0` = initial value of acc

DRY-RUN - Step-by-step trace:

- Start: acc = 0
- Step 1: acc = 0 + 1 = 1
- Step 2: acc = 1 + 2 = 3
- Step 3: acc = 3 + 3 = 6
- Step 4: acc = 6 + 4 = 10
*/

// Find the maximum number using reduce method
let maxNum = numsArr4.reduce((acc, val) => {
  if (val > acc) {
    return val
  }
  return acc
}, 0)

console.log(maxNum);   // 4


/*
<------- find — return the first matching element --------->
• find returns the first element that matches the condition.
*/
let numsArr5 = [1, 2, 3, 4];
let firstEven = numsArr5.find(n => n % 2 === 0);
console.log(firstEven);   // 2

let users = [{ name: "A", age: 20 }, { name: "B", age: 30 }, { name: "C", age: 40 }];
let user = users.find(u => u.age > 25);
console.log(user);   // {name: "B", age: 30}


/*
<------- findIndex — return the index of the first matching element --------->
• findIndex returns the index of the first element that matches the condition.
*/
let numsArr6 = [10, 20, 30, 40];
let idx = numsArr6.findIndex(n => n > 25);
console.log(idx);   // 2


/*
<------- some — does AT LEAST ONE match? --------->
• some returns true if AT LEAST ONE element matches the condition.
*/
let numsArr7 = [1, 2, 3];
console.log(numsArr7.some(n => n > 2));   // true
console.log(numsArr7.some(n => n > 10));  // false


/*
<------- every — does ALL match? --------->
• every returns true if EVERY element matches the condition.
*/
let numsArr8 = [1, 2, 3];
console.log(numsArr8.every(n => n > 0));   // true
console.log(numsArr8.every(n => n > 2));   // false