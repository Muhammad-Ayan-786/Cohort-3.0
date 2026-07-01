/*
Sum of Even and Odd Numbers in a Range

Write a program that accepts two integers start and end as input
and calculates: 1. The sum of all even numbers within the range
[start, end] (inclusive). 2. The sum of all odd numbers within the
range [start, end] (inclusive). .. If start is greater than end, swap
the values before calculating the sum.
*/

/*
STEPS --------->
1. swap value if start > end
1. sum of even numbers
2. sum of odd numbers

Eg: start = 1 & end = 4

Break-down :
1 - Odd , 2 - Even , 3 - Odd , 4 - Even

Even sum = 2 + 4 = 6
Odd sum = 1 + 3 = 4
*/

function sumEvenOddInRange(start, end) {
  if (start > end) [end, start] = [start, end]

  let evenSum = 0, oddSum = 0

  for (let i = start; i <= end; i++) {
    if (i % 2 == 0) evenSum += i
    else oddSum += i
  }

  console.log(evenSum);
  console.log(oddSum);
}

sumEvenOddInRange(2, 10)


/*
DRY RUN ----------->

start = 2 & end = 10

Break-down :
2 - Even , 3 - Odd , 4 - Even , 5 - Odd , 6 - Even ,
7 - Odd , 8 - Even , 9 - Odd , 10 - Even

Even sum = 2 + 4 + 6 + 8 + 10 = 30
Odd sum = 3 + 5 + 7 + 9 = 24
*/