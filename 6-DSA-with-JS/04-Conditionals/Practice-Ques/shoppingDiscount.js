/*
Write a program that takes an initial amount as input and
calculates the final amount after applying a flat discount
based on the following conditions:


  Amount        |      Discount
    0-5000      |         0%
  5001-7000     |         5%
  7001-9000     |         10%
    9001+       |         20%
*/

function calculateFinalAmount(amount) {
  if (amount >= 0 && amount <= 5000) {
    return amount
  }
  else if (amount >= 5001 && amount <= 7000) {
    return amount - ((amount * 5) / 100)
  }
  else if (amount >= 7001 && amount <= 9000) {
    return amount - ((amount * 10) / 100)
  }
  else if (amount > 9000) {
    return amount - ((amount * 20) / 100)
  }
  else {
    return "Invalid Input"
  }
}

console.log(calculateFinalAmount(10000))
console.log(calculateFinalAmount(7800))