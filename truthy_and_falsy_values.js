/* Falsy values are the values that are not exactly false but will become false when we try to convert them  into a boolean
1) In JS there are only five falsy values*/
// Falsy value: 0, "", undefined, null, and Nan
// All these will get converted into false when we attempt to convert them into boolean.

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(10)); // True
console.log(Boolean("Shakir")); //True

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}
/*it will execute the else block becoz when it checks for the money it will attempt  to convert it into a boolen and we know that the 0 is a falsy value so it will return false so that is why it will execute the else block and this all happen in the background with the type coercion*/
