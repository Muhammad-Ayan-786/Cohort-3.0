/*
Accept the principal amount(P), annual interest rate(r), the number of years(t), 
and number of times interest is compounded per year(n) write a program to calculate
the compound interest. The formula to calculate compound interest is:
A = Px(1+r/n)^(n*t) Where: A is the amount of money accumulated after n years,
including interest. P is the principal amount (the initial sum of money). r is the
annual interest rate (in decimal). t is the time the money is invested for in years.
n is the number of times that interest is compounded per year. The compound interest
is then calculated as CI=A-P.
*/

function calculateCompoundInterest(P, r, t, n) {
  let accumulated = P * ((1 + r / n) ** (n * t))
  let CI = (accumulated - P).toFixed(2)

  console.log(`Compound Interest: ${CI}`)

  return CI
}

calculateCompoundInterest(1000, 0.05, 2, 12)