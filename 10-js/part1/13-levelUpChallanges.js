// 1. Write a 'for' loop that loops through the array

// ["green tea","black tea", "chai", "oolong tea"] and

// stops the Loop when it finds '"chai"
// Store all teas before  'Ichai" in a new array named selectedTeas

chaiList = ["green tea", "black tea", "chai", "oolong tea"];
selectedTeas = [];
for (i = 0; i < chaiList.length; i++) {
  if (chaiList[i] != "chai") {
    selectedTeas.push(chaiList[i]);
  } else {
    break;
  }
}
console.log(selectedTeas);

//2. Write a for' loop that loops through the array

// ["London", "New York", "Paris", "Berlin"] and skips
// '"Paris" ' .
// Store the other cities in a new array named
// visitedCities .
cities = ["London", "New York", "Paris", "Berlin"];
visitedCities = [];
for (i = 0; i < cities.length; i++) {
  if (cities[i] != "Paris") {
    visitedCities.push(cities[i]);
  }
}
console.log(visitedCities);

/*
use a for-of loop to iterate through array [1,2,3,4,5]
and stop when number 4 is found . store the number before 
4 in array smallNumbers.
*/
smallNumbers = [];
numberarray = [1, 2, 3, 4, 5];
for (const num of numberarray) {
  if (num == 4) {
    break;
  }
  smallNumbers.push(num);
}
console.log(smallNumbers);

/*
use a for-of loop to iterate through the array ["chai","green tea","hearbal tea","back tea"]
and skip "hearbal tea" . store oteher in preferredTeas */
teaArray = ["chai", "green tea", "hearbal tea", "back tea"];
preferredTeas = [];
for (const tea of teaArray) {
  if (tea != "hearbal tea") {
    preferredTeas.push(tea);
  }
}
console.log(preferredTeas);

/*
use a for-in loop to loop through an object containing city populations.
stop the loop when the population of "berlin" is found and store all previous cities
populations in a new object named "cityPopulations".
*/

// other key call bind and apply=> interview

let citiesPopulations = {
  //object: key and value
  London: 8000000,
  "New York": 8400000,
  Paris: 2141000,
  Berlin: 3645000,
  Tokyo: 13929000,
};
let cityPopulations = {};
for (const city in citiesPopulations) {
  if (city == "Berlin") {
    break;
  }
  cityPopulations[city] = citiesPopulations[city];
}
console.log(cityPopulations);

/*
use a for-in loop to loop through an object containing city 
populations. skip any city with a population below 3 million and store the rest in 
a new object named "largeCities".

*/
let worldCities = {
  London: 8000000,
  "New York": 8400000,
  Paris: 2141000,
  Berlin: 36450,
  Tokyo: 13929000,
};
let largeCities = {};
for (const key in worldCities) {
  if (worldCities[key] > 3000000) {
    largeCities[key] = worldCities[key];
  }
}
console.log(largeCities);

/*
write a forEach loop that iterates through the array 
["earl grey","green tea","chai","oolong tea"].
stop the loop when "chai" is found , and sstore all previous tea types 
in an array named "availableTeas"
*/
let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaCollection.forEach((tea) => {
  if (tea != "chai") {
    availableTeas.push(tea);
  }
});
console.log(availableTeas);
/*
write a forEach loop that iterates through the array 
["London","New York","Sydney","Berlin"]
and skip "Sydney" and store the other cities  in a new array named "traveledCities"
*/
let citiesArray = ["London", "New York", "Sydney", "Berlin"];
let traveledCities = [];
citiesArray.forEach((city) => {
  if (city != "Sydney") {
    traveledCities.push(city);
  }
});
console.log(traveledCities);

/*
Wrute a "for" loop that loops through the array 
[2,5,7,9]. skip the value "7"and multiply the rest by 2
store the result in a new array named "doubleNumbers"
*/
let numbers = [2, 5, 7, 9];
let multipliedNumbers = [];
for (let key = 0; key < numbers.length; key++) {
  if (numbers[key] != 7) {
    multipliedNumbers.push(numbers[key] * 2);
  }
}
console.log(multipliedNumbers);

/*
usse a for-of loop to iterate through array 
["chai","green tea","hearbal tea","back tea"].
and stop when length of the current tea name is 
grater than 8. store the teas iterated over in an array named
"shortTeas".
*/
let teaArray = ["chai", "green tea", "hearbal tea", "back tea"];
let shortTeas = [];
for (let tea of teaArray) {
  if (tea.length > 8) {
    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);
