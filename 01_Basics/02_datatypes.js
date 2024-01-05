// 02. Datatypes

"use strict"; // this is used to enable strict mode which helps in writing better code and avoiding errors 

// alert(3 + 3) // we are using node.js so alert() will not work here, it is used in browsers

// 1. Number
let num = 3;
console.log(num); // 3
console.log(typeof num); // number

console.log(typeof null); // object (this is a bug in JavaScript)
console.log(typeof undefined); // undefined 

/* 
NOTES:
    1. There are 7 primitive datatypes in JavaScript
    2. Primitive datatypes are immutable (cannot be changed)
    3. Primitive datatypes are passed by value (copied)
    4. Primitive datatypes are stored in the stack
    5. Primitive datatypes are compared by value
    6. Primitive datatypes are: 
        a. Number (integer, float, double, etc.)
        b. String (text)
        c. Boolean (true/false)
        d. Null (empty)
        e. Undefined (not defined)
        f. Symbol (unique)
        g. BigInt (large number)
    7. There is 1 non-primitive datatype in JavaScript
    8. Non-primitive datatypes are mutable (can be changed)
    9. Non-primitive datatypes are passed by reference (not copied)
    10. Non-primitive datatypes are stored in the heap
    11. Non-primitive datatypes are compared by reference
    12. Non-primitive datatypes are: 
        a. Object (collection of properties)
*/
