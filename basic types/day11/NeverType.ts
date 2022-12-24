// The never type contains no value.
// The never type represents the return type of a function that always throws an error or a function that contains an indefinite loop.
function raiseError(message: string): never {
  throw new Error(message);
}

// The return type of the following function is inferred to the never type:
function reject() {
  return raiseError("Rejected");
}

// In this example, the type of the return type of the forever() function is never.
let loop = function forever() {
  while (true) {
    console.log("Hello");
  }
};

// without the never type, the following function causes an error because not all code paths return a value.
function fn(a: string | number): boolean {
  if (typeof a === "string") {
    return true;
  } else if (typeof a === "number") {
    return false;
  }
}

// To make the code valid, you can return a function whose return type is the never type.
function fn(a: string | number): boolean {
  if (typeof a === "string") {
    return true;
  } else if (typeof a === "number") {
    return false;
  }
  // make the function valid
  return neverOccur();
}

let neverOccur = () => {
  throw new Error("Never!");
};
