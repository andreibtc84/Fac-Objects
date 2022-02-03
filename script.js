// Objects

// Capitalise keys
/*
Write a function capitaliseKeys, 
which takes an object as an argument, 
and returns a new object with the same key-value pairs except 
all the keys have been capitalised.
*/

const capitaliseKeys = (obj) => {
  let capsKeys = Object.entries(obj).map(([k, v]) => [k[0].toUpperCase(), v]);
  return Object.fromEntries(capsKeys);
};

// Test
// console.log(capitaliseKeys({ a: 1, b: 2, c: 3 }));
// ======================================================

// String to object
/*
Write a function stringToObjectstringToObject takes one parameter, a string. 
The string is made up of key-value pairs formatted as follows: “key1:value1,key2:value2,…”
stringToObject should return an object made up of the key-value pairs in the string. 
Assume all values are strings.
*/

const stringToObject = (str) => {
  return str
    .split(",")
    .map((el) => el.split(":"))
    .reduce((prev, curr) => {
      prev[curr[0]] = curr[1];
      return prev;
    }, {});
};

// Test
// console.log(stringToObject("a:1,b:2,c:3"));
// console.log(stringToObject("one:-1,two:hi there,three:what's that?"));
// ======================================================

// Going shopping
/*
Write a function shoppingList that accepts a single parameter, a string. 
The string is a list of ingredients, separated by a comma, formatted as below:

“2 tomatoes, 1 egg, 3 pumpkins”

The function shoppingList should return an object where the keys are 
the ingredient names, and the values are the number of the ingredients needed.
*/

const shoppingList = (str) => {
  return str.length === 0
    ? {}
    : str
        .split(",")
        .map((el) => el.trim().split(" ").reverse())
        .reduce((prev, curr) => {
          prev[curr[0]] = curr[1];
          return prev;
        }, {});
};

// Tests:
// console.log(shoppingList("2 tomatoes, 1 egg, 3 pumpkins"));
// console.log(shoppingList(""));
// console.log(shoppingList("2 tomatoes, 1 egg, 0 pumpkins"));
// ======================================================

// Map Object

/*
Write a function mapObject that takes two parameters: an object obj and a function fn.

mapObject should return a new object whose keys are the same as those of obj, 
and whose values are the result of calling fn with the values of obj.
*/

const mapObject = (obj, fn) => {
  let keys = Object.keys(obj);
  let values = keys.map((key) => fn(obj[key]));
  let newObj = {};

  keys.map((key, i) => {
    newObj[key] = values[i];
  });

  return newObj;
};

// Tests:

// console.log(mapObject({ a: 1, b: 2 }, (n) => n + 2));
// console.log(
//   mapObject(
//     { greeting: "hi there, ", goodbye: "see you later, " },
//     (s) => s + "Yvonne"
//   )
// );
// ======================================================
