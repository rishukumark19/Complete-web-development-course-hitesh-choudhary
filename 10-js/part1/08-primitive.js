// there are 2 types of datatypes
// 1. primitive
// 2. non-primitive

// primitive : string, number, boolean, null, undefined, symbol, bigint
// non-primitive : object, array, function

// number
let balance = 120;
console.log(typeof balance); // output : number
let anotherBalance = new Number(120);
console.log(typeof anotherBalance); // output : object

// string
let name = "mycode";
console.log(typeof name); // output : string

// boolean
let isLoggedin = false;
console.log(typeof isLoggedin); // output : boolean

// null
let emptyValue = null;
console.log(typeof emptyValue); // output : object

// undefined
let undefinedValue;
console.log(typeof undefinedValue); // output : undefined

// symbol
let uniqueValue = Symbol("unique");
console.log(typeof uniqueValue); // output : symbol

// bigint
let bigIntValue = 1234567890123456789012345678901234567890n;
console.log(typeof bigIntValue); // output : bigint

// object
let user = { name: "mycode", age: 25 };
console.log(typeof user); // output : object

// array
let teaType = ["chai", "coffee", "lassi"];
console.log(typeof teaType); // output : object

// function
let myFunction = function () {
  console.log("Hello world");
};
console.log(typeof myFunction); // output : function

// string interpolation
let name1 = "mycode";
let age = 25;
console.log(`Hello ${name1}, you are ${age} years old`);

//Symbol

let id = Symbol("123");
let anotherId = Symbol("123");
console.log(id == anotherId); // false
