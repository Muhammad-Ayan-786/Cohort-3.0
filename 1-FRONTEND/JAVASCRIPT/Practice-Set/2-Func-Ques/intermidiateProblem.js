/*
## Intermediate Level

1. Write a function expression for multiplication.
2. Convert a normal function into an arrow function.
3. Create a function that accepts unlimited numbers and returns their sum using rest operator.
4. Write a function that counts vowels in a string.
5. Create a function that checks if a string is palindrome.
6. Write a callback function example using `setTimeout`.
7. Create a higher-order function that executes another function twice.
8. Write a function that returns another function.
9. Create a pure function for subtraction.
10. Create an impure function using global variable modification.
*/

/* --------- 1 --------- */
const multiplyFuncExp = (x, y) => x * y
console.log(multiplyFuncExp(4, 8))

/* --------- 2 --------- */
const arrowFunc = () => console.log(`I'm an Arrow Function`)
arrowFunc()

/* --------- 3 --------- */
const unlimitedSumNums = (...num) => {
  let sum = 0
  for (let i = 0; i < num.length; i++) {
    sum += num[i]
  }
  return sum
}
console.log(unlimitedSumNums(1, 3, 2, 4, 2, 5, 3, 2))

/* --------- 4 --------- */
const vowelsCounter = (str) => {
  let splittedStr = str.split('')
  let vowelCount = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a' ||
      str[i] == 'e' ||
      str[i] == 'i' ||
      str[i] == 'o' ||
      str[i] == 'u'
    ) {
      vowelCount++
    }
  }

  return vowelCount
}
console.log(vowelsCounter('Mango in the Field'));

/* --------- 5 --------- */
const palindromeFunc = (str) => {
  let strArray = str.split('')
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] === strArray[strArray.length - i - 1]) return 'Palindrome'
  }
  return 'Not Palindrome'
}
console.log(palindromeFunc('madam'))

/* --------- 6 --------- */
setTimeout(() => {
  console.log('Callback from setTimeOut');
}, 500);

/* --------- 7 --------- */
