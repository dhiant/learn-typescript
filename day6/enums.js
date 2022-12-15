// ### enums or enumerated types >>> data structures of constant length that hold a set of constant values
// they are ususally used to represent a determined number of options for a given value.
// 1. Numeric enums  >> where enum members have numeric values
var Direction;
(function (Direction) {
    Direction[Direction["east"] = 1] = "east";
    Direction[Direction["west"] = 2] = "west";
    Direction[Direction["north"] = 3] = "north";
    Direction[Direction["south"] = 4] = "south";
})(Direction || (Direction = {}));
// no value assigned except for east as compiler auto assign to rest of the enum members. In fact it is not compulsory to
// assign a value , tsc compiler by default assigns numbers to enum members.
// 2. String enums >> where enum members initialize with string literal
var Direction2;
(function (Direction2) {
    Direction2["up"] = "u";
    Direction2["down"] = "d";
    Direction2["left"] = "l";
    Direction2["right"] = "r";
})(Direction2 || (Direction2 = {}));
// Using enums
var direction = Direction.north;
// bi-direction enum members
// Upon TypeScript compilation, enums are translated into JavaScript objects.
// One of the features of enums that differentiate them from objects is bi-directional referencing for enum members.
var CardinalDirection;
(function (CardinalDirection) {
    CardinalDirection[CardinalDirection["North"] = 1] = "North";
    CardinalDirection[CardinalDirection["East"] = 2] = "East";
    CardinalDirection[CardinalDirection["South"] = 3] = "South";
    CardinalDirection[CardinalDirection["West"] = 4] = "West";
})(CardinalDirection || (CardinalDirection = {}));
console.log(CardinalDirection.North);
console.log(CardinalDirection[1]);
// This will show both of the sets of key/value pairs that create the bi-directionality effect.
console.log(CardinalDirection);
// ### extracting the object type of enums
// for the above defined CardinalDirection enum
// missing of typeof operator throws an error
var testObject = {
    North: CardinalDirection.North,
    East: CardinalDirection.East,
    South: CardinalDirection.South,
    West: CardinalDirection.West
};
