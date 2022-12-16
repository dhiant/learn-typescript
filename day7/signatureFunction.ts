// ### function type expression

// a function that accepts function as a parameter
function myFunction(fn: (a: string) => void) {
  fn("this is callback function");
}

// a callback function
function callbackFunction(s: string) {
  console.log(s);
}

// finally call a function
myFunction(callbackFunction);

/*Using type alias we can achieve same as

type voidFunction = (a:string) => void
function myFunction(fn:voidFunction) {
  fn("this is callback funciton")
}
function callbackFunction(s:string) {
  console.log(s)
}
myFunction(callbackFunction)

*/

// ### Call Signatures >>> describe something callable with properties in an object type.
type displayValue = {
  description: string;
  (a: number): boolean;
};

function doSomething(fn: displayValue) {
  console.log(fn.description + "returned" + fn(10));
}

// ### Construct Signatures >>> add new keyword in front of call signature to create a new object
type SomeConstructor = {
  new (s: string): {};
};
function fn(obj: SomeConstructor) {
  return new obj("hello");
}
