// Objects

// Capitalise keys

const capitaliseKeys = (obj) => {
  let capsKeys = Object.entries(obj).map(([k, v]) => [k[0].toUpperCase(), v]);
  return Object.fromEntries(capsKeys);
};

// Test
// console.log(capitaliseKeys({ a: 1, b: 2, c: 3 }));
// ======================================================

// String to object

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

const mapObject = () => {};

console.log(mapObject({ a: 1, b: 2 }, (n) => n + 2));
console.log(
  mapObject(
    { greeting: "hi there, ", goodbye: "see you later, " },
    (s) => s + "Yvonne"
  )
);
// ======================================================
