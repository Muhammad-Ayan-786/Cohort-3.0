/*
## Beginner Level

1. Create a function named `greet` that prints `"Hello World"`.
2. Create a function `add(a, b)` that returns the sum.
3. Write a function to calculate the square of a number.
4. Create a function that checks whether a number is even or odd.
5. Write a function that converts Celsius to Fahrenheit.
6. Create a function with default parameter `"Guest"`.
7. Write a function that returns the greater of two numbers.
8. Create a function to calculate area of rectangle.
9. Write a function that returns `"Adult"` if age ≥ 18 else `"Minor"`.
10. Create a function to reverse a string.
*/

/* --------- 1 --------- */
function great() {
  console.log("Hello World")
}
great()

/* --------- 2 --------- */
function add(a, b) {
  return a + b
}
console.log(add(4, 6));

/* --------- 3 --------- */
function square(x) {
  return x ** 2
}
console.log(square(4));

/* ---------4 --------- */
function evenOddChecker(z) {
  if (z % 2 == 0) {
    return 'Even'
  }
  return 'Odd'
}
console.log(evenOddChecker(12));

/* --------- 5 --------- */
function fahrenheitConverter(celsius) {
  let fahrenheit = (celsius * (9 / 5)) + 32
  return fahrenheit
}
console.log(fahrenheitConverter(23));

/* --------- 6 --------- */
function func(user = 'Guest') {
  console.log(`User is ${user}`);
}
func()

/* --------- 7 --------- */
function greaterNumGuesser(c, d) {
  if (c > d) return c
  else return d
}
console.log(greaterNumGuesser(14, 66))

/* --------- 8 --------- */
function areaOfRect(length, width) {
  let area = length * width
  return area
}
console.log(areaOfRect(4, 8))

/* --------- 9 --------- */
function ageChecker(age) {
  if (age >= 18) return 'Adult'
  return 'Minor'
}
console.log(ageChecker(17));

/* --------- 10 --------- */
function reverseStrFunc(str) {
  let reversedString = str.split('').reverse().join('')
  return reversedString
}
console.log(reverseStrFunc('Meow!'));