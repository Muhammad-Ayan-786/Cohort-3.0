// Guess The Output, without executing --------> 
let count = 0;
for (let i = 2; i <= 20; i += 3) {
  count++;
}
console.log(count);


/* Dry Run =>

count = 0
1) i = 2 | count++ -> 1 | i=i+3 -> 5
2) i = 5 | count++ -> 2 | i=i+3 -> 8
3) i = 8 | count++ -> 3 | i=i+3 -> 11
4) i = 11 | count++ -> 4 | i=i+3 -> 14
5) i = 14 | count++ -> 5 | i=i+3 -> 17
6) i = 17 | count++ -> 6 | i=i+3 -> 20
7) i = 20 | count++ -> 7 | i=i+3 -> 23
8) i = 23 | Condition fails (23 <= 20 is false), so the loop stops.
*/

// Answer will '7' execution