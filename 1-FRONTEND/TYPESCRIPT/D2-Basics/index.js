"use strict";
/* =======================================
Type Inference & Type Annotation
======================================= */
Object.defineProperty(exports, "__esModule", { value: true });
// Inference - TypeScript infers the type of a variable based on its initial value.
let a = 89;
// a = 'pol'
// Annotation - We explicitly tell TypeScript the type of a variable.
let b = true;
let c = 10;
/* ======================================
Primitive Types
====================================== */
let num = 40;
let nul = null;
let bool = false;
let bigN = 10000n;
let str = 'char';
let sym = Symbol('hello');
let undefine = undefined;
/* ======================================
Any , Unknown , Never
====================================== */
/*
any - any lets you do anything

*** NEVER USE ANY *** - It's like 'var' in JS
*/
let anyVar = 'hello';
anyVar = 10;
anyVar = true;
/*
unknown - lets you keep any value, BUT you can't update it

unknown let u keep any data, if ur're unsure about the type
we use this when we don't know the type, like for API responses
*/
let unknownVar = 'hello';
// unknownVar.toUpperCase() // ERROR, NOT ALLOWED
/*
never - never lets you assign any data
*/
let neverVar;
/* ======================================
Arrays & Tuples
====================================== */
/*
Arrays -> no size limit
*/
let anyArray = [0, undefined, 4, 2, true, 8, 'H', 2, null];
let onlyNumArr = [1, 2, 3, 4, 5, 6];
let onlyBolArr = [true, false, true, false];
/*
Tuples -> static list/array of values
*/
let tupleNum = [1, 2];
let typleDiff = [1, true, 'hello'];
// Tuple Array
let tupleArr = [
    [1, 'A', true],
    [2, 'B', false],
    [3, 'C', true]
];
// Typle Array-of-Objects
let tupleObjArr = [
    { id: 1, name: 'A', isActive: true },
    { id: 2, name: 'B', isActive: false },
    { id: 3, name: 'C', isActive: true }
];
/* ======================================
Enums - Options
====================================== */
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["SUP_ADMIN"] = 1] = "SUP_ADMIN";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
let role = Role.ADMIN;
/* ======================================
Union Types - More than one type
====================================== */
let yolo = 'Aryan';
yolo = 23;
let status = 'success';
//# sourceMappingURL=index.js.map