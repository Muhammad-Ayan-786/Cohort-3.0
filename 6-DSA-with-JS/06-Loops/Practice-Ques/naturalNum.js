/*
1. Print Natural Numbers from N to 1
  Given an integer n, print all natural numbers
  starting from n down to 1.

2. Print Natural Numbers from 1 to N
  Given an integer n, print all natural numbers from
  1 to n.
*/

// 1 => Print N to 1
function printNumbers1ToN(n) {
  let str = ''
  for (let i = n; i >= 1; i--) {
    str += `${i} `
  }
  console.log(str);
}
printNumbers1ToN(5)


// 2 => Print 1 to N
function printNumbersNTo1(n) {
  let str = ''
  for (let i = 1; i <= n; i++) {
    str += `${i} `
  }
  console.log(str);
}
printNumbersNTo1(5)

/* Dry Run :=>
Initial n = 5 i = 5
1 run -> i = 5 -> print 5 -> i = 4
2 run -> i = 4 -> print 4 -> i = 3
3 run -> i = 3 -> print 3 -> i = 2
4 run -> i = 2 -> print 2 -> i = 1
5 run -> i = 1 -> print 1 -> i = 0
6 run -> i = 0 -> (Loop Breaks, condition failed)
*/