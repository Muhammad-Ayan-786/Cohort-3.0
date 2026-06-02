/*
## Operators

1. Add two numbers and print the result.
2. Find the remainder when 25 is divided by 4.
3. Find the square of a number using exponent operator.
4. Increment a variable using `++`.
5. Decrement a variable using `-`.
6. Use `+=` operator to increase a variable by 20.
7. Compare two numbers using `>`, `<`, `>=`, `<=`.
8. Check if two values are strictly equal using `===`.
9. Compare `"10"` and `10` using both `==` and `===`.
10. Create two boolean variables and test `&&`, `||`, and `!`.
*/

// 1
console.log(2 + 2)

// 2
console.log(25 % 4)

// 3
console.log(4 ** 2)

// 4
var num = 4
console.log(num++)

// 5
console.log(num - 1);

// 6
var a = 5
a += 20
console.log(a)

// 7
console.log(2 > 2)
console.log(3 < 2)
console.log(2 >= 2)
console.log(4 <= 5)

// 8
console.log(2 === '2')

// 9
console.log(10 == '10')
console.log(10 === '10')

// 10
var boolean1 = true
var boolean2 = false
console.log(boolean1 && boolean2)
console.log(boolean1 || boolean2)
console.log(!boolean1, !boolean2)