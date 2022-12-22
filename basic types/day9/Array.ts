// To declare an array that holds values of a specific type, you use the following syntax:
// let arrayName : arrayType[]

let subjects: string[];
let phoneNumber: number[];
let subjectScore: object[];

// for a mix type
let rank: (string | number)[];
rank = ["first", 5, "second", 4];

// after declaring we can assign values
subjects = [
  "Web tech",
  "Design and Analysis of Algorithm",
  "Simulation and Modeling",
  "System Analysis and Design",
];

// or simply declare and initialized at the same time
let series = [1, 2, 3];
console.log(series.length); // 3
//  we can use all the useful array method such as forEach(), map(), reduce(), and filter()
let doubleIt = series.map((e) => e * 2);
console.log(doubleIt);
