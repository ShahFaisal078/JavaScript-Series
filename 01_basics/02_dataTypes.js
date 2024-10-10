/*

DATA TYPES

1. Object
2. Primitive Datatype

Everything in JS is an object and if it doesn't lie in the category of object it falls in Primitive Datatypes


*/

/*
    PRIMITIVE DATATYPES

    Number (64 bits)
    String
    Boolean
    Undefined
    Null
    Symbol(ES6/2015)
    BigInt(ES2020)


*/

// Number (64 bits)

let num = 10;
console.log(typeof 20);  // number
console.log(typeof num); // number

// String
const firstName = "Md"; // Double Quotes
const middleName = 'Shah'; // Single Quotes
const lastName = `Faisal`; // Back Tick

console.log(typeof firstName);
console.log(typeof middleName);
console.log(typeof lastName);


//Boolean
let bool = false;
console.log(typeof bool);  // boolean


//Undefined - If you don't initialise the value
let a;
console.log(typeof a); // undefined
console.log(a); // undefined

//Null
let b = null;
console.log(b); //null
console.log(typeof b); // Object [It is a bug in JS]

let num1 = 10n;  //number ends with n
console.log(num1)
console.log(typeof num1) //BigInt

