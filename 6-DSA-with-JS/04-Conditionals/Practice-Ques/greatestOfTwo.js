/*
Accept two numbers and write a program to find
and return the greatest of the two numbers.
*/

function findGreatest(a, b) {
  if (a > b) return a
  return b
}

let a = 10
let b = 20
console.log(findGreatest(a, b));