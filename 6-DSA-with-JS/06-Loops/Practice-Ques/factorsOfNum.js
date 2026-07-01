/*
Print All Factors of a Number

Write a program that accepts an integer n as input and prints all
the factors of n. A factor of a number is an integer that divides the
number evenly without leaving a remainder. The program should
print each factor on a single line, space-separated, in ascending
order.
*/

function printFactors(n) {
  let output = ""

  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      output += `${i} `
    }
  }

  console.log(output);
}

printFactors(6)