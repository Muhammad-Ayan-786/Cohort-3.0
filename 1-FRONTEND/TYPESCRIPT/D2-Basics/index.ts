/* =======================================
Type Inference & Type Annotation
======================================= */

// Inference - TypeScript infers the type of a variable based on its initial value.
let a = 89
// a = 'pol'


// Annotation - We explicitly tell TypeScript the type of a variable.
let b: boolean = true
let c: number = 10



/* ======================================
Primitive Types
====================================== */

let num: number = 40
let nul: null = null
let bool: boolean = false
let bigN: bigint = 10000n
let str: string = 'char'
let sym: symbol = Symbol('hello')
let undefine: undefined = undefined



/* ======================================
Any , Unknown , Never
====================================== */

/*
any - any lets you do anything

*** NEVER USE ANY *** - It's like 'var' in JS
*/
let anyVar: any = 'hello'
anyVar = 10
anyVar = true

/*
unknown - lets you keep any value, BUT you can't update it

unknown let u keep any data, if ur're unsure about the type
we use this when we don't know the type, like for API responses
*/
let unknownVar: unknown = 'hello'
// unknownVar.toUpperCase() // ERROR, NOT ALLOWED


/*
never - never lets you assign any data
*/
let neverVar: never;



/* ======================================
Arrays & Tuples
====================================== */

/*
Arrays -> no size limit
*/
let anyArray: any[] = [0, undefined, 4, 2, true, 8, 'H', 2, null]
let onlyNumArr: number[] = [1, 2, 3, 4, 5, 6]
let onlyBolArr: boolean[] = [true, false, true, false]


/*
Tuples -> static list/array of values
*/
let tupleNum: [number, number] = [1, 2]
let typleDiff: [number, boolean, string] = [1, true, 'hello']

// Tuple Array
let tupleArr: [number, string, boolean][] = [
  [1, 'A', true],
  [2, 'B', false],
  [3, 'C', true]
]

// Typle Array-of-Objects
let tupleObjArr: { id: number, name: string, isActive: boolean }[] = [
  { id: 1, name: 'A', isActive: true },
  { id: 2, name: 'B', isActive: false },
  { id: 3, name: 'C', isActive: true }
]



/* ======================================
Enums - Options
====================================== */

enum Role {
  ADMIN,
  SUP_ADMIN,
  USER
}

let role: Role = Role.ADMIN



/* ======================================
Union Types - More than one type
====================================== */

let yolo: string | number = 'Aryan'
yolo = 23



/* ======================================
Literals - Fixed values
====================================== */

type Status = 'pending' | 'success' | 'error'

let status: Status = 'success'