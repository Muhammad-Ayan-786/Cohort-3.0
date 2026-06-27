/*
Write a program that takes the number of electricity units
consumed as input and calculates the final electricity bill
based on the following conditions:

Electricity Bill -------
  Units     |     Price
  1-99      |     7.25
  100-199   |     12.5
  200+      |     15
*/

function calculateElectricityBill(units) {
  let amount = 0

  if (units >= 200) {
    amount = (units - 200) * 15
    units = 200
  }

  if (units >= 100 && units <= 199) {
    amount = amount + ((units - 99) * 12.5)
    units = 99
  }

  amount = amount + (units * 7.25)

  console.log(`Electricity Bill: ${amount} when units are ${units}`);
}

calculateElectricityBill(86)
calculateElectricityBill(160)
calculateElectricityBill(240)