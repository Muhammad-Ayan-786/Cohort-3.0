/*
## Mixed Practice Questions

1. Create a mini biodata program using variables and template literals.
2. Calculate the area of a rectangle.
3. Calculate the simple interest.
4. Convert temperature from Celsius to Fahrenheit.
5. Convert kilometers into meters.
6. Calculate total marks and percentage of 5 subjects.
7. Calculate electricity bill based on units consumed.
8. Create a username generator using first name and birth year.
9. Check whether a string starts with a specific letter.
10. Count the total characters in a sentence excluding spaces.
*/

// 1
var firstName = 'Mohammad Ayan'
var surName = 'Asim'
var age = 17
var grade = 10
console.log(`My name is ${firstName} ${surName}. I'm ${age} years old, and I'm in grade ${grade}.`);

// 2
var base = 5
var height = 4
var area = (1 / 2) * base * height
console.log(area);

// 3
var principle = 3000
var rate = 0.8
var duration = 3
var SI = (principle * rate * duration) / 100
console.log(SI)

// 4
var Celsius = 32
var Fahrenheit = (Celsius * (9 / 5)) + 32
console.log(Fahrenheit);

// 5
var kilometers = 3
var meters = kilometers * 1000
console.log(meters)

// 6
var sub1 = 80
var sub2 = 65
var sub3 = 76
var sub4 = 99
var sub5 = 61
var totalMarks = sub1 + sub2 + sub3 + sub4 + sub5
var percentage = (totalMarks / 500) * 100
console.log(totalMarks);
console.log(percentage);

// 7
var unitRate = 2
var unitConsumed = 300
var totalCost = unitConsumed * unitRate
console.log(totalCost);

// 8
var name = 'Ayan'
var year = 2000
console.log(name + year)

// 9
var specificChar = 'A'
var string = 'Ayan'
if (string.charAt(0) === specificChar) console.log("Contains Specific Letter")
else console.log("Doesn't Contains Specific Letter")

// 10
var sentence = "Hello World from JavaScript"
var totalChar = sentence.split(' ').join('').length
console.log(totalChar)