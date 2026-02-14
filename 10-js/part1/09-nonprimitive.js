//Objects
let username = {
  firstname: "mycode",
  isLoggedin: true,
  "age is": 25,
};

console.log(username);
console.log(typeof username); // object

username.firstname = "Mr me ";
console.log(username);

//abnother way to access
console.log(username["age is"]); // this is the only way to access the key with space

console.log("1" + 1); // output : 11
console.log(1 + "1"); // output : 11   : everything convert to string

let isValue = true;
console.log(isValue + 1); // output : 2
console.log(isValue + "1"); // output : true1   : true convert to 1

// conver to a number
let value = "10";
console.log(typeof value); // output : string
value = Number(value);
console.log(typeof value); // output : number

// NAN
let value1 = "10abc";
console.log(typeof value1); // output : string
value1 = Number(value1);
console.log(typeof value1); // output : number
console.log(value1); // output : NaN
