// Datatypes

// Primitive String, Boolean, Number, undefined, null, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);

console.log(id === anotherId);

let bigNumber = 123372893712379937n
console.log(bigNumber);

// Non Primitive (Reference Types) Array, Object, Functions

const heros = ["Adana", "Rafique", "Farhan", "Faizan"]

let myObj = {
    name: "Adnan",
    rollNo: 56,
    cgpa: 3.85
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);
console.log(typeof bigNumber);

/* 
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/