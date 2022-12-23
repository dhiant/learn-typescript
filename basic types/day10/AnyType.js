// Sometimes, we may need to store a value in a variable. But we don’t know its type at the time of writing the program.
//  And the unknown value may come from a third party API or user input.
// In this case, we want to opt-out of the type checking and allow the value to pass through the compile-time check.
// To do so, we use the any type. The any type allows us to assign a value of any type to a variable.
// It instructs the compiler to skip type checking.
// If we declare a variable without specifying a type, TypeScript assumes that we use the any type. This feature is called type inference.
//  Basically, TypeScript guesses the type of the variable.
var result;
// In this above example, TypeScript infers the type for us. This practice is called implicit typing.
// TypeScript any vs. object
// If we declare a variable with the object type, you can also assign it any value.
// However, we cannot call a method on it even the method actually exists
var finalResult;
finalResult = 10.123;
console.log(finalResult.toFixed());
result.willExist(); //
// In this example, the TypeScript compiler doesn’t issue any warning even the willExist() method doesn’t exist at compile time because the willExist() method might available at runtime.
// However, if we change the type of the result variable to object, the TypeScript compiler will issue an error:
var outcome;
// number is not assignable to object type
// outcome = 10.123;
// tofixed does not exist on object type
// outcome.toFixed();
