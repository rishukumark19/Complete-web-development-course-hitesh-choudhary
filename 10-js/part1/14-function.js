//greeting
function greet(name) {
  //parameter
  console.log(`Hello ${name}`);
}
greet("mycode"); //argument

/*
write a funcition named "makeTea" that takes one parameter "typeofTea", and return a string 
like "Making green tea" when called with "green tea". Store the result in a variable named "teaOrder".
*/

function makeTea(typeofTea) {
  return `Making ${typeofTea}`;
}
let teaOrder = makeTea("green tea");
console.log(teaOrder);

/*
Create a function name "orderTea" that takes one parameter, "teaType". Inside this funciton,
create another function named "confirmOrder" that returns a messgae like "Order confirmed " for  chai.
call "confirmOrder" from within "orderTea" and return the result . 

*/
function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirm for ${teaType}`;
  }
  return confirmOrder();
}
console.log(orderTea("dahii"));

/*
write an arrow function named "calculateTotal" that takes two parameters: "price" and "quality". The 
fucntion should return the total cost by multiplying the "price " and "quality".
store the result in a variable named "Totalcost" */

// functin greet() {}
// const greet = () =>{}

// const calculateTotal = (price, quantity) => {
//   return price * quantity;
// };

//for 1 line , u can remove return and make it in same line.
const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(499, 100);
console.log(totalCost);

/*Write a function named "processTeaOrder" that takes another function "makeTea"
,as a parameter and calls it with argument"earl grey" . 
Return the result of calling "makeTea"*/

const processTeaOrder = (fn) => fn("earl grey");
console.log(processTeaOrder(makeTea));

/*
Write a function named "createTeaMaker" that returns another funciton . The return 
function  should take one parameter "teaType", and return a message  like "Making green tea";
Store the return function in a variable named "teaMaker"and call it with "green tea".
*/

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}
let teaMaker = createTeaMaker();
console.log(teaMaker("green tea"));
