/*
Write a program that takes an integer representing a year as input and checks
whether it is a leap year. A year is considered a leap year if it satisfies either of
the following conditions: 1. It is divisible by 4 but not divisible by 100, or 2. It is
divisible by 400. .. If the year is a leap year, print "Leap Year". .. Otherwise, print
"Not a Leap Year".
*/

function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return 'Leap Year'
  }
  else {
    return 'Not a Leap Year'
  }
}

console.log(isLeapYear(2028));
console.log(isLeapYear(1300));