"use strict";

//Array is like a big container into which we can throw variables and then later refrence them.

//This is the one way to create arrays
const friends = ["shakir", "Ahsan", "Fazil"]; // literal syntax
//Second way is
const years = new Array(1912, 2024, 2015);

/* if we want to console.log or do other stuff to a particular friend we can use the []and inside that the which element we want one thing to remember is that the arrays are 0 based meaning if we want to get the shakir out of the  array we should do this  array.name[0]*/

console.log(friends[0]); //it will log to the console shakir..

console.log(friends.length); // length is a property which will count how many elements are there in the array[it counts from one not from zero] (it will log number 3 to the console)

// if we want to get last item from the array we can do that like this
console.log(friends[friends.length - 1]); //friends.length is 3 and when we subtract 1 out from 3 it will give us 2 and then friends[2] is the last element
/*suppose we don't now the array length and we need the last element of the array so we can use the same method 
array.name[array.lenth - 1] */

/*we can also add new items to the array or replace the existing ones */
console.log(friends); //[ 'shakir', 'Ahsan', 'Fazil' ]
friends[0] = "Zahid";
console.log(friends); //[ 'Zahid', 'Ahsan', 'Fazil' ]

friends[10] = "Hahim"; // I am adding the item at the position of 10 so if we calculte the length we get is 11 becoz arrarys are 0 based
console.log(friends.length);
console.log(friends);
// we can put other array into arrays and we can also put expressions into arrays

// WE CAN USE VARIOUS METHODS ON ARRAYS
const friends1 = ["adnan", "shakil", "musa"];
// push method appends new elements to the end of an array, and returns the new length of the array.
const newLength = friends1.push("Jay");
console.log(friends1, newLength);
/* I logs the whole array and also the newly added element and I am also logging the length of the new array that is returned by the push method*/

friends1.unshift("zakir"); //["zakir", "adnan", "shakil", "musa", "Jay"];
/* it adds the element to the start of the array and also returns the new length of the array*/
console.log(friends1);

//Remove elements
/* removes the last element of the array & return the removed element */
const removedFriend = friends1.pop(); // it will remove the jay which is the last element here and return it.
console.log(removedFriend);
console.log(friends1);

const removedFirstFriend = friends1.shift(); // Removes the first element from an array and returns it
console.log(removedFirstFriend); // zakir

console.log(friends1);

const checkingIndex = friends1.indexOf("shakil"); //Returns the index
console.log(checkingIndex); // 1

// There are other lot of methods that we can use on arrays .....
