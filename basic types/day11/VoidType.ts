//  The void type denotes the absence of having any type at all. It is a little like the opposite of the any type.
// Typically, we use the void type as the return type of functions that do not return a value.
function myFunction(str: string): void {
  console.log(str);
}

// by doing this we can gain the following benefits:
// 1. Improve clarity of the code: we do not have to read the whole function body to see if it returns anything.
// 2. Ensure type-safe: we will never assign the function with the void return type to a variable.

// if we use the void type for a variable, we can only assign undefined to that variable
let useless: void = undefined;
// useless = 1; // error
