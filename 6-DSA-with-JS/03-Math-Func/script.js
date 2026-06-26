/* <================= Math Functions =================> */
console.log(Math.abs(-3));                // convert neg to pos
console.log(Math.ceil(4.2));              // round up
console.log(Math.floor(3.7));             // round down
console.log(Math.round(8.6));             // round to nearest
console.log(Math.trunc(10.40952));        // remove decimal
console.log(Math.sqrt(16));               // square root
console.log(Math.cbrt(27));               // cube root
console.log(Math.pow(2, 4));              // 2 to the power of 4
console.log(Math.max(3, 12, -3, 10, 8));  // max value
console.log(Math.min(3, 12, -3, 10, 8));  // min value
console.log(Math.random());               // random number between 0 and 1
console.log(4.23952.toFixed(3));          // brings decimal number


/* <================= Math Problems =================> */
// Calculate Compount Interest

let P = 10000, r = 5, t = 3;
let CP = (P * Math.pow((1 + (r / 100)), t) - P).toFixed(2)
console.log(CP);

// Generate OTP

let OTP = Math.trunc((Math.random() * 9000) + 1000)
console.log(OTP)
