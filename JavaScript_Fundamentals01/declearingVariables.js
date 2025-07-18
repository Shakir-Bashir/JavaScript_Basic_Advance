// So we can use let keyword to make variables that can change later so basically during execution of our program
// We assign a new value to the age variable or we can say that we mutate that variable
let age = 30;
console.log(age);
age = 31;
console.log(age);

// We use const keyword to declare variable that are not supposed to change
const firstName = "shakir";
// firstName = "ahsan";
// it will not show error here but when we run it it will throw the typeError [ Assignment to constant variable.]

// we can not make empty variables with const like
// const birthYear;
//it throws the error that {declarations must be initialized.}

// Another way to declare variable is using the var keyword
// Here it work same like let but Var is function-scooped and let is block-scooped
var lastName = "ahmad";
lastName = "dar";
