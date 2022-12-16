// ### function type expression
// a function that accepts function as a parameter
function myFunction(fn) {
    fn("this is callback function");
}
// a callback function
function callbackFunction(s) {
    console.log(s);
}
// finally call a function
myFunction(callbackFunction);
function doSomething(fn) {
    console.log(fn.description + "returned" + fn(10));
}
function fn(obj) {
    return new obj("hello");
}
