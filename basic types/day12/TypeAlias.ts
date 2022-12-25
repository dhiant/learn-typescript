// Type aliases allow us to create a new name for an existing type. The following shows the syntax of the type alias
// type alias = existingType;
// The existing type can be any valid TypeScript type.
type chars = string;
let messsage: chars; // same as string type
// It’s useful to create type aliases for union types. For example:
type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = "Hi"; // valid
// input = false; // Compiler error
