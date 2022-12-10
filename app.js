// type annotations on variable
var hello = "hello world";
// arrays
var numberArray = [1, 2, 3, 4, 5, 6, 7];
var secondNumberArray = [5, 10, 15, 20];
var stringArray = ["abc", "def", "ghi"];
// any >>> can use whenever we don’t want a particular value to cause typechecking errors.
var obj = { x: 0 };
obj.foo();
obj.x;
obj;
// parameter type annotaion >>> to declare what types of parameters the function accepts
function greet(name) {
    console.log("hello ".concat(name.toUpperCase(), "!!"));
}
greet("typescript");
// return type annotations >>> appear after the parameter list and usually don't require because TypeScript will infer the function’s return type
// based on its return statements
function getFavouriteColor() {
    return "red";
}
getFavouriteColor();
// anonymous function >>>  When a function appears in a place where TypeScript can determine how it’s going to be called,
//  the parameters of that function are automatically given types.
var names = ["Alice", "Bob", "Eve"];
// Contextual typing for function
names.forEach(function (s) {
    // console.log(s.toUppercase());
});
// Contextual typing also applies to arrow functions
names.forEach(function (s) {
    // console.log(s.toUppercase());
});
