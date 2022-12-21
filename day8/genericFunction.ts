// Generics are a fundamental feature of statically-typed language
// Generics are all about relating two or more values with the same type!
// It allow developers to pass types as parameter to another type,function,or other structure
// It provide a way to make components work with any data type and not restrict to one data type
// Thus it improves code flexibiltiy, make components reusable, and removes duplication
// In typescript generics appear inside angular brackets <T> and can be read as generic of type T
// In TypeScript, generics are used when we want to describe a correspondence between two values.
// We do this by declaring a type parameter in the function signature:
//  Generics can appear in functions, types, classes and interfaces

// first let's see general syntax of generics
function identity(value) {
  return value;
}
// for the above code we can make type-safe using generics
function identityWithGeneric<T>(value: T): T {
  return value;
}

// so why generics?

function getArray(items: any[]): any[] {
  return new Array().concat(items);
}

let myNumArr = getArray([1, 2, 3]);
let myStringArr = getArray(["a", "b", "c"]);

// all works fine here but last two must throw an error
myNumArr.push(4);
myStringArr.push("d");
myNumArr.push("5");
myStringArr.push(666);

// How to resolve that issue? Answer is using generics

function getArrayGeneric<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let myNumArrGeneric = getArrayGeneric([1, 2, 3]);
let myStringArrGeneric = getArrayGeneric(["a", "b", "c"]);

// now the last two cause a compile error
myNumArrGeneric.push(4);
myStringArrGeneric.push("d");
// myNumArrGeneric.push('4');
// myStringArrGeneric.push(666);

// Multiple Type Variables
function displayType<T, U>(id: T, name: U): void {
  console.log("id is of type", typeof id, "name is of type", typeof name);
}

displayType<number, string>(111, "heelllo");

// Generic with non-generic types
function mixGeneric<T>(id: T, name: string): void {
  console.log("id is of type", typeof id, "name is of type", typeof name);
}

mixGeneric<number>(123, "what's up!");

// Methods and Properties of Generic Type
// when we create generic components typescript forces us to use only general methods which are available for type mentioned.

function methods<T>(id: T): void {
  id.toString();
  // below code throws an error
  // id.toFixed();
  console.log("type of id is", typeof id);
}

// Generic Constraints
// As we know generic allows any data type to use but we can restrict it to certain types using constraints
// A constraint is specified after the generic type in the angle brackets

class Person {
  firstname: string;
  lastname: string;
  constructor(fname: string, lname: string) {
    this.firstname = fname;
    this.lastname = lname;
  }
}

function getFullName<T extends Person>(per: T): void {
  console.log(
    "first name is",
    per.firstname,
    " and last name is",
    per.lastname
  );
}

let person1 = new Person("Steve", "Bill");
getFullName(person1);

// below code throws an error
// getFullName("person2")

// In the above example, the getFullName function is a generic function with constraints.
// The constraint <T extends Person> specifies that the generic type T must extend the class Person
// So, the Person class or any other class that extends the Person class can be set as generic type while calling the getFullName function,
// otherwise the compiler will give an error.
