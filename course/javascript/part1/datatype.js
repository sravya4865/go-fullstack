/*

8 Datatypes:

String
Number
Boolean
Bigint - for abritarary numbers that are very large

Undefined - no definition, may be in future it will get defined
null -  empty

Object

Symbol - when you want to make something unique, we use symbol.


*/


// varaible is like placeholder or bucket that we can put anything
// Java is strongly typed, but JS is not

var score = 20; // now score variable is stored in RAM. fast access
// this is old way

let score = 20; // new way of defining variables.

let name = "Sushanth";
let isLoggedIn = false;

//object
let teaTypes = ["lemon tea", "orange tea"];
let user = {firstName: "Sushanth", lastName: "kasi"};

//JS is very object oriented.

//name variables very meaningful
let getScore = score; // borrowing values from another variable

// in memory its still one values having 2 references.

console.log(getScore);
