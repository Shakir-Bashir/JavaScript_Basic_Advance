"use strict";

// Default Parameters

const bookings = [];
/* Here we set the default values but we can overide them while invoking the function & also these default values can also contain expression  */
const createBooking = function (
  flightNum,
  numPassaangers = 25 - 1,
  price = numPassaangers * 199
) {
  const booking = {
    flightNum,
    numPassaangers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH223");

//HOW PASSING ARGUMENTS WORK
const flight = "LH2234";
const shakir = {
  name: "shakir ahmadd",
  passport: 2258964,
};

const checkIn = function (fligtNumber, passenger) {
  fligtNumber = "LH111";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 2258964) {
    console.log("CheckedIn");
  } else {
    console.log("Wrong passport");
  }
};
checkIn(flight, shakir);
console.log(flight);
console.log(shakir);
/* 
CheckedIn
LH2234
{ name: 'Mr.shakir ahmadd', passport: 2258964 }
*/
/* here the flight is the primitive and when we pass it to the function it creates the copy and it didn't get changed but when we pass the shakir object and changed the passangerName we are copying the refernce of the heap so when we change something in the copied version it gets reflected in the original copy */

// FIRST CLASS & HIGHER ORDER FUNCTIONS
// JS treates functions as first-class citizens
// means that functions are simply values
// functions are just another "type" of object
const add = (a, b) => a + b;
const counter = {
  value: 23,
  add: function () {
    this.value++;
  },
};
// se can return fuctions from other functions & also we can call methods on functions...
// Higher-Order Functions
// A function that receives another function as an argumet that returns a new fuction or both

// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS
const oneWord = function (str) {
  return str.replace(/ /g, "").toLoweCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(str);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};

transformer("Js is the best!", upperFirstWord);
/* Here we created three functions in total  and every function is doing some specific work but in the transformer function i passing another function as an argument but i not calling that function on my own but the transformer is calling that fuction */

// FUNCTIONS RETURNING OTHER FUNCTIONS
const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

greet("hello")(
  "shakir"
); /* Here when we call  call the greet() it returns the another function that has name as the parameter and then we are calling another function right after calling the greet function now the question is how it gets access to the greeting becoz as we know that when we return the function the execution context got removed so how it works? the answe is (Closures)....*/

//CALL & APPLY  Method used to set the this keyword manually..
// BIND Methods returns a new fun in which this keyword is bind to the object that is calling the function..
