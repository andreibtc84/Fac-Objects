// Objects
// Capitalise keys

const capitaliseKeys = (obj) => {
  let capsKeys = Object.entries(obj).map(([k, v]) => [k[0].toUpperCase(), v]);
  return Object.fromEntries(capsKeys);
};

// Test
// console.log(capitaliseKeys({ a: 1, b: 2, c: 3 }));
