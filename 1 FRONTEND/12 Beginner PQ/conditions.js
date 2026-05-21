/*
## Conditionals

1. Check whether a number is positive or negative.
2. Check whether a number is even or odd.
3. Check whether a person is eligible to vote.
4. Find the largest among two numbers.
5. Find the largest among three numbers.
6. Check whether a year is a leap year.
7. Check whether a number is divisible by both 3 and 5.
8. Create a simple grading system:
- 90+ → A
- 75+ → B
- 50+ → C
- below 50 → Fail
9. Check whether a character is a vowel or consonant.
10. Create a calculator using `switch` statement.
11. Print the day name based on a number (1–7).
12. Check whether a username is `"admin"` and password is `"1234"`.
*/

// 1
var num1 = 5
if (num1 >= 0) console.log("Positive");
else console.log("Negative")

// 2
var num2 = 7
if (num2 % 2 == 0) console.log("Even")
else console.log("Odd")

// 3
var age = 16
if (age >= 18) console.log("Can Vote")
else console.log("Can not Vote")

// 4
var n3 = 1
var n4 = 3
if (n3 > n4) console.log(n3)
else console.log(n4)

// 5
var n5 = 1
var n6 = 8
var n7 = 5
if (n5 > n6 && n5 > n7) console.log(n5)
if (n6 > n5 && n6 > n7) console.log(n6)
else console.log(n7)

// 6
var year = 2026
if (year % 4 == 0 || year % 400 == 0) console.log("Leap year");
else console.log("Not a Leap year");

// 7
var n8 = 6
var n9 = 15
if (n8 % 3 == 0 && n9 % 5 == 0) console.log("Divisible");
else console.log("Not Divisible");

// 8
var marks = 89
if (marks >= 90) console.log("A");
else if (marks >= 75 && marks < 90) console.log("B");
else if (marks >= 50 && marks < 75) console.log("C");
else console.log("Fail")

// 9
var char = 'b'
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
  console.log(char, "is a vowel");
}
else console.log(char, "is a consonant");

// 10
var n11 = 4
var n12 = 6
var operator = '*'
var result = 0

switch (operator) {
  case '+': {
    result = n11 + n12
    console.log(result)
    break;
  }
  case '-': {
    result = n11 - n12
    console.log(result)
    break;
  }
  case '*': {
    result = n11 * n12
    console.log(result)
    break;
  }
  case '/': {
    result = n11 / n12
    console.log(result)
    break;
  }
  default:
    console.log("Please choose your operation");
    break;
}

// 11
var dayNum = 2

switch (dayNum) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Number")
    break;
}

// 12
var username = 'admin'
var password = 1234

if (username === 'admin' && password === 1234) console.log("Access Granted");
else console.log("Wrong Details");