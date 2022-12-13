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

// ### Interfaces >>> it's an another way to define an object type

interface Volume {
  x: number;
  y: number;
  z: number;
}

function getVolume(v: Volume) {
  return v.x * v.y * v.z;
}

getVolume({ x: 2, y: 4, z: 6 });

// ### type assertions >>> is a technique that informs the compiler about the type of a variable.
// 1. we can use "type assertions" to specify a more specific type
// 2. When we want to change a variable from one type to another such as any to number etc.

// 1.
const myCanvas = document.getElementById("my_canvas") as HTMLCanvasElement;

// 2.
let num: any = 45;
let num1: number = num as number;
console.log("value of num1 is", num1);

// ### Literal types >>> allows for narrowing down the type in exact value

// string literal >> once hello is given as string literal it is now set to it and thus can't have other value
let greeting: "hello" = "hello";

// this function accepts only center or right as alignment. Other values are not assignable
function getPosition(aligment: "center" | "right") {
  return aligment;
}

// numeric literal
function getRank(rank: 1) {
  return rank;
}

// ### Literal Inference >>> when we initialize a variable with an object, typescript assumes that the properties of that object might
// change it's value later.

const req = { url: "", method: "POST" };

// handleRequest(req.url, req.method); >>> here req.method inferred to a string which is not assignable to parameter method of type "POST"
// the correct way is to use literal inference using type assertion keyword "as"

handleRequest(req.url, req.method as "POST");

function handleRequest(url: string, method: string) {
  // handle the request here
  return;
}

// ### null and undefined >>> null represents absent value or no value at all while undefined value means uninitialized value

// With strictNullChecks on, we need to check for null or undefined values before using any methods or properties on that value

function checkNullishValue(x: string | null) {
  if (x === null) {
    // do something
  } else {
    // now any methods and properties can be used on that value
    console.log("x value after lowercase", x.toLocaleLowerCase());
  }
}

// ### No-null Assertion Operator(Postfix ! ) >>> The post-fix expression operator ! can be used to assert that its operand
// cannot be null or undefined during runtime.
// Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined:
// This operator can be used where the compiler is unable to check that a variable cannot be null/undefined.

function splitInHalf(str: string | null) {
  if (str === null || str === undefined) {
    str = "test";
  }
  return str!.substring(0, str!.length / 2);
}
splitInHalf("hello");
