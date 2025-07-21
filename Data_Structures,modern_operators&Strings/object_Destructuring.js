"use strict";

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

// To destructure objects we use curlyBraces
const { resName, openingHours, categories } = restaurant;
console.log(resName, openingHours, categories);
/* 
Classico Italiano {
  thu: { open: 12, close: 22 },
  fri: { open: 11, close: 23 },
  sat: { open: 0, close: 24 }
} [ 'italian', 'Pizzeria', 'Vegetarian', 'Organic' ]
*/

/*Here we are changing the name of the properties and also providing the default values */
const {
  resName: restaurantName = [],
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, categories); // we will get the same output

// Nested objects

const { fri } = restaurant.openingHours;
console.log(fri); // { open: 11, close: 23 }
const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close); // 11 23
