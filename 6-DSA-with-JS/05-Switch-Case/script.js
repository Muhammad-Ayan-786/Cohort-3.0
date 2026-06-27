let prompt = require('prompt-sync')()

const switchCaseInJS = () => {
  let day = Number(prompt("Enter day: "));

  switch (day) {
    case 1: {
      console.log("Monday")
      break;
    }
    case 2: console.log("Tuesday")
      break;
    case 3: console.log("Wednesday")
      break;
    case 4: console.log("Thursday")
      break;
    case 5: console.log("Friday")
      break;
    case 6: console.log("Saturday")
      break;
    case 7:
      console.log("Sunday")
      console.log("Mazay !!");
      break;
    default: console.log("Invalid day")
  }
}
// switchCaseInJS()



const consonantVowelChecker = () => {
  let string = prompt("Enter a string: ");
  let vowel = 0, consonant = 0;

  for (let i = 0; i < string.length; i++) {
    let char = (string.charAt(i)).toLowerCase() // can do this also: string[i]

    switch (char) {
      case ('a' || 'A'):
      case ('e' || 'E'):
      case ('i' || 'I'):
      case ('o' || 'O'):
      case ('u' || 'U'): vowel++
        break;
      default: consonant++
    }
  }

  console.log(`${string} has: \nVowels: ${vowel} \nConsonants: ${consonant}`);
}
// consonantVowelChecker()



const areaOfRectangleSqareTriangle = () => {
  console.log("Enter '1' for area of Rectangle");
  console.log("Enter '2' for area of Square");
  console.log("Enter '3' for area of Triangle");
  let num = Number(prompt())

  switch (num) {
    case 1: {
      let length = Number(prompt("Enter length: "))
      let breadth = Number(prompt("Enter breadth: "))
      console.log(length * breadth);
      break;
    }
    case 2: {
      let side = Number(prompt("Enter size: "))
      console.log(side * side);
      break;
    }
    case 3: {
      let heigth = Number(prompt("Enter heigth: "))
      let base = Number(prompt("Enter base: "))
      console.log((base * heigth) / 2);
      break;
    }
    default: "Invalid number"
  }

}
// areaOfRectangleSqareTriangle()