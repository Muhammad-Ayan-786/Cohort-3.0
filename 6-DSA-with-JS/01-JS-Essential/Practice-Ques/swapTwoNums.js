/*
Write a program that accepts two integers as
input and swaps their values. After swapping,
print the new values of the two numbers.
*/

function swapMachineFunction() {
  let swapMethods = {
    extra_var_swap(a, b) {
      console.log(`Before Swaping - a: ${a} ,b: ${b}`);
      let temp = a
      a = b
      b = temp
      console.log(`After Swaping - a: ${a} ,b: ${b}`);
    },
    mathamatically_swap(a, b) {
      console.log(`Before Swaping - a: ${a} ,b: ${b}`);
      a = a + b
      b = a - b
      a = a - b
      console.log(`After Swaping - a: ${a} ,b: ${b}`);
    },
    destructure_swap(a, b) {
      console.log(`Before Swaping - a: ${a} ,b: ${b}`);
      [a, b] = [b, a]
      console.log(`After Swaping - a: ${a} ,b: ${b}`);
    }
  }

  return swapMethods
}

let swapMachine = swapMachineFunction()

swapMachine.extra_var_swap(31, 12)
console.log();
swapMachine.mathamatically_swap(41, 2)
console.log();
swapMachine.destructure_swap(23, 68)