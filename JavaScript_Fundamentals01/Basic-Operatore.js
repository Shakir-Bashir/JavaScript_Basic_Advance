// An operator basically allows us to transform values or combine multiple values and really do all kinds of work with values

const { log } = require("node:console");

const ageShakir = 2025 - 2007;
console.log(ageShakir);

console.log(ageShakir * 2, ageShakir / 10, 2 ** 3);
// 2 ** 3 means 2 to the powe of 3 = 2 * 2 * 2

// we can use (+) operator to concatnate these two strings also
const firstName = "shakir";
const lastName = "Ahmad";
console.log(firstName + " " + lastName);
// if we want to add space in between we can add another string with blank space
// Result shakir Ahmad

// that is another better way to do that thing using template strings
console.log(`${firstName} ${lastName}`);
// Result shakir Ahmad

// ASSIGNMENT OPERATORS
let x = 10 + 5; // 15
console.log(x);

x += 10; // x = x + 10
console.log(x); // 25

x++; // x = x +1
console.log(x); //26

x--; // x = x - 1
console.log(x); //25

// COMPARSION OPERATORS [we use comparsion operators to produce boolean values]
const ageAhsan = 10;
const ageSahil = 15;
console.log(ageAhsan > ageSahil); //false [because it compares the ageAhsan with agesahil and check if the ageAhsan is greater than agesahil which is not so it will log false] >, <, >=, <==
console.log(ageAhsan >= 18);

const now = 2028;
const ageHashim = now - 2004;
const ageFasil = now - 2000;

// Operator Precedence
console.log(now - 2000 > now - 2004); // How this works
// This greater than operator is lower precedence than  (-) operator [All math operators are executed before the comparsion operators] // Check mdn site for more details

console.log(25 - 10 - 5); // this goes from left to right

let x1, y;
x = y = 25 - 10 - 5; // 10 [becuase the subtraction has higer precedence and it goes from right to left that will (25-10) which will be 15 and then 15 - 5 which is equal to 10 and then it will get assigned to the x and y and then go from right to left first it will get assigned to y and then x] Bonus Point(Grouping has a higher precedence ())
console.log(x, y);

// const averageAge = ageHashim + ageFasil / 2;
// console.log(averageAge); // 38 which is wrong

const averageAge = (ageHashim + ageFasil) / 2; // what happens here is that fist the ages will get added because we use ()parenthesis and it has higher precedence than division
console.log(averageAge); // 26
