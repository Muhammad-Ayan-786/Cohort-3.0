/* ========================
Arithmetic Operators
======================== */
console.log(5 + 4);
console.log(11 - 3);
console.log(8 * 6);
console.log(4 / 2);
console.log(10 % 2);

// Removing the last digits
let n = 45678;
console.log(n);
console.log(Math.floor(n / 10)); // 4567 (10 remove 1 digit)
console.log(Math.floor(n / 100)); // 456 (100 remove 2 digits)
console.log(Math.floor(n / 1000)); // 45 (1000 remove 3 digits)

// Bring the last digits
let m = 45678;
console.log(m);
console.log(m % 10); // 8 (10 bring 1 digit)
console.log(m % 100); // 78 (100 bring 2 digits)
console.log(m % 1000); // 678 (1000 bring 3 digits)


/* ========================
Comparison Operators
======================== */
console.log(5 > 4);
console.log(5 < 4);
console.log(5 >= 4);
console.log(5 <= 4);
console.log(5 == 4);
console.log(5 != 4);


/* ========================
Logical Operators
======================== */
console.log(true && false);
console.log(true || false);
console.log(!true);

console.log(2 > 5 && 4 > 1);
console.log(2 > 5 || 4 > 1);
console.log(!(2 > 5 && 4 > 1));


/* ========================
Unary Operators
======================== */

/*
      DHABA (Post)                |           Dominos (Pre)
      eat -> pay                  |           pay -> eat
      use -> change               |           change -> use
--------------------------------------------------------------------------------
                              Increment
--------------------------------------------------------------------------------
let a = 10                        |           let a = 10
let b = a++ (store then update)   |           let b = ++a (update then store)
(b=10) & (a=11)                   |           (a=11) & (b=11)
log(a) // 11                      |           log(a) // 11
log(b) // 10                      |           log(b) // 11
--------------------------------------------------------------------------------
                              Decrement
--------------------------------------------------------------------------------
let a = 10                        |           let a = 10
let b = a-- (store then update)   |           let b = --a (update then store)
(b=10) & (a=9)                    |           (a=9) & (b=9)
log(a) // 9                       |           log(a) // 9
log(b) // 10                      |           log(b) // 9
*/

let a = 12
let b = 15
let c = 8

let d = a++ + --b - c++ + ++a
console.log(d);

/* THESE NOTATIONS ARE INVALID

let x = 10++ // Invalid

++(++a) // Invalid
console.log(++(++a)); // Also Invalid

const xyz = 20
xyz++ // Invalid
console.log(++xyz); // Also Invalid
*/
