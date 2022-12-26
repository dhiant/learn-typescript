// When we declare a variable, we can use a type annotation to explicitly specify a type for it. For example:
var counter;
// However, if we initialize the counter variable to a number, TypeScript will infer the type the counter to be number. For example:
var newCounter = 0;
// It is equivalent to the following statement:
var anotherCounter = 0;
// Likewise, when we assign a function parameter a value, TypeScript infers the type of the parameter to the type of the default value. For example:
function setCounter(max) {
    if (max === void 0) { max = 100; }
    // ...
}
// In this example, TypeScript infers type of the max parameter to be number.
// Similarly, TypeScript infers the following return type of the increment() function as number:
function increment(counter) {
    return counter++;
}
// It is the same as:
function inc(counter) {
    return counter++;
}
// for a given array
var items = [1, 2, 3, null];
// To infer the type of items variable, TypeScript needs to consider the type of each element in the array.
// In this case, TypeScript selects the number array type (number[]) as the best common type.
// If we add a string to the items array, TypeScript will infer the type for the items as an array of numbers and strings: (number | string)[]
var newItems = [0, 1, null, "Hi"];
// When TypeScript cannot find the best common type, it returns the union array type. For example:
var arr = [new Date(), new RegExp("d+")];
// In this example, TypeScript infers the type for arr to be (RegExp | Date)[].
// Contextual Typing >>> the ability of the type system to infer the type of a value based on its context.
// Contextual typing occurs when the type of an expression is implied by its location
// This can be useful in a variety of situations, such as when the type of a value is not explicitly specified
// or when the type of a value cannot be determined at compile time.
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.button);
    console.log(mouseEvent.kangaroo);
    // Property 'kangaroo' does not exist on type 'MouseEvent'.
};
function getString(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return "Not a string";
    }
}
var resultString = getString("hello");
// In this example, the type of the value parameter is not explicitly specified.
// However, because the typeof operator is used to check the type of value,
//  the type system is able to infer that value is a string within the if block.
// As a result, the toUpperCase method can be called on value without generating a type error.
// Contextual Typing is  used in arguments to function calls, right hand sides of assignments, type assertions,
// members of object and array literals, and return statements
