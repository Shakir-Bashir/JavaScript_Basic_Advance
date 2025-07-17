/*How this works is this operator will return true or false value so a boolean value */

const age = 18;
if (age === 18) console.log(`you just became an adult`); // Here we are using the strict operator meaning it will not do type coercion

if (age == "18") console.log("you just became an adult "); // Here it did the type coercion it will convert the type string 18 into a type number 18

/* we should always use the === becoz it prevents from bugs that are hard to find becoz it will prevent type coercion
and if need to convert the type while getting the data from the user we should manually do the type conversion so to prevnt 
bugs*/

if (age !== 18) console.log("you are not 18");
// Here if the  age is not equal to 18 then it gives true  & if the age is 18 which is in our case so it will log nothing becoz it doesn't have an else block

//////////////Boolean Logic////////////////
//The AND operator
// it returns true only in case both A and B are true
// OR  operator
// it will be true if only one will be true
// NOT operator The not operator acts on only one Boolean value and it basically just inverts it[ so if A is true it will  convert it into false ]

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}
/* The else block will get executed becoz the (shouldDrive) variable is false becoz in the AND operator (true and false will give us false)*/
