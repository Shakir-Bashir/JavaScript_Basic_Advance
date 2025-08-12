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


// Chaning methods
const movements1 = [200, 450, -400, 3000, -650, -350, 70, 1300];
/* what we did here is firstly we use the filter method and as we know filter returns the new array of elements that satisfy the specific condition and when it returns the new array and on that new array we applied the map method which also returns the new array and on that new returned array we applied the the reduc method by that we simply chain multiple methods on each other easily in one go... one point to remember is that after the (reduce) method we can not chain other methods because it returns the total sum not the new array so we can not  chain another method on that*/
const eurToUsd1 = 1.1;
const totalDepositsUSD  = movements1.filter(mov => mov > 0 ).map(mov => mov * eurToUsd1).reduce((acc, mov)=> acc + mov,0)
console.log(totalDepositsUSD)

// Find Method
/* find method returns the first element based on the given condition in the cb fun we have given that return the movement that is less that zero it loops through the array one element after another and when it gets the first element less than zero it returns that element and stops looping*/
const firstWithdrwal = movements1.find(mov => mov < 0);
console.log(firstWithdrwal)

// FindIndex Method (it returns the index of the element not the element)
// FindLastIndex & FindLast it works like other methods 


// some & every method

/* it works same like the includes method but includes only checks for equality check but it checks based on some condition*/
const anyDeposit = movements1.some(mov => mov > 1000)
console.log(anyDeposit)

// every only returns the true  if all the elements in the array satisfy the condition  that we pass in

console.log(movements1.every(mov => mov > 0))
/* here it returns false because all the movements  in the array are not greater than zero */


// flat and flat map methods

/*flat method is used  to flaten the nested arrays */
const arr4= [1,2,3,[4,5],6]
console.log(arr4.flat()) // we can also tell it how deep it should go  like 1 or  2  or more  according to our needs

/* flat map combines the flat and map method but it only goes one level deep so if we need to get more deeper we need to use flat to set how deep we need to go..*/

// sorting arrays
// sort method
/* sort method works based on string so to make it work properly we we pass the cb fun to the sort method the cb fun accept 2 arguments & if we return less than zero then the value a will be sorted before value b  and the opposite if we return a positive value then b will be placed before a in the sorted output array*/

//return < 0 a, b
//return > 0 b, a

movements1.sort((a,b) => {
  if(a > b)
    return 1;
  if(b > a)
    return -1;
})
console.log(movements1) //sort method mutates the original array