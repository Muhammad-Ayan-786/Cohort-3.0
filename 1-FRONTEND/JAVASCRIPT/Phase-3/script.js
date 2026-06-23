/* <====================================================
Closures, Lexical scope & environment, Scope chaining
====================================================> */

/* -------- Lexical scope & Env. -------- */
function parent() {
  let user = 'Harsh'

  function child() {
    let childName = 'Aman'
    console.log('Parent: ', user)
    console.log('Child: ', childName)
  }

  return child
}

let output = parent()
output()



/* -------- Scope Chaining -------- */
function parent() {
  let user = 'Harsh'

  function child() {
    let childName = 'Aman'
    console.log('Parent: ', user)
    console.log('Child: ', childName)

    function grandChild() {
      let grandChildName = 'Rohan'
      console.log('Parent: ', user)
      console.log('Child: ', childName)
      console.log('Grand Child: ', grandChildName)
    }

    return grandChild
  }

  return child
}

parent()()()



/* -------- Closures -------- */

// Create a counter
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  }
}

let inc = counter()
inc()
inc()

// Create a bank account
function createBankAccount() {
  let balance = 0; // private — cannot be accessed directly
  return {
    deposit(amount) { balance += amount; return balance; },
    getBalance() { return balance; }
  };
}
const acc = createBankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100
console.log(acc.balance);      // undefined — truly private

// Create a adding calculator
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(add(1)(2)(3)); // 6