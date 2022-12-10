// type annotations on variable
let hello: string = "hello world";

// arrays
let numberArray: number[] = [1, 2, 3, 4, 5, 6, 7];
let secondNumberArray: Array<number> = [5, 10, 15, 20];
let stringArray: string[] = ["abc", "def", "ghi"];

// any >>> can use whenever we don’t want a particular value to cause typechecking errors.
let obj: any = { x: 0 };

obj.foo();
obj.x;
obj;

// parameter type annotaion >>> to declare what types of parameters the function accepts
function greet(name: string) {
  console.log(`hello ${name.toUpperCase()}!!`);
}

greet("typescript");

// return type annotations >>> appear after the parameter list and usually don't require because TypeScript will infer the function’s return type
// based on its return statements
function getFavouriteColor(): string {
  return "red";
}

getFavouriteColor();

// anonymous function >>>  When a function appears in a place where TypeScript can determine how it’s going to be called,
//  the parameters of that function are automatically given types.

const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function
names.forEach(function (s) {
  // console.log(s.toUppercase());
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
  // console.log(s.toUppercase());
});
