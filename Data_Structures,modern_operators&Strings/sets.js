// Set  is a  collection of unique values meaning that a set can never have a duplicate value ;

// Here in that we need to pass an iterable
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risoto",
  "Pasta",
  "Pizza",
]);
/* we get only three element becoz it removes the duplicate element*/
console.log(ordersSet); // Set(3) { 'Pasta', 'Pizza', 'Risoto' }
console.log(ordersSet.size); //Number of elements are in the set
ordersSet.add("Biryani");
/* add the new element to the end of the set. (we can also check weather the element exist or not & also delete the elements)*/
// we can also loop through the set becoz they are iterables
for (const item of ordersSet) console.log(item);
//Main case of sets is to remove duplicates
/* other Methods [intersecion, union, difference(gives all the elements that are present in the fist set but not in the second set),symmetricdifference (gives us all the elemets that are present in either set but no in both), isDisJoint ]*/

/*MAPS / a map is a data structure  that we can use map values to keys(meaning we can store key value pairs but the difference is that in the sets the key will be anythin and in objects the keys are basically always string)*/

const rest = new Map();
rest.set("name", "Spicy Ocean");
console.log(rest.set(1, "kashmir srinagar"));
/* when we add properties to map like this it returns the map (Map(2) { 'name' => 'Spicy Ocean', 1 => 'kashmir srinagar' }) */
// as we now it returns the new set so we can chain and call set again & again..........

// Now in order to retrive data from the map we use the get method;

console.log(rest.get("name")); // we need to pass the name of the key
/* Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.*/
