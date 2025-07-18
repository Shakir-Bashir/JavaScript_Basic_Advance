// STRINGS AND TEMPLATE LITERALS

const firstName = "Shakir";
const job = "Teacher";
const lastName = "Ahmad";
const birthYear = 2007;
const year = 2028;

const shakir = `I am ${firstName} a ${year - birthYear} years old ${job}`;
console.log(shakir);

// if we use quotes then we need that backslash and n to go to the new line
console.log(
  "String with \n\
    multiple \n\
    lines"
);
// but it is easy using template strings[it is lot more cleaner than using the normal qoutes]
console.log(`String
    with 
    multiple
    lines`);
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//TAKING DECISIONS USING IF ELSE STATEMENTS
const age = 19;
const isOldEnough = age >= 18;
// Here isOldEnough is true becoz the age is > than 18

// in between parenthesis there goes a condition that is evaluated and if this  condition turns out to be true  then the code in the curlyBraces block will get executed

// in there it will check if the isOldEnough is equal to true yes it true then it will execute the code that is inside in curlyBraces and it will log to console that Sahil can start driving. Otherwise it will execute the else block
if (isOldEnough) {
  console.log(`Sahil can start driving`);
} else {
  // This else block will get executed whenever the condition here is false
  console.log(`Sahil can not drive he need to wait for  ${18 - age} years`);
}

/*This worked firstly initalize a var named birthYear1 and store the some value  and after that I created anothe var with the let keyword so we can change it later and after that we use if else controller and check that if the birthYear1 <= 2000 which will return true or false and if it returns true the code in the curly braces will get execute and if it returns false the code in the else block will get executed and after that we console log the variable initalized with let*/ // BONUS we initalized century outside becoz the let is block scooped means we can't access it outside the culyBraces

const birthYear1 = 1999;

let century;
if (birthYear1 <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
