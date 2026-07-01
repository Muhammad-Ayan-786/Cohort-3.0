/*
Sum Up to N Terms

Write a program that accepts an integer n and calculates the sum
of the first n natural numbers. Natural numbers start from 1 and go
up to n.
*/

function sumUpToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  console.log(sum);
}

sumUpToN(5)