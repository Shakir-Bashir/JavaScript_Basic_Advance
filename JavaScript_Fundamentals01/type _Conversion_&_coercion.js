// in JS there is Type conversion and type coercion
//1) Type conversion is when we manually convert from one type to another
//2) Type coercion is when JS automatically converts types behind the scenes

const { type } = require("os");

const inputYear = "1918";
console.log(inputYear + 10); // it will return the 191810

const inputYear1 = "1918";
console.log(Number(inputYear)); //we are logging the converted version it will not change the actual (inputYear1) so in order to do that we need to store the resulted value or we can use it directly like that
// Both will give us the same result
console.log(Number(inputYear) + 10);
const converted = Number(inputYear);
console.log(converted + 10); // Now it will give us 1928

/* Now if want to convert the type string into the number it will return (NaN)*/
console.log(Number("shakir")); // Nan
console.log(typeof NaN); // number

/* we can also convert type numbers into type strings */
const anyNumber = 12;
console.log(typeof 12); // typeof will be number
const convertedIntoString = String(12);
console.log(typeof convertedIntoString); //  typeof will be string
/*it will give us 12 but if we check the type of that it would be the type of string*/

// Type Coercion
/* whenever there is a operation between string and number the number will get converted into the type string with the help of type of type coercion and also the template literals will also do the same*/
const age = 23;
const myName = `I am  + ${23} +  years old `;

console.log(typeof myName, typeof age); //type of age will be first number and the type of myName will be  string

console.log("23" - "10" - 5); // result will be 8 becoz it works the opposite way of the + operator

let n = "1" + 1;
n = n - 1;
console.log(n); //Guess the result ?
