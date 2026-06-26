/*
Accept the lengths of the three sides of a
triangle, write a program to calculate the area of
the triangle using Heron's formula. The formula
states that if the sides of the triangle are a, b, and
c, then the area A is calculated as: s =(a+b+c)/2
A= sqrt of s*(s-a)*(s-b)*(s-c)Where s is the
semi-perimeter of the triangle.
*/

function calculateTriangleArea(a, b, c) {
  let s = (a + b + c) / 2
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2)
  return area
}

console.log(calculateTriangleArea(3, 4, 5))
console.log(calculateTriangleArea(7, 10, 5))