/*
Accept the radius of a circle as float, write a
program to calculate both the circumference and
area of the circle. Use the following formulas:
Circumference C of a circle: 2.T.r Area A of a circle
:T.r^2 Where r is the radius of the circle. Hint : For
getting pi value you can use Math.PI Note: Do not
use Math.pow to calculate the answer to the
correct decimal place.
*/

function calculateCircleProperties(r) {
  const area = (Math.PI * (r ** 2)).toFixed(2)

  const circumference = (2 * Math.PI * r).toFixed(2)

  return [circumference, area]
}

console.log(calculateCircleProperties(5))
console.log(calculateCircleProperties(7))