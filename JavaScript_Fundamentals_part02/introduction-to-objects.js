// Arrays can hold different types of data....
const shakir = {
  firstName: "shakir",
  lastName: "ahmad",
  age: 2025 - 2007,
  freiends: ["jay", "peter", "harry"],
};
// Here we created a object with key value pairs. with object literal syntax.
/* The big difference between arrays and objects is that in objects the order doesn't matter when we want to retrive them*/

// HOW TO RETRIEVE DATA FROM OBJECTS AND ALSO HOW TO CHANGE DATA IN OBJECTS USING THE (DOT) AND (BRACKET)NOTATION

console.log(shakir.lastName); // Here the (.dot) is an operator that goes to the object and retrieve the data
/*Here while using the bracket notation we can use any expression */
console.log(shakir["lastName"]);

const nameKey = "Name";
console.log(shakir["first" + nameKey]);
console.log(shakir["last" + nameKey]);

// HOW TO ADD NEW PROPERTIES
/*Here we are adding new properties to the shakir object using (dot & bracket) notation */
shakir.job = "teacher";
shakir["insta"] = "shakir123";

console.log(shakir);
console.log(
  `${shakir.firstName} has ${shakir.freiends.length} friends and his best friend is called ${shakir.freiends[2]}`
);

//OBJECT METHODS//

const sahil = {
  firstName: "sahil",
  lastName: "ahmad",
  birthYear: 2004,
  freiends: ["jay", "peter", "harry"],
  hasDriversLicense: true,

  //   calcAge: function (birthYear) {
  //     return 2025 - birthYear;
  //   },

  //   calcAge: function () {
  //     return 2025 - this.birthYear;
  //   },

  calcAge: function () {
    this.age = 2025 - this.birthYear; // Here we are using the this keyword to make new property on sahil object
    return this.age;
  },
};

/* This keyword is basically equal to the object on which the method is called or in other words it is equal to the object calling the method*/

// console.log(sahil.calcAge());
console.log(sahil.calcAge());
/* How it works is who is calling the method sahil so the this.birthYear  is equal to sahil.birthYear  because shail is calling the calcAge method so the this keyword represents sahil becoz sahil is calling the method*/

/////////ITERATION: THE FOR LOOP ///////
// Loops are a fundamental aspects  of every programming language becoz they allow us to automate repetitive tasks.

/* First here we created a variable Second part is a logical condition  that is evaluated before each iteration of the loop  Third part is increasing the counter*/
for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights repetition ${rep}`);
}

// LOOPING  ARRAYS using For loop

const shakir1 = ["jay", "peter", "harry", 45, 44];

for (let i = 0; i < shakir1.length; i++) {
  console.log(shakir1[i]);
}
/*Here we are looping through the array we are first initalized the variable  that is i=0 and then after that we compute the logical condition and after that in the third part we are increasing the couter or we can say increasing the i with one every time and after that console logging the array elements one after anothe*/

//WHILE LOOP
let i = 0;
while (i < shakir1.length) {
  console.log(shakir1[i]);
  i++;
}
/* it is same like the for loop but here it will run while the condition is true and we initalize the variable outside of the loop and also increase the variable after the first console log*/

let dice = Math.trunc(Math.random() * 6 + 1);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
}
/*firstly we created  a variable with let meaning that we know we will change it later and  in that I use the math.trunc and math.random methods and after that I start the while loop and it will check the condition that the dice should not equal to 6 and then it will print  the string with that number and after that we reassign the dice value another time the loop runs until the dice is equal to 6 when the dice is equal to 6 the condition fails and the loop stops*/
