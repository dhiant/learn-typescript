// A union type describes a value that can be one of several types, not just two.
// For example number | string | boolean is the type of a value that can be a number, a string, or a boolean
var number;
number = 10; // OK
number = "Hi"; // also OK
// number = false; // a boolean value, not OK
// Sometimes, we will run into a function that expects a parameter that is either a number or a string.
function add(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Parameters must be numbers or strings");
}
// here if the parameters are neither numbers nor strings, the add() function throws an error.
// This code will be compiled successfully but cause an error at runtime:
add(true, false);
// To resolve this, we can use the TypeScript union type. The union type allows us to combine multiple types into one type.
function newAdd(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Parameters must be numbers or strings");
}
