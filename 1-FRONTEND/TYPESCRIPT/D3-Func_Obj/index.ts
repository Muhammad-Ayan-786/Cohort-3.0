/* ======================================
Objects
====================================== */
let obj: {
  name: string,
  age: number
} = {
  name: "Ayan",
  age: 25
}

// type alias
type UserObj = {
  name: string,
  age: number,
  company: string,
  address: {
    city: string,
    state: string
  },
  employeeId?: number, // optional
  skills?: string[]
}

let userObj: UserObj = {
  name: "Ayan",
  age: 25,
  company: "Sheryians",
  address: {
    city: "Johannesburg",
    state: "Gauteng"
  },
}



/* =====================================
Functions
====================================== */

/* void - returns nothing */
let greet = (): void => {
  console.log("Hello Everyone");
}
// greet()


/* define type of parameters, and the return type */
let addNums = (a: number, b: number): number => {
  return a + b
}

let result: number = addNums(80, 70)
// console.log(result);


/* default parameters */
let add = (a: number, b: number = 0): number => {
  return a + b
}

let res: number = add(8)
// console.log(res);


/* rest parameters */
let total = (...nums: number[]) => {
  return nums.reduce((acc, num) => acc + num, 0)
}

let res1 = total(10, 20, 30, 40, 50)
// console.log(res1);

/* callback functions */
let processUser = (name: string, callback: () => void): void => {
  console.log("Processing user: " + name);
  callback();
}

processUser("Aman", () => {
  console.log("Welcome, Aman");
});

// callback with return
let calculator = (a: number, cb: () => number): number => {
  return a + cb();
}

let res2: number = calculator(5, () => {
  return 10
})
console.log(res2);



/* =====================================
------------ INTERVIEW QUES ------------
====================================== */

// CURRYING Function
let sum = (a: number) => {
  return (b?: number) => {
    if (b !== undefined) return sum(a + b)
    return a
  }
}

// Currying in one line :
// let sum = (a: number) => (b: number) => b !== undefined ? sum(a + b) : a

// let data = sum(12)(62)(14)(84)(25)()
let data = sum(12)()

console.log(data);