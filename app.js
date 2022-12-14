// type annotations on variable
var hello = "hello world";
// arrays
var numberArray = [1, 2, 3, 4, 5, 6, 7];
var secondNumberArray = [5, 10, 15, 20];
var stringArray = ["abc", "def", "ghi"];
// any >>> can use whenever we don’t want a particular value to cause typechecking errors.
var obj = { x: 0 };
obj.foo();
obj.x;
obj;
// parameter type annotaion >>> to declare what types of parameters the function accepts
function greet(name) {
    console.log("hello ".concat(name.toUpperCase(), "!!"));
}
greet("typescript");
// return type annotations >>> appear after the parameter list and usually don't require because TypeScript will infer the function’s return type
// based on its return statements
function getFavouriteColor() {
    return "red";
}
getFavouriteColor();
// anonymous function >>>  When a function appears in a place where TypeScript can determine how it’s going to be called,
//  the parameters of that function are automatically given types.
var names = ["Alice", "Bob", "Eve"];
// Contextual typing for function
names.forEach(function (s) {
    // console.log(s.toUppercase());
});
// Contextual typing also applies to arrow functions
names.forEach(function (s) {
    // console.log(s.toUppercase());
});
// object types
// 1. passing an point-like object to a function
function getCarModel(latest) {
    console.log("the latest model of lamborghini is ".concat(latest.lamborghini, " and bugati is ").concat(latest.bugati));
}
getCarModel({
    lamborghini: "Aventador LP 780-4",
    bugati: "CHIRON Super Sport"
});
// 2. using the question mark(?) symbol we can specify the some or all of their properties are optional
function getEVCarModel(latest) {
    var _a;
    console.log("the latest Tesla model S is ".concat(latest.model_S));
    // use optional chaining operator to check if property exists in object
    console.log("the latest Tesla model S is ".concat(latest.model_S, " and Volvo is ").concat((_a = latest.Volvo) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()));
}
getEVCarModel({ model_S: "Model S Plaid" });
getEVCarModel({ model_S: "Model S Plaid", Volvo: "Volvo XC40" });
// ### Union types >>> build new types using existing ones using a variety of operators
function printId(id) {
    console.log("".concat(id.toLocaleString()));
    console.log("id can be either of string or number and value is ".concat(id));
}
// both are valid
printId(111);
printId("222");
function getArea(a) {
    return a.x * a.y;
}
getArea({ x: 4, y: 5 });
function getVolume(v) {
    return v.x * v.y * v.z;
}
getVolume({ x: 2, y: 4, z: 6 });
// ### type assertions >>> is a technique that informs the compiler about the type of a variable.
// 1. we can use "type assertions" to specify a more specific type
// 2. When we want to change a variable from one type to another such as any to number etc.
// 1.
var myCanvas = document.getElementById("my_canvas");
// 2.
var num = 45;
var num1 = num;
console.log("value of num1 is", num1);
// ### Literal types >>> allows for narrowing down the type in exact value
// string literal >> once hello is given as string literal it is now set to it and thus can't have other value
var greeting = "hello";
// this function accepts only center or right as alignment. Other values are not assignable
function getPosition(aligment) {
    return aligment;
}
// numeric literal
function getRank(rank) {
    return rank;
}
// ### Literal Inference >>> when we initialize a variable with an object, typescript assumes that the properties of that object might
// change it's value later.
var req = { url: "", method: "POST" };
// handleRequest(req.url, req.method); >>> here req.method inferred to a string which is not assignable to parameter method of type "POST"
// the correct way is to use literal inference using type assertion keyword "as"
handleRequest(req.url, req.method);
function handleRequest(url, method) {
    // handle the request here
    return;
}
// ### null and undefined >>> null represents absent value or no value at all while undefined value means uninitialized value
// With strictNullChecks on, we need to check for null or undefined values before using any methods or properties on that value
function checkNullishValue(x) {
    if (x === null) {
        // do something
    }
    else {
        // now any methods and properties can be used on that value
        console.log("x value after lowercase", x.toLocaleLowerCase());
    }
}
// ### No-null Assertion Operator(Postfix ! ) >>> The post-fix expression operator ! can be used to assert that its operand
// cannot be null or undefined during runtime.
// Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined:
// This operator can be used where the compiler is unable to check that a variable cannot be null/undefined.
function splitInHalf(str) {
    if (str === null || str === undefined) {
        str = "test";
    }
    return str.substring(0, str.length / 2);
}
splitInHalf("hello");
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
