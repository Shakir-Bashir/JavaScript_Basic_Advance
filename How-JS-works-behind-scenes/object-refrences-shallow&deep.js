const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 24,
}; // The object will be stored in the heap inside tha JS engine and the callStack will hold a reference  to the memory address at which the object  is stored in the heap;

/* Here we are copying the reference as the objects are stored in the heap and in the call stack it got the reference to that object so here we are copying the reference of that object  */
const marriedJessica = jessica;
/*so here when we changed the lastName we are changing that in the actual object be we are simply copying the reference */
marriedJessica.lastName = "Davis";

console.log("Before:", jessica); //Before: { firstName: 'Jessica', lastName: 'Davis', age: 24 }
console.log("After:", marriedJessica); //After: { firstName: 'Jessica', lastName: 'Davis', age: 24 }

const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 24,
  family: ["Sam", "Bob"],
};

const jessica2Copy = {
  ...jessica2,
}; /*  Here we are creating a new object and copying all the key value pairs it creates another copy in a heap and the jessica2Copy will hold the reference in the callstack */
jessica2.lastName = "Davis";

console.log(jessica2, jessica2Copy);
/* 
{
  firstName: 'Jessica',
  lastName: 'Davis',
  age: 24,
  family: [ 'Sam', 'Bob' ]
} {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 24,
  family: [ 'Sam', 'Bob' ]
}
*/

// Now with this there is a issue see if we do another thing with it

const jessica3 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 24,
  family: ["Sam", "Bob"],
};
// Shallow copy
const jessica3Copy = { ...jessica3 };
jessica3Copy.family.push("Roy");

console.log("Before:", jessica3);
console.log("After:", jessica3Copy);
// see the both of them get the Roy which is strange
/*Yes we created a brand new  copy   it copies all the properties of Jessica into the new object but the family here is actually an object Remember arrays are just special kind of objects here the jessica3 object will get placed in a heap and we know that the family array is also an object so in the heap the family object will get aloated new memory in heap and that one will get the reference so when we copy the jessica3 we are copying the primitive values and the reference of the family object so when we push the new elements to the family array in a jessica3copy we are also pushing it to the main object.*/

/* 
Before: {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 24,
  family: [ 'Sam', 'Bob', 'Roy' ]
}
After: {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 24,
  family: [ 'Sam', 'Bob', 'Roy' ]*/

// Deep Clone
const jessica4 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 24,
  family: ["Sam", "Bob"],
};

const jessicaDeepClone = structuredClone(jessica4);
jessicaDeepClone.family.push("Roy");
console.log("BeforeDeepClone:", jessica4);
console.log("AfterDeepClone:", jessicaDeepClone);
/* 
BeforeDeepClone: {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 24,
  family: [ 'Sam', 'Bob' ]
}
AfterDeepClone: {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 24,
  family: [ 'Sam', 'Bob', 'Roy' ]
}
*/
