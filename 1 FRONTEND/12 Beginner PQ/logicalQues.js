/*
## Logical Thinking Questions

1. Take two numbers and print which one is greater.
2. Check whether a number lies between 10 and 50.
3. Check whether a password length is greater than 8.
4. Check if a person can drive:
- age > 18
- has license = true
1. Check whether a number is divisible by 2, 3, or both.
2. Print `"Good Morning"`, `"Good Afternoon"`, or `"Good Evening"` based on time.
3. Find whether a number is a multiple of 10.
4. Create a simple discount calculator.
5. Check whether a product is in stock.
6. Calculate final bill after GST.
*/

// 1
var num1 = 14
var num2 = 38
console.log((num1 > num2) ? `${num1} is greater` : `${num2} is greater`);

// 2
var number = 36
if (number >= 10 && number <= 50) console.log("Number lies between 10-50");
else console.log("Number doesn't lies between 10-50");