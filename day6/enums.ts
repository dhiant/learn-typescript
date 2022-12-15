// ### enums or enumerated types >>> data structures of constant length that hold a set of constant values
// they are ususally used to represent a determined number of options for a given value.

// 1. Numeric enums  >> where enum members have numeric values
enum Direction {
  east = 1,
  west,
  north,
  south,
}

// no value assigned except for east as compiler auto assign to rest of the enum members. In fact it is not compulsory to
// assign a value , tsc compiler by default assigns numbers to enum members.

// 2. String enums >> where enum members initialize with string literal
enum Direction2 {
  up = "u",
  down = "d",
  left = "l",
  right = "r",
}

// Using enums
const direction: Direction = Direction.north;

// bi-direction enum members
// Upon TypeScript compilation, enums are translated into JavaScript objects.
// One of the features of enums that differentiate them from objects is bi-directional referencing for enum members.

enum CardinalDirection {
  North = 1,
  East,
  South,
  West,
}

console.log(CardinalDirection.North);
console.log(CardinalDirection[1]);
// This will show both of the sets of key/value pairs that create the bi-directionality effect.
console.log(CardinalDirection);

// ### extracting the object type of enums
// for the above defined CardinalDirection enum
// missing of typeof operator throws an error
const testObject: typeof CardinalDirection = {
  North: CardinalDirection.North,
  East: CardinalDirection.East,
  South: CardinalDirection.South,
  West: CardinalDirection.West,
};
