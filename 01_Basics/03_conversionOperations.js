// 3. Conversion Operations

let score = 100
let scoreString = String(score)

// console.log(typeof score) // number
// console.log(typeof scoreString) // string

let valueInNumber = Number(scoreString)
// console.log(typeof valueInNumber) // number

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(typeof booleanIsLoggedIn) // number
// console.log(booleanIsLoggedIn) // true

let someNumber = true
let someString = String(someNumber)

// console.log(someNumber) // true
// console.log(someString) // "true"
// console.log(typeof someNumber) // number
// console.log(typeof someString) // string

/* 
Notes:
    1. There are 3 types of conversion operations in JavaScript
        String() converts a value to string
        Number() converts a value to number
        Boolean() converts a value to boolean

    Some conversion examples to Number():
    "33" => 33
    "33a" => NaN (Not a Number)
    "33.5" => 33.5
    "33.5a" => NaN (Not a Number)
    true => 1
    false => 0
    null => 0
    undefined => NaN (Not a Number)
    " " => 0

    Some conversion examples to Boolean():
    0 => false
    1 => true
    "33" => true
    "" => false

    Some conversion examples to String():
    33 => "33"
    true => "true"
    false => "false"
    null => "null"
    undefined => "undefined"
    0 => "0"
*/

// Operations

let a = 10
let negValue = -a
// console.log(negValue);

let str1 = "Hello"
let str2 = " Adnan"
let str3 = str1 + str2
console.log(str3);