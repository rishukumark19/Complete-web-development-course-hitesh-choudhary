/*
write a while loop to calculate summo  fnumber form 1 to 5 and 
result stores in a variable named "sum"
*/
let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++;
}
console.log(sum);

/* write a loop that counts down from 5 to 1 and stores in
array named countdown 

*/
let countdown = [];
let j = 5;
while (j >= 1) {
  countdown.push(j);
  j--;
}
console.log(countdown);

/*
write a do while loop that prompts a user to enter their favorite tea type 
until they enter "stop". store each tea type in "teacollection "

*/
const prompt = require("prompt-sync")();

let teaCollection = [];
let userInput;

do {
  userInput = prompt("Enter your input (enter stop to exit ): ");
  if (userInput != "stop") {
    teaCollection.push(userInput);
  }
} while (userInput != "stop");
console.log(teaCollection);

// A do...while loop is used instead of a while loop because you want the prompt to appear at least once, even if the user immediately types "stop".

/*
wrute a do while loop that adds numbers from 1 to 3 and stores the result in a vairable named "total.
"
*/
let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);

//write a for loop that multiples each element
// in aarray [2,4,6] by 2and stores the results in a new array anamed multipliedNumbers.

let multipliedNumbers = [];
let numbers = [2, 4, 6];
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] * 2;
  multipliedNumbers.push(numbers[i]);
}
console.log(multipliedNumbers);

//write a for loop taht listes all the cities
