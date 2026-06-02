/*
## Ternary Operator

1. Check whether a number is even or odd using ternary operator.
2. Check whether age is above 18 using ternary operator.
3. Find the greater number between two values using ternary operator.
*/

// 1
var num = 5;
(num % 2 == 0) ? console.log('Even') : console.log('Odd')

// 2
var age = 19;
(age >= 18) ? console.log('18+') : console.log('Under 18')

// 3
var val1 = 3;
var val2 = 8;
(val1 > val2) ? console.log(val1, "is greater") : console.log(val2, 'is greater')