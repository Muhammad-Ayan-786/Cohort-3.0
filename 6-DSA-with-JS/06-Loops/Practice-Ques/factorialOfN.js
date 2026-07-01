/*
Factorial of a Number

Write a program that accepts an integer n as input and calculates
the factorial of n. The factorial of a non-negative integer n is the
product of all positive integers less than or equal to n: n! = n x (n-1)
x (n-2)x ... x2x1. The factorial of 0 is defined as 1 -> 0! =1. print
your Answer.
*/

function factorial(n) {
  let fac = 1;
  for (let i = 1; i <= n; i++) {
    fac *= i
  }
  console.log(fac);
}

factorial(0)