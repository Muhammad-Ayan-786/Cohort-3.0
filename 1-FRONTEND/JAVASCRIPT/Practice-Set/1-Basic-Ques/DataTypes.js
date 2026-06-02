/*
## Data Types

1. Create variables of type string, number, boolean, null, and undefined.
2. Check the type of different variables using `typeof`.
3. Store your mobile number in a variable and check its type.
4. Create a variable with value `null` and check its type.
5. Create a bigint number and print it.
*/

// 1
var string = 'Hello World'
var num = 10
var boolean = true
var empty = null
var notDefine = undefined

// 2
console.log(typeof (string))
console.log(typeof (num))
console.log(typeof (boolean))
console.log(typeof (empty))
console.log(typeof (notDefine))

// 3
var phoneNum = '01230760891234'
console.log(typeof phoneNum)

// 4
var game = null
console.log(typeof game)

// 5
var bigint = 30000000000000000000000n
console.log(bigint)