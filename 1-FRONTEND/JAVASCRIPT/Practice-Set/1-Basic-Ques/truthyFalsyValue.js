/*
## Truthy & Falsy

1. Check whether an empty string is truthy or falsy.
2. Check whether `0` is truthy or falsy.
3. Check whether `[]` is truthy or falsy.
4. Create a variable and print `"Valid"` if it has a value otherwise print `"Invalid"`.
*/

// 1
if ('') {
  console.log('Truthy');
} else {
  console.log('Falsy');
}

// 2
if (0) {
  console.log('Truthy');
} else {
  console.log('Falsy');
}

// 3
if ([]) {
  console.log('Truthy');
} else {
  console.log('Falsy');
}

// 4
var string = ""

if (string) console.log("Valid");
else console.log("Invalid");