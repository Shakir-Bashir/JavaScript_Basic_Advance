const day = "monday";

switch (day) {
  case "monday": //  if the day is monday the fist case will run
    console.log("it is monday");
    break; // Break statement is used to stop the code execution
  case "tuesday":
    console.log("it is tuesday");
  default: // Default is used if no case matches
    console.log("it is not a day");
}

////STATEMENTS AND EXPRESSIONS
// expression is simply a piece of code that produces a value
const sum = 3 + 4;

//Statement are like full statements that translate our actions
if (23 > 10) {
  const str = "23 is bigger";
}

/////THE CONDITIONAL TERNARY OPERATOR
const age = 23;
age >= 18 //condition
  ? console.log("i like to drink") //if
  : console.log("i like to drink water"); //else
// it is an operator meaning it can produce value so we can store that in a variabl like

const isAdult = age >= 18 ? "adult" : "Not an adult";
console.log(isAdult);
// So here we are storing the value in a variable based on our checking
