"use strict";

const { log } = require("console");

// Methods are simply functions  that we can call on objects

let arr = ["a", "b", "c", "d", "e"];

// slice method we can extract part of any array but without changing the original array
// it returns the new array and we need to  store it or we can simply log it to the console
// it takes all the elements from the index 2 all way to the end
console.log(arr.slice(2)); //[ 'c', 'd', 'e' ]
// it will extract all from the index 1 to 4 but the 4 is not included
console.log(arr.slice(1, 4)); //[ 'b', 'c', 'd' ]

// Splice
// it works the same like the slice method but it changes the original array

// Reverse
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse()); //Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

// Concat
//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const letters = arr.concat(arr2);

// At Method
const arr3 = [23, 15, 48];
console.log(arr.at(0));
// it works the same like that
console.log(arr[0]);

// For Each

const movements = [200, 450, -400, 3000, -650, -350, 70, 1300];
/* forEach is a higher oreder function that accepts  cb function and it iterates over the arr and in each iteration it calls the cb function and passes the current element to the cb function but not only the current element but also the index of that element and the whole array */
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`You deposited ${(movement, index, array)}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

// MAP FILTER REDUCE
// Map method also loops through the array but with the difference that map creates a brand new array
const eurToUsd = 1.1;
// here we have to store the returned array as we now that the map method returns the new array

const movementsUSD = movements.map((mov) => mov * eurToUsd);
console.log(movementsUSD);

//  Filter method is used to filter for elements in the original array which satisfy a certain condition Returns a new array  containig the elements that passed a specified test condition
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const withdrawls = movements.filter((mov) => mov < 0);
console.log(withdrawls);

// Reduce  method reduces all the array elements to one single value e.g adding all the elements together
const balance = movements.reduce(function (acc, cur, i, arr) {
  return acc + cur;
}, 0);

console.log(balance);
