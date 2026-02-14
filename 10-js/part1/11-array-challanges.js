/* declare an array named "teaFlavours" that contains the strings green tea", :black tea" and "oolong tea"
access the first element of the array and store it in a variable named "firstTea"

*/
let teaFlavours = ["green tea", "black tea", "oolong tea"];

let teaFl = new Array("green", "black", "oolong"); //another way to create an array

let firstTea = teaFlavours[0];
console.log(firstTea);
console.log(teaFlavours);
console.log(teaFl);

/*
feclare an array named "cities containing "London ","New York","Tokyo". 
access the third element in the arry and store it in a variable named 
"favoritecity "
*/
let cities = ["London", "New York", "Tokyo"];
let favoriteCity = cities[2];
console.log(favoriteCity);

/*
change second element from previous array .

*/
cities[1] = "Paris";
console.log(cities);

/*
add birlin to the list 
*/
cities.push("Birlin");
console.log(cities);

/*
remove the last element from the array and store it in a variable named 
"removedCity"
*/
let removedCity = cities.pop();
console.log(removedCity);
console.log(cities);

//soft copy
let copyOfCities = cities;
copyOfCities.push("Berlin"); // soft copy
console.log(copyOfCities); //

//hard copy
let hardCopyCities = [...cities];
hardCopyCities.push("Berlin");
console.log(hardCopyCities); //
// with slice
let sliceCopyCities = cities.slice();
sliceCopyCities.push("Berlin");
console.log(sliceCopyCities); //

//merge 2 array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = [...array1, ...array2];
console.log(mergedArray); //
//with concat
let concatArray = array1.concat(array2);
console.log(concatArray); //

//find length of array and story in another variable
let lengthOfArray = cities.length;
console.log(lengthOfArray); //

//10. You have an array named 'cityBucketList' containing
// "Tokyo",'"Kyoto" s,
// "London"
// '"Cape Town"
// and
// " Vancouver" .
// Check if '"London" s is in the array and store the
// result in a variable named 'isLondonrnList& .
// */
let cityBucketList = ["Tokyo", "Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList); // true

//shift

//unshift

//common Q & A
/*
Which method returns a shallow copy of a portion of an array? : slice()
Which of the following will correctly reverse an array? : reverse()
let arr =[1,2,3,4,5]
How can you combine two arrays in JavaScript? : concat() or spread operator
What is the output of the following code?
let arr = [1,2,3,4,5]
arr. push(6)
arr.pop();
console. log(arr) ;  // [1,2,3,4]
Which method is used to remove the first element of an array? : shift()
What does the pop() method do in JavaScript arrays? : removes the last element of an array
Which of the following methods can add an element to the end of an array? : push()
 
What will the following code output?
let arr =[1,2,3,4];
console.log(arr.indexOf(3)); // 2

How do you find the length of an array in JavaScript? : length property
What is the correct way to declare an array in JavaScript? : let arr = [1,2,3,4];
*/
