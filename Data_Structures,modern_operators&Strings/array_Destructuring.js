"use strict";

const { log } = require("console");

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firezen, Italy",
  categories: ["italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenue: ["focaccia", "Bruscheeta", "GarlicBread", "Caprese Salad"],
  mainMenue: ["pizza", "pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenue[starterIndex], this.mainMenue[mainIndex]];
  },
};

const arr = [2, 3, 4];
/*Here we are taking the values out of the array by using destructuring*/
/* Here the value of a  will be 2 and b = 3 and c = 4*/
const [a, b, c] = arr;
console.log(a, b, c);

/*Here we are doing the same thing we are taking out first two elements of array from the categories array*/
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

/* here we are switching the two values by desrructuring */
[main, secondary] = [secondary, main];
console.log(main, secondary);

/* Here we are returning the array from a function and then simply we take that values out */
const [starter, mainCoures] = restaurant.order(2, 0);
console.log(starter, mainCoures);
/* we can also do this that way but firstly we need to store the returned value and then take values out from that*/
const returnedArray = restaurant.order(2, 0);
console.log(returnedArray, returnedArray[0], returnedArray[1]);

// Nested arrays
const nested = [2, 4, 8, [8, 9, 6]];
const [first, , , second] = nested;
console.log(first, second);
/* here we are taking the first element and the whole nested array and we don't want the second and third so we comma to skip these*/
/*Now if we want to destructure the inner array we can do that this way*/
const [q, , , [j, k]] = nested;
console.log(q, j, k); // 2 8 9

//Default values
const [r, s, t] = [1, 2];
console.log(r, s, t); // if we do that like this way we will get third value undefined but we can handle it by using default values
const [l = 1, m = 1, n = 1] = [1, 2];
console.log(l, m, n); //1 2 1 /* in this console log we get 1 2 1  it checks if it gets the value then it uses that value if not then it will get the default value*/

// Unpacking all the array elements at once

const arr1 = [7, 8, 9];
const newArray = [
  1,
  2,
  3,
  ...arr1,
]; /* we created a new array and put 123 and the elements of arr1.*/
console.log(newArray);
/* it is basically used when we want the elements individually */
console.log(arr1); //[ 7, 8, 9 ] here we are getting the array as a result
console.log(...arr1); // 7 8 9 // but here we get the array elements individually..

/* spread works on all iterables [arrays maps sets ] */

// we can use it to make shallow copies
const copiedArra1 = [...arr1];
console.log(copiedArra1); //[ 7, 8, 9 ]

// REST PATTERN
// collects multiple elements and condense them into an new array
// it is used to pack the elements

const arr2 = [1, 2, 3, 4, 5, 6];
// here we say that the first value will get stored in the aa and second in the bb and the remaning will be stored in an array named others
const [aa, bb, ...others] = arr2;
console.log(aa, bb, others); // 1 2 [ 3, 4, 5, 6 ]
// it works same with objects..
