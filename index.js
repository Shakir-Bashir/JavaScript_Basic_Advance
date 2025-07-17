// Values and Variables

const { type } = require("os");

//1) A value is a smallest unit of infomration in Javascript;

//2) We can store them into variables and so thiis way we can use them over and over again;
// Here we are declaring the variable [this will actually create a real variable in our computer memory ]
let firstName = "Shakir";

// Now if we want to use that variable we can use that variable name;

console.log(firstName); //This will log "shakir" in the console

// Naming variables
const lastName = "padder";
// Here we use the camelCase means that whenever i have multiple words in a var. name, I write the firstword lowecase and then all the next words with upper case

// There are also other ways of naming conventions like

const first_person = "Ahsan";

// There are some hard rules in JS about how we can make variables like we can not make variables like

// let 3years = 'imran'

// Variable names can also contain letters numbers underscore(_) and dollar sign($)
let years$left = 25;

// We can not use JS reserved keywords for naming the variables like
// let new  = 14
// let function  = 14

// Variable names should be descriptive like
let myFirstJob = "Teacher";
let myCurrentJob = "programmer";

// Not like this
let myJob1 = "teacher";
let myJob2 = "programmer";

//  variable is basically a box into which we can store a vlaue.

/// DATA TYPES

// In every programming language variables can have different types. Depending on that type of data that we want them to hold.

// In JS every value is either an object or a primitive value [a value is only a primitive when it's not an object]

// Primitive Data Types

// There are seven primitive data types
// [Number string boolean undefined null symbol and big int]

// 1) Number, Floating point numbers Used for decimals and integers
let age = 23;

// 2) String, sequence of characters used for text
let name = "adil";

//3) boolean, Logical type that can only be true of false Used for taking decisions
let fullAge = true;

// 4) Undfined: value taken by a variable that is not yet defined ('empty value)
let children;

//5)Null
// 6) symbole Value that is unique and cannot be changed
//7) BigInt larger integer than the  Number type can hold

// JS has a feature called dynamic typing: We do not have to manually difine the type of the value stored in a variable insted, data types are determined automatically

let JavascriptFun = true;
console.log(JavascriptFun);

console.log(typeof JavascriptFun);
// The result of using the typeof here on value here will be a new value which is a string with the type of this value here.

let year;
console.log(year);
console.log(typeof year);

// the typeof null is object
console.log(typeof null);
