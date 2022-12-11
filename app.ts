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

// object types
// 1. passing an point-like object to a function
function getCarModel(latest: { lamborghini: string; bugati: string }) {
  console.log(
    `the latest model of lamborghini is ${latest.lamborghini} and bugati is ${latest.bugati}`
  );
}

getCarModel({
  lamborghini: "Aventador LP 780-4",
  bugati: "CHIRON Super Sport",
});

// 2. using the question mark(?) symbol we can specify the some or all of their properties are optional
function getEVCarModel(latest: { model_S: string; Volvo?: string }) {
  console.log(`the latest Tesla model S is ${latest.model_S}`);

  // use optional chaining operator to check if property exists in object
  console.log(
    `the latest Tesla model S is ${
      latest.model_S
    } and Volvo is ${latest.Volvo?.toLocaleLowerCase()}`
  );
}
getEVCarModel({ model_S: "Model S Plaid" });
getEVCarModel({ model_S: "Model S Plaid", Volvo: "Volvo XC40" });

// ### Union types >>> build new types using existing ones using a variety of operators
function printId(id: string | number) {
  console.log(`${id.toLocaleString()}`);
  console.log(`id can be either of string or number and value is ${id}`);
}

// both are valid
printId(111);
printId("222");

// while working with union types remember the method we use must be available for both of the types

// ### Type Aliases >>> create an alias for any type
type Area = {
  x: number;
  y: number;
};

function getArea(a: Area) {
  return a.x * a.y;
}
getArea({ x: 4, y: 5 });
