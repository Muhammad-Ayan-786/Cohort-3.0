/* ======================================
1. GENERICS
====================================== */

/*
  Generics let you write ONE function that works 
  for MANY types, but TypeScript still knows exactly what type it is.

  Think of it like a BOX. You can put anything in the box 
  (a number, a string, anything). The box doesn't care what's inside, 
  but once you put something in, TS remembers exactly what it is.
*/

function putInBox<T>(item: T): T {
  return item;
}

let box1 = putInBox<string>("Apple");   // TS knows box1 is a string
let box2 = putInBox<number>(100);       // TS knows box2 is a number
let box3 = putInBox(true);              // TS auto-detects: boolean

console.log(box1, box2, box3);


/* Generic with an array — works for any type of array */
function getFirstItem<T>(list: T[]): T | undefined {
  return list[0];
}

let fruits = ["Mango", "Apple", "Banana"];
let firstFruit = getFirstItem<string>(fruits); // "Mango"

console.log(firstFruit);



/* ======================================
2. GENERIC CONSTRAINTS
====================================== */

/*
  Sometimes a generic type is TOO free. 
  You want to say "T can be anything, BUT it must have this property."
  We use "extends" to add that rule.
*/

interface HasName {
  name: string;
}

// T can be any type, but it MUST have a "name" property
function greetPerson<T extends HasName>(person: T): void {
  console.log("Hello, " + person.name);
}

greetPerson({ name: "Ayan", age: 25 }); // ✅ works, has "name"
// greetPerson({ age: 25 });            // ❌ would error, no "name"



/* ======================================
3. KEYOF
====================================== */

/*
  "keyof" takes an object type and gives you 
  a list of its property names (as a type), joined with "|".

  Example: if a Car has "brand" and "model", 
  keyof Car = "brand" | "model"
*/

type Car = {
  brand: string;
  model: string;
  year: number;
};

type CarProperty = keyof Car;
// this type is now: "brand" | "model" | "year"

let propertyName: CarProperty = "brand"; // ✅ allowed
// let wrong: CarProperty = "color";     // ❌ not allowed, "color" isn't a Car property



/* ======================================
4. TYPEOF
====================================== */

/*
  "typeof" looks at a VALUE you already wrote, 
  and creates a TYPE from it automatically. 
  So you don't have to write the same shape twice.
*/

const myPhone = {
  brand: "Samsung",
  price: 25000,
  isAvailable: true
};

// instead of writing an interface manually, just copy the shape:
type PhoneType = typeof myPhone;

let anotherPhone: PhoneType = {
  brand: "iPhone",
  price: 90000,
  isAvailable: false
};

console.log(anotherPhone);



/* ======================================
5. INDEXED ACCESS TYPES
====================================== */

/*
  This lets you grab the TYPE of just ONE property 
  from a bigger type, instead of the whole thing.
*/

type Book = {
  title: string;
  pages: number;
  author: {
    name: string;
    country: string;
  };
};

// grab just the type of "author" from Book
type BookAuthor = Book["author"];
// same as: { name: string, country: string }

let author1: BookAuthor = {
  name: "Ayan",
  country: "South Africa"
};

console.log(author1);



/* ======================================
6. MAPPED TYPES
====================================== */

/*
  A mapped type lets you take an EXISTING type, 
  and create a NEW type by changing every property the same way 
  (like making them all optional, or all readonly).

  Think of it like a loop, but for types instead of values.
*/

type Student = {
  name: string;
  grade: number;
};

// make every property in Student optional
type OptionalStudent = {
  [key in keyof Student]?: Student[key];
};

let newStudent: OptionalStudent = {
  name: "Aman"
  // "grade" not required, because we made it optional
};

console.log(newStudent);



/* ======================================
7. UTILITY TYPES
====================================== */

/*
  TypeScript already has some ready-made 
  "mapped types" built in, so you don't have to write them yourself.
  These are called Utility Types.
*/

type Movie = {
  title: string;
  year: number;
  rating: number;
};

/* Partial<T> = makes all properties optional */
let draftMovie: Partial<Movie> = {
  title: "Inception"
  // year and rating not required
};

/* Required<T> = makes all properties compulsory */
let finalMovie: Required<Movie> = {
  title: "Inception",
  year: 2010,
  rating: 9
};

/* Readonly<T> = you cannot change the value after creating it */
let lockedMovie: Readonly<Movie> = {
  title: "Interstellar",
  year: 2014,
  rating: 9
};
// lockedMovie.year = 2020; // ❌ not allowed, it's readonly

/* Pick<T, "key"> = choose only SOME properties */
type MovieTitleOnly = Pick<Movie, "title">;
let shortMovie: MovieTitleOnly = { title: "Tenet" };

/* Omit<T, "key"> = take everything EXCEPT some properties */
type MovieWithoutRating = Omit<Movie, "rating">;
let movieNoRating: MovieWithoutRating = { title: "Dunkirk", year: 2017 };

/* Record<Keys, Type> = build an object type from a list of keys */
type MovieGenre = "action" | "comedy" | "drama";
let genreCount: Record<MovieGenre, number> = {
  action: 10,
  comedy: 5,
  drama: 3
};



/* ======================================
8. CONDITIONAL TYPES
====================================== */

/*
  This is like an "if-else", but for TYPES.
  Format: SomeType extends OtherType ? TrueResult : FalseResult
*/

type CheckIfString<T> = T extends string ? "It is a string" : "It is NOT a string";

type Check1 = CheckIfString<"hello">; // "It is a string"
type Check2 = CheckIfString<123>;     // "It is NOT a string"



/* ======================================
9. INFER KEYWORD
====================================== */

/*
  "infer" means "figure this type out for me automatically."
  You use it ONLY inside a conditional type, to "catch" a type 
  hidden inside another type.
*/

// Example: catch the type INSIDE an array
type ItemInsideArray<T> = T extends (infer ItemType)[] ? ItemType : T;

type NumberFromArray = ItemInsideArray<number[]>; // number
type StringFromArray = ItemInsideArray<string[]>; // string


// Example: catch the RETURN type of a function
type FunctionReturnType<T> = T extends (...args: any[]) => infer ReturnValue
  ? ReturnValue
  : never;

function getScore() {
  return 95;
}

type ScoreType = FunctionReturnType<typeof getScore>; // number