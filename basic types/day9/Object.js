// TypeScript object type represents all values that are not in primitive types.
// declaring variable that holds an object
var employee;
employee = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    jobTitle: "Web Developer"
};
// now we can't reassign a primitive value to the employee object
// employee = "Jane"
// To explicitly specify properties of the employee object, you first use the following syntax to declare the employee object:
var otherEmployee;
// And then you assign the otherEmployee object to a literal object with the described properties:
otherEmployee = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    jobTitle: "Web Developer"
};
// Or you can combine both syntaxes in the same statement like this:
var newEmployee = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    jobTitle: "Web Developer"
};
// TypeScript has another type called Object with the letter O in uppercase. It’s important to understand the differences between them.
// The object type represents all non-primitive values while the Object type describes the functionality of all objects.
// For example, the Object type has the toString() and valueOf() methods that can be accessible by any object.
// TypeScript has another type called empty type denoted by {} , which is quite similar to the object type.
// The empty type {} describes an object that has no property on its own.
var vacant;
// But you can access all properties and methods declared on the Object type, which is available on the object via prototype chain:
var emptyObject = {};
console.log(emptyObject.toString());
