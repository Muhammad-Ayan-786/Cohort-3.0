/*
## Type Conversion & Coercion

1. Convert the string `"50"` into a number.
2. Convert the number `100` into a string.
3. Convert `"true"` into a boolean.
4. Check the output of:
- `"5" + 2`
- `"5" - 2`
- `true + 1`
5. Create a variable with value `"123abc"` and convert it into a number.
6. Use `parseInt()` on `"500px"`.
*/

// 1
var string = Number('50')
console.log(typeof (string), string);

// 2
var number = String(100)
console.log(typeof (number), number)

// 3
var boolean = Boolean('true')
console.log(typeof (boolean), boolean);

// 4
console.log('5' + 2)
console.log('5' - 2)
console.log(true + 1)

// 5
var numString = Number("123abc")
console.log(numString);

// 6
var unit = parseInt("500px")
console.log(unit);