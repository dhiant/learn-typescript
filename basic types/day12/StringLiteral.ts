// The string literal types allow you to define a type that accepts only one specified string literal.
// The following defines a string literal type that accepts a literal string 'click':

let click: "click";

// The click is a string literal type that accepts only the string literal 'click'. If we assign the literal string click to the click, it will be valid:
// However, when we assign another string literal to the click, the TypeScript compiler will issue an error. For example:
// click = 'dblclick'; // compiler error

// The string literal type is useful to limit a possible string value in a variable.
let mouseEvent: "click" | "dblclick" | "mouseup" | "mousedown";
mouseEvent = "click"; // valid
mouseEvent = "dblclick"; // valid
mouseEvent = "mouseup"; // valid
mouseEvent = "mousedown"; // valid
// mouseEvent = 'mouseover'; // compiler error
