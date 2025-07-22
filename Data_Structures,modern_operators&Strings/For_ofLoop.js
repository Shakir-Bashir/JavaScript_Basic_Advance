const namesArr = ["shakir", "hashim", "adnan", "zahid", "haroon"];

for (const friends of namesArr) console.log(friends);
/* This loop will automatically loop througout the whole array and in each iteration  it will give us access to the  current element  which we can specificy here we call it friends */

// Now what if we want current index not the current element

for (const friends of namesArr.entries()) {
  console.log(friends);
}
/* 
[ 0, 'shakir' ]
[ 1, 'hashim' ]
[ 2, 'adnan' ]
[ 3, 'zahid' ]
[ 4, 'haroon' ]
*/

const restaurant = {
  resName: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firezen, Italy",
  categories: ["italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenue: ["focaccia", "Bruscheeta", "GarlicBread", "Caprese Salad"],
  mainMenue: ["pizza", "pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenue[starterIndex], this.mainMenue[mainIndex]];
  },
};
//OPTIONAL CHAINING..
/* it works the way the property before the questionMark exists then the open property will be read from there if not then immediately undefined will be returned (it also works on the concept of nullish (meaning null & undefined)) */
console.log(restaurant.openingHours?.mon?.open);
/* Here we are checking if the openingHours & mon exists then if these two are available then it will check the open property */

// Checking Methods
console.log(restaurant.order?.(1, 2) ?? "Sorry Method not found"); //[ 'Bruscheeta', 'Risotto' ]
// here we are checking if the order exist if it exists then call it other wise return a string
// Also works on Arrays.............

// We can also use for of loop to loop through object keys & properties
console.log(Object.keys(restaurant.openingHours)); // [ 'thu', 'fri', 'sat' ]
console.log(Object.values(restaurant.openingHours));
/*
[
  { open: 12, close: 22 },
  { open: 11, close: 23 },
  { open: 0, close: 24 }
]
 */
// Entire object
const entries = Object.entries(restaurant.openingHours);
console.log(entries);
//we get the returned array and inside that we get arrays & inside that we get the objects
/* [
  [ 'thu', { open: 12, close: 22 } ],
  [ 'fri', { open: 11, close: 23 } ],
  [ 'sat', { open: 0, close: 24 } ]
]*/
// Now we can loop throuth the entries
for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}
/* Here we know that it will loop the whole array and in each iteration it will give access to the current element and we know that the current element is array so we take store the first element in a key variable & we know that the second element in that array is object so we destructure it and take value out of that easily*/
/* 
on thu we open at 12 and close at 22
on fri we open at 11 and close at 23
on sat we open at 0 and close at 24
*/
