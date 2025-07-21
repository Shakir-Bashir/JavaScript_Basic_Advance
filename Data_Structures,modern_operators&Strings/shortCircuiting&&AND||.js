"use strict";

/* Logical operators can use any data type they can do shor-circuting;*/
console.log(3 || "shakir");
/* in the case of (or) operator short-circuting means if the first value is true it will immediately return the first value*/

console.log(undefined || 0 || null || "hello" || "" || 7);
/* Here it will console log the hello becoz it returns the first truthy value so first truthy value here is hello (as we know that undefined zero and null all three are falsy values so the first truthy value will become hello) */

const restaurant = {
  name: "spicy",
  location: "paris",
  order: function (dishName) {
    let readyDish;
    return (readyDish = `Your ${dishName} is ready`);
  },
};
restaurant.numGuest = 0;
/*Here both are doing the same work if resturant.numGuest exitst then return restaurant.numGuest otherwise return 15  so with the help of short-circuting we have to write little code [one thing to remember both of them will not work if the numGuest = 0 becoz 0 is a falsy value*/
const guest1 = restaurant.numGuest ? restaurant.numGuest : 15;
const guest2 = restaurant.numGuest || 15;

//AND operator
console.log(0 && "shakir");
console.log(restaurant.location && restaurant.order("pizza"));
/* how the code works is  first it checks if the restaurant.location is true if it is true it will execute another one and the check if that one is also true and after that there is nothing so it will return it */

//NULLISH COALESCING OPERATOR
// IT works on the concept of nullish values not on fasly value AND  nullish values are [null & undefined]
const guest3 = restaurant.numGuest || 15;
console.log(guest3); // it will console log zero not 15

// OR Assignment operator
restaurant.owner = restaurant.owner || "Govt";
/* Here we are creating the owner property and set it to resturant.owner OR 'Govt' now if it exist it will short-circut on the first otherwise the value of the owner will be "Govt"*/
// Now we can do that same thing without repeting the code.
restaurant.owner ||= "Govt"; // it is same like the code written on the top of that
restaurant.owner ??= "Govt";

// AND operator works same like that
restaurant.owner = restaurant.owner && "anonymous";
restaurant.owner &&= "anonymous"; // it works if the property exists and changes that to annonymous
console.log(restaurant.owner);
