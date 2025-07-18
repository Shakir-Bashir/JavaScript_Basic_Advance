"use strict";

/* A function is a piece of code that we can reuse over and over again in our code. */

// Here we created the logger function which simply does the console log the string
function logger() {
  console.log("My name is Shakir");
}

// Here we are invoking the function or running the function  or calling the function
logger();
logger();

/*Here we are making the function that takes 2 parameters and in there we created the variable name juice and then returned the variable from that function */

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
/* We are invoking the fruitProcessor function here with the 2 parameters that will get passed into the fruitProcessor function and get assigned to the parameters*/
//The result of running the function here is the juice that we just returned
// Once the function is executed the code here will get replaced by the result of the function
//So if we want to use that value that was returned  we need to store it in a variable
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
/* Here we simply invoked the fruitProcessorFunction with two arguments that are the actual value of the parameters and when the function is running here the apples will be  5 and the oranges will be 0 then we use these values to build a string  named juice and after that returned that value from the function. Then we need to store that value anywher so we store it in the appleJuice variable and then console logged the appleJuice variable which will give us the string (juice with 5 apples and 0 oranges) */

/* We can reuse it and pass different arguments every time we call it like*/
const appleOrangeJuice = fruitProcessor(2, 5);
console.log(appleOrangeJuice);

/* it is not necessary that every function should return something */
function nameLogger() {
  console.log("Shakir");
}
const firstName = nameLogger();
/*it will simply log the name to the console & return (undefined) that we don't need to  capture 
1) the logger will return undefined so when we chech the type it will show undefined and the fruitProcessorFunction return a value juice in which we stored the string so when we check type of that it will show typeOf string*/

console.log(typeof firstName); // undefined
console.log(typeof appleJuice); // string
// [These functions are called the Function Declerations]

////////////FUNCTION EXPRESSION ///////////////////////////////

const calcAge = function (birthYear) {
  return 2025 - birthYear;
}; // This is a expression and expressions produces a value and that is why we need to store that value anywhere to use it later [in JS functions are just values like string or boolean value]

console.log(calcAge(2007));

/*The main point here is that we can use function declerations before they are defined in the code */
const firstName1 = chechName("shakir");
/*Here I called the function before it is defined in our code  And after that I defined the function*/
console.log(firstName1, typeof firstName1);
function chechName(firstName) {
  if (firstName === "shakir") {
    return firstName;
  }
}

// Now  if we  call the function expressions before it is defined in the code  we will see what will happen

/* Here we will get the (ReferenceError: Cannot access 'calculateAge' before initialization) meaning we are trying to invoke the function before its initialization */

// const personAge = calculateAge(18);
// console.log(personAge);

const calculateAge = function (age) {
  if (age >= 18) {
    return age;
  }
};

//ARROW FUNCTION
const calcAge1 = (birthYear) => 2037 - birthYear;
console.log(calcAge(2007));

//////FUNCTIONS CALLING OTHER FUNCTIONS /////////////////

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `juice with ${applePieces} applesPieces and ${orangePieces} orangesPieces`;
  return juice;
}

console.log(fruitProcessor(2, 3)); // juice with 8 applePieces and 12 orangePieces
/* How it works when we call the fruitProcessor function with two arguments (2 & 3 ) then the apples and oranges parameters got replaced with these value and after that it will call the cutFruitPieces function with apples that is 2 and return the value that is fruit * 4 that is(2*4)and then store it in the applePieces variable and same for the second one and after that we made string out of these values*/
