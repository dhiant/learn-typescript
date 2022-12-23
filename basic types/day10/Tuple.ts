// A tuple works like an array with some additional considerations
// 1. The number of elements in the tuple is fixed.
// 2. The types of elements are known, and need not be the same.

let skill: [string, number];
skill = ["Programming", 5];

// The order of values in a tuple is important.
// If we change the order of values of the skill tuple to [5, "Programming"], we'll get an error:

// For this reason, it’s a good practice to use tuples with data that is related to each other in a specific order.
// For example, we can use a tuple to define an RGB color that always comes in a three-number pattern:
let color: [number, number, number] = [255, 0, 0];

// a tuple can have optional elements specified using the question mark (?) postfix.
let bgColor: number[], headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
