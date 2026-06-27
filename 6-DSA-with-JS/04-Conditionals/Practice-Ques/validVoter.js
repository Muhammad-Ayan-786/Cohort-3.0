/*
Write a program that takes a user's age and name as input and checks whether
the user is a valid voter. . A user is considered a valid voter if their age is 18 or
older. · If the user is 18 or older, return : <Name> is a valid voter. . If the user is
younger than 18, return : < Name> is not a valid voter.
*/

function checkVoterEligibility(name, age) {
  if (age >= 18) {
    return `${name} is a valid voter.`
  } else {
    return `${name} is not a valid voter.`
  }
}

console.log(checkVoterEligibility('Ayan', 17))