let prompt = require('prompt-sync')(); // Set Global variable for input

/* If-else statement in JS */
const ifStatementInJS = () => {
  let marks = Number(prompt("Enter marks: "));

  if (marks > 85 && marks <= 100) console.log("Excellent");
  else if (marks > 80 && marks <= 85) console.log("Good");
  else if (marks > 70 && marks <= 80) console.log("Average");
  else console.log("Fail");
}
// ifStatementInJS()



/* Accept an integer and check whether it is an even number or odd */
const evenOdd = () => {
  let num = Number(prompt("Enter a number: "));

  if (num % 2 == 0) console.log("Even");
  else console.log("Odd");
}
// evenOdd()



/* Accept 3 numbers and print the greatest among them */
const greaterOf3Num = () => {
  let n1 = Number(prompt("Enter a number 1: "));
  let n2 = Number(prompt("Enter a number 2: "));
  let n3 = Number(prompt("Enter a number 3: "));

  if (n1 > n2 && n1 > n3) console.log(`${n1} is Greater`);
  else if (n2 > n1 && n2 > n3) console.log(`${n2} is Greater`);
  else console.log(`${n3} is Greater`);
}
// greaterOf3Num()



/* Accept a year and check if it is a leap year or not */
const leapYearCheck = () => {
  let year = Number(prompt("Enter year: "));

  if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0))
    console.log(`${year} is a Leap year`);
  else
    console.log(`${year} is not a Leap year`);
}
// leapYearCheck()



/* Shoping Discount */
const shopingDiscount = () => {
  let amount = Number(prompt("Enter amount: "));
  let discount = 0

  if (amount > 0 && amount <= 5000) discount = 0;
  else if (amount > 5000 && amount <= 7000) discount = 5;
  else if (amount > 7000 && amount <= 9000) discount = 10;
  else discount = 20;

  console.log(`Payable amount ${amount - ((discount * amount) / 100)}`)
}
// shopingDiscount()



/* Counting numbers of days in a given month of a year */
const daysInMonth = () => {
  let month = Number(prompt("Enter month: "));
  let year = Number(prompt("Enter year: "));
  let days = 0;

  if (month == 2) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      days = 29
    }
    else days = 28
  }
  else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    days = 31
  }
  else days = 30

  console.log(days);
}
// daysInMonth()



/* Electricity Bill / Bijli Bill */
const electricityBill = () => {
  /* Electricity Bill -----
    Units     |     Price
    0-100     |     4.2/per
    100-200   |     6/per
    201-400   |     8/per
    unit>400  |     13/per
  */

  return {
    brute_force_Bijli_Bill: () => {   /* Brute Force */
      console.log("Brute Force");
      let units = Number(prompt("Enter units: "));

      if (units > 0 && units <= 100) {
        console.log(units * 4.2)
      }
      else if (units > 100 && units <= 200) {
        console.log((100 * 4.2) + ((units - 100) * 6))
      }
      else if (units > 200 && units <= 400) {
        console.log((100 * 4.2) + (100 * 6) + ((units - 200) * 8))
      }
      else if (units > 400) {
        console.log((100 * 4.2) + (100 * 6) + (200 * 8) + ((units - 400) * 13))
      }
      else {
        console.log("Invalid Input");
      }
    },
    optimized_Bijli_Bill: () => {   /* Optimized */
      console.log("Optimized");
      let units = Number(prompt("Enter units: "));
      let amount = 0;

      if (units > 400) {
        amount = (units - 400) * 13
        units = 400
      }

      if (units > 200 && units <= 400) {
        amount += ((units - 200) * 8)
        units = 200
      }

      if (units > 100 && units <= 200) {
        amount += ((units - 100) * 6)
        units = 100
      }

      amount += units * 4.2

      console.log(amount);
    }
  }
}
// electricityBill().brute_force_Bijli_Bill()
// electricityBill().optimized_Bijli_Bill()