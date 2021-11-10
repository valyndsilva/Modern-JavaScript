// Chapter 1: INTRODUCTION:
// Strict mode:
'use strict'; 
// 'use strict'; when declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode)
// You can use strict mode in all your programs. 
// It helps you to write cleaner code, like preventing you from using undeclared variables.
// Ex: 1
x = 3.14;       // This will cause an error because x is not declared
// Ex:2
myFunction();
function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}
// 'use strict'; when declared inside a function, it has local scope (only the code inside the function is in strict mode):
// Ex:3
x = 3.14;       // This will not cause an error.
myFunction();
function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}

// Comments:
// Single line comment.

/* 
Multi-line 
comments 
*/

// alert("Hello World!");

// console.log():
// If your browser supports debugging, you can use console.log() to display JavaScript values in the debugger window=
console.log('Hi there!'); // Prints: Hi there!

// String Concatenation and String Interpolation:
// String Concatenation: multiple strings can be concatenated together using the + operator. 
let service = 'credit card';
let month = 'May 30th'; 
let displayText = 'Your ' + service  + ' bill is due on ' +  month + '.';
console.log(displayText); // Prints: Your credit card bill is due on May 30th.

// String interpolation: process of evaluating string literals containing one or more placeholders (expressions, variables, etc).
// It can be performed using template literals: `text ${expression} text`
let age = 7;
// String concatenation
'Tommy is ' + age + ' years old.';
// String interpolation
`Tommy is ${age} years old.`;

// Template Literals:
// Template literals are strings that allow embedded expressions, ${expression}. While regular strings use single ' or double " quotes, template literals use backticks instead.
let name1 = "Codecademy";
console.log(`Hello, ${name1}`); 
// Prints: Hello, Codecademy
console.log(`Billy is ${6+8} years old.`); 
// Prints: Billy is 14 years old.

// Value And Variables: 
// Value is either Object Type or Primitive Type (Everything else)
// Variables are used whenever there’s a need to store a piece of data. A variable contains data that can be used in the program elsewhere. Using variables also ensures code re-usability since it can be used to replace the same value in multiple places.

// To declare a variable in JavaScript, any of these three keywords can be used along with a variable name:
// var is used in pre-ES6 versions of JavaScript.
// let is the preferred way to declare a variable when it can be reassigned.
// const is the preferred way to declare a variable with a constant value.

// let Keyword
// let creates a local variable in JavaScript & can be re-assigned. Initialization during the declaration of a let variable is optional. A let variable will contain undefined if nothing is assigned to it.
let count;
console.log(count); // Prints: undefined
count = 10;
console.log(count); // Prints: 10

// const Keyword
// A constant variable can be declared using the keyword const. It must have an assignment. Any attempt of re-assigning a const variable will result in JavaScript runtime error.
const numberOfColumns = 4;
numberOfColumns = 8;
// TypeError: Assignment to constant variable.

console.clear(); // clears the console

// Variables - var, let and const(ES2015/ES6). In modern JS it's best to use let and const. var is rarely used.
// Variables are used whenever there’s a need to store a piece of data. 
// A variable contains data that can be used in the program elsewhere. 
// Using variables also ensures code re-usability since it can be used to replace the same value in multiple places.
// var and let can include letters, numbers, _, $ but cannot start with a number, reserved variable names 'function' and 'name'.
// Constants are written in uppercase. Ex: let PI = 3.145;
// ** You cannot re-assign const if they are of primitive type (immutable). But if it's of reference type you can mutate the const Array but not replace it.
// Mutli-word var
const firstName = 'John'; //  Camel case (Recommended convention)
const first_name = 'Sara'; // Underscore
const FirstName = 'Tom'; // Pascal case (Recommended convention in OOP, constructor functions, ES6 classes)
let firstname; // (Not Recommended)

// Important Note: By default we should use const, unless you need to change the value, initailize, use in an iterator or loop. Using const alerts the developer that the value cannot be re-assigned.
// It can only be mutated if it's an object or an array.

// JS has dynamic typing so you don't need to manually define data types of the value stored in a variable. Instead, datatypes are determined automatically. The value holds the data type and not the variable.

// console.clear(); // clears the console

// Data Types: Primitive and Reference Data Types.

// Primitive: String, Number, Boolean, Null, Undefined, Symbols (ES6) (Stored on the stack directly in the location the variable accesses)
// Number: Floating point numbers (Used for decimals and integers)
// Strings: Sequence of Characters. (Used for text)
// Boolean: Logical primitive data type that can only be true or false. (Used for taking decisions)
// Undefined: Value taken by a variable that is not defined / empty value.
// Null: Null is a primitive data type. It represents the intentional absence of value. In code, it is represented as null. Ex: let x = null;
// Symbol (ES2015 / ES6): Value that is unique and cannot be changed.
// BigInt (ES2020): Larger integers than Number type can hold.

// Reference Data Types: Arrays, Object literals, Functions, Dates, etc. (accessed by reference. Objects that are stored on the heap. Pointer to a location in memory. ).

// Js is prototype-based-object-oriented. An array has a prototype which contains all the array methods. The array inherits all it's methods from this prototype. Ex: Array.prototype.push, Array.prototype.indexOf

// JS is a dynamically typed language. Types are associated with values not variables. The same variable can hold multiple types and we don't need to specify types.
// There are supersets of JS and addons to allow static typing (TypeScript, Flow).

// Primitive Data Types
const name4 = 'John Doe'; // String
console.log(typeof name4);
const age1 = 30; // Number
console.log(typeof age1);
const hasKids = true; // Boolean
console.log(typeof hasKids);
const car = null; // Null
console.log(typeof car);
let test; // Undefined
console.log(typeof test);
const sym = Symbol(); // Symbol
console.log(typeof sym);

// Reference Data Types
const hobbies = ['movies', 'music']; // Array
console.log(typeof hobbies);
const address = {
    // Object literal
    city: 'Boston',
    state: 'MA',
};
console.log(typeof address);
const today = new Date(); // Date
console.log(today);
console.log(typeof today);

// console.clear(); // clears the console


// Primitive vs Reference type values:
//Primitive value example:
let age = 30;
let oldAge = age;
age =31;
console.log(age); // 31
console.log(oldAge); // 30

//Reference value example:
const me = {
  name : 'Valyn',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend); // Friend {name: 'Valyn', age: 27}
console.log('Me:', me); // Me {name: 'Valyn', age: 27}

// JS ENGINE consists of 2 parts: Call Stack + Heap:
// Call Stack: stores the execution code
// Heap: Stores the variables and values

// CALL STACK                 // HEAP
// Id       Address  Value       Address  Value
// age      0001      30         D30F     { name: 'Valyn', age 30; (gets changed to 27)} 
// oldAge   0002      31         Reference to memory address in Heap
// me       0003      D30F
// Friend   0003

// Example:
//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica); // Jessica Davis 27
console.log('After marriage:' , marriedJessica); // Jessica Davis 27

// marriedJessica = {} // Uncaught TypeError: Assignment to constant variable. It is not possible to be equal to the new empty object when the object marriedJessica is a 'const' as the object will be stored in a new memory address and the reference would change as well. This is possible if marriedJessica is a let.

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

Object.assign() // This function merges 2 objects and returns a completely new object preserving the old one. This works only on the 1st level.

const  jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = 'Davis';
console.log('Before marriage: ', jessica2); // Jessica Williams 27 ['Alice', 'Bob']
console.log('After marriage:' , jessicaCopy); // Jessica Davis 27 ['Alice', 'Bob']
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Jake');
console.log('Before marriage: ', jessica2); // Jessica Williams 27 ['Alice', 'Bob', 'Mary', 'Jake']
console.log('After marriage:' , jessicaCopy); // Jessica Davis 27 ['Alice', 'Bob', 'Mary', 'Jake']
// Here the family object gets changed both places.
// For 1st level cloning Object.assign() is ok but for deep cloning we use a library like 'lodash'

// JS Engine is made of 2 parts: Call Stack and Heap. Call Stack is where all the execution calls take place and Heap is were all the objects are stored.
// Primitive types are stored in the Call Stack while Reference Types are stored in the Heap.
// Values declared with const are only mutable with reference type value. They are immutable with primitive type values.


// String .length:
// The .length property of a string returns the number of characters that make up the string.
let message = 'good nite';
console.log(message.length); // Prints: 9
console.log('howdy'.length); // Prints: 5

// OPERATORS:

// Arithmetic Operators:
// Addition
5 + 5
// Subtraction
10 - 5
// Multiplication
5 * 10
// Division
10 / 5
// Modulo
10 % 5

// Remainder / Modulo Operator:
// The remainder operator, sometimes called modulo, returns the number that remains after the right-hand number divides into the left-hand number as many times as it evenly can.
// calculates # of weeks in a year, rounds down to nearest integer
const weeksInYear = Math.floor(365/7);
// calcuates the number of days left over after 365 is divded by 7
const daysLeftOver = 365 % 7 ;
console.log("A year has " + weeksInYear + " weeks and " + daysLeftOver + " days");

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x -= 4; //x = x - 4 = 9
x *= 4; //x = x * 4 = 100
x /= 3; //x = x / 3 = 5
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Logical Operator ||
// The logical OR operator || checks two values and returns a boolean. If one or both values are truthy, it returns true. If both values are falsy, it returns false.
true || false;        // true
10 > 5 || 10 > 20;    // true
false || false;       // false
10 > 100 || 10 > 20;  // false

// Logical Operator &&
// The logical AND operator && checks two values and returns a boolean. If both values are truthy, then it returns true. If one, or both, of the values is falsy, then it returns false.
true && true;      // true
1 > 2 && 2 > 1;    // false
true && false;     // false
4 === 4 && 3 > 1;  // true

// Logical Operator !
// The logical NOT operator ! can be used to do one of the following:
// Invert a Boolean value.
// Invert the truthiness of non-Boolean values.
let lateToWork = true;
let oppositeValue = !lateToWork;
console.log(oppositeValue); 
// Prints: false

// Logical Operator Example:
const hasDriversLicense = true;
const hasGoodVision = true;
console.log(hasDriversLicense && hasGoodVision); // true
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // false

// if(hasDriversLicense && hasGoodVision){
//   console.log('Sarah is able to drive!'); 
// } else{
//   console.log('Someone else should drive...'); 
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired); // true
console.log(hasDriversLicense || hasGoodVision || isTired); // true

if(hasDriversLicense && hasGoodVision && !isTired){
  console.log('Sarah is able to drive!'); 
} else{
  console.log('Someone else should drive...'); 
}

// Ternary Operator ? :
// It accepts a condition followed by a ? operator, and then two expressions separated by a :. If the condition evaluates to truthy, the first expression is executed, otherwise, the second expression is executed.
let price = 10.5;
let day = "Monday";
day === "Monday" ? price -= 1.5 : price += 1.5;
console.log(day);
console.log(price);

// Ex 2:
const age = 28;
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

// Ternary operator allows conditionals to have template literals
console.log(`I like to drink ${age>=18 ? 'wine' : 'water'}`);

// Comparison Operators (>, <, >=, <=)
// Comparison operators are used to comparing two values and return true or false depending on the validity of the comparison
1 > 3       // false
3 > 1       // true
250 >= 250  // true
1 === 1     // true
1 === 2     // false
1 === '1'   // false

// Equality Operators: == vs === 
// == is a loose equality operator and does type coercion. Avoid using == to avoid bugs in your code. Better to convert value manually before comparison than relying on == for type coercion.
// === is a strict equality operator and does not let type coercion
'18' == 18 // true
'18' === 18 // false

// Ex 1:
const age = 18;
// const age = '18';
if (age == 18) console.log('You are an adult :D (loose)');
if (age === 18) console.log('You are an adult :D (strict)');

// Ex 2:
// prompt() function outputs the value entered as a string
const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);
if(favourite === 23) { // '23' not equal to 23 so use a Number() function at the beginning to convert.
  console.log('You entered 23');
} else if(favourite === 7) {
  console.log('You entered 7');
} else{
  console.log('Number entered is not 7 or 23');
}

// Different (Not Equal) Operator: !== 
// != is a loose version
// !== is a strict version
if(favourite !== 23) console.log('Why not 23?');

// Type Conversion:
// JS can convert to a String, Number or Boolean. It cannot convert to Undefined or Null.
const inputYear = '1991';
console.log(Number(inputYear), inputYear); // 1991 "1991"
console.log(Number(inputYear)+18); // 2009
console.log(Number('Valyn')); // NaN
console.log(typeof NaN); // number
console.log(String(23), 23); // "23" 23

// Type Coercion:
// It occurs whenever an operator is dealing with 2 values that have different types. JS converts 1 value to match the other value behind the scenes so that the operation can be executed.
console.log('I am' + 23 + ' years old.'); // I am 23 years old. Here +  triggers converting number to string.
console.log('23' - '10' - 3); // 10  Here - triggers converting strings to numbers.
console.log('23' + '10' + 3); // 23103
console.log(2 + 3 + 4 + '5'); // "95"
console.log('10' - '4' - '3' - 2 + '5'); // "15"
// Here *, / and logical operators like > triggers converting strings to numbers automatically.
console.log('23' * '2'); // 46 
console.log('23' / '2'); // 11.5
console.log('23' > '18'); // true


// Important Note: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// Operators with higher precedence become the operands of operators with lower precedence.
// multiplication has higher precedence than addition. Operations within parenthses are calculated first.

// Chapter 2: CONDITIONALS:

// if Statement:
// An if statement accepts an expression with a set of parentheses:
// If the expression evaluates to a truthy value, then the code within its code body executes.
// If the expression evaluates to a falsy value, its code body will not execute.
const isMailSent = true;
if (isMailSent) {
  console.log('Mail sent to recipient');
}

// else Statement:
// An else block can be added to an if block or series of if-else if blocks. The else block will be executed only if the if condition fails.
const isTaskCompleted = false;
if (isTaskCompleted) {
  console.log('Task completed');
} else {
  console.log('Task incomplete');
}

// else if Clause:
// After an initial if block, else if blocks can each check an additional condition. 
// An optional else block can be added after the else if block(s) to run by default if none of the conditionals evaluated to truthy.
const size = 10;
 
if (size > 100) {
  console.log('Big');
} else if (size > 20) {
  console.log('Medium');
} else if (size > 4) {
  console.log('Small');
} else {
  console.log('Tiny');
}
// Print: Small

// Truthy and Falsy statement:
// In JavaScript, values evaluate to true or false when evaluated as Booleans.
// Values that evaluate to true are known as truthy
// Values that evaluate to false are known as falsy
// Falsy values include false, 0, empty strings '', null undefined, and NaN. All other values are truthy.
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false
// Conversion to boolean is implicit. It uses type coercion in few cases: logical operators, logical statements, if a variable is defined or not.
const money = 0; // 0 here is a falsy value
// const money = 100; // 100 here is a truthy value
if (money){
  console.log("Don't spend it all ;)");
} else{
  console.log('You should get a job!'); 
}

let height; // undefined is a falsy value
let height = 0; // 0 is also a falsy value. We fix this bug using logical operators.
if(height){
  console.log('Yay!! Height is defined');
} else{
  console.log('Height is UNDEFINED');
}

// switch Statement
// The switch statements provide a means of checking an expression against multiple case clauses. If a case matches, the code inside that clause is executed.
// The case clause should finish with a break keyword. If no case matches but a default clause is included, the code inside default will be executed.
// Note: If break is omitted from the block of a case, the switch statement will continue to check against case values until a break is encountered or the flow is broken.
const food = 'salad';
switch (food) {
  case 'oyster':
    console.log('The taste of the sea 🦪');
    break;
  case 'pizza':
  case 'pie':
    console.log('A delicious meal 🍕');
    break;
  default:
    console.log('Enjoy your meal');
}// Prints: Enjoy your meal


// Chapter 3: FUNCTIONS:

// A function is a reusable set of statements to perform a task or calculate a value. Functions can be passed one or more values and can return a value at the end of their execution. In order to use a function, you must define it somewhere in the scope where you wish to call it.

// Defining the function:
function sum(num1, num2) {
  return num1 + num2;
}

// Calling functions:
// Functions can be called, or executed, elsewhere in code using parentheses following the function name. When a function is called, the code inside its function body runs. Arguments are values passed into a function when it is called.

// Calling the function:
sum(3, 6); // 9

// Function Parameters:
// Inputs to functions are known as parameters when a function is declared or defined. Parameters are used as variables inside the function body. When the function is called, these parameters will have the value of whatever is passed in as arguments. It is possible to define a function without parameters.
// The parameter is name
function sayHello(name) {
  return `Hello, ${name}!`;
}

// return Keyword:
// Functions return (pass back) values using the return keyword. return ends function execution and returns the specified value to the location where it was called. A common mistake is to forget the return keyword, in which case the function will return undefined by default.

// With return
function sum(num1, num2) {
  return num1 + num2;
}
 
// Without return, so the function doesn't output the sum
function sum(num1, num2) {
  num1 + num2;
}

// Function Declaration:
// Function declarations are used to create named functions. These functions can be called using their declared name. Function declarations are built from:
// The function keyword.
// The function name.
// An optional list of parameters separated by commas enclosed by a set of parentheses ().
// A function body enclosed in a set of curly braces {}.

const add1 = add1(1,2); // function called here before it is defined.
console.log(add1);

function add1(num1, num2) { // function declaration
  return num1 + num2; 
}

// Ex 2:
function calcAge(birthYear, firstName){
  const age =  2021 - birthYear;
  console.log(`${firstName} is ${age} years old`);
  return age;
}
const age = calcAge(1991, 'Val');


// Function Expressions: (recommended method)
// Function expressions create functions inside an expression instead of as a function declaration. They can be anonymous and/or assigned to a variable.
const add2 = function(num1,num2) { // function expression defined first
  return num1 + num2;
}
const add2 = add2(1,2); // function called here after it has been defined above
console.log(add2);

// Ex 2:
const dog = function() {
  return 'Woof!';
}

// Difference between Function Declaration and Function Expressions:
// Function declaration can be called before they are defined.
// Function expressions cannot be called before they are defined.

// Functions Calling Other Functions (using Function Declarations):
// Ex:
// function cutFruitPieces(fruit){
//   return fruit * 4;
// }
// function fruitProcessor(apples, oranges){
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apple pieces from ${apples} apples and  ${orangePieces} orange pieces from ${oranges} oranges.`
//   return juice;
// }
//  console.log(fruitProcessor(2,3));

// Functions Calling Other Functions (using Function Expressions):
// Ex:
const cutFruitPieces = function(fruit){
  return fruit * 4;
}
const fruitProcessor = function(apples, oranges){
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} apple pieces from ${apples} apples and  ${orangePieces} orange pieces from ${oranges} oranges.`
  return juice;
}
console.log(fruitProcessor(2,3));



// Anonymous Functions:
// Anonymous functions in JavaScript do not have a name property. They can be defined using the function keyword, or as an arrow function. See the code example for the difference between a named function and an anonymous function.

// Named function
function rocketToMars() {
  return 'BOOM!';
}
 
// Anonymous function
const rocketToMars = function() {
  return 'BOOM!';
}



// Arrow Functions (ES6):
// Arrow function expressions were introduced in ES6. These expressions are clean and concise. The syntax for an arrow function expression does not require the function keyword and uses a fat arrow => to separate the parameter(s) from the body.
// There are several variations of arrow functions:
// Arrow functions with a single parameter do not require () around the parameter list.
// Arrow functions with a single expression can use the concise function body which returns the result of the expression without the return keyword implicitly.

// Arrow function with no arguments 
const printHello = () => { 
  console.log('hello'); 
}; 
printHello(); // Prints: hello

// Arrow functions with a single argument 
const checkWeight = weight => { 
  console.log(`Baggage weight : ${weight} kilograms.`); 
}; 
checkWeight(25); // Prints: Baggage weight : 25 kilograms.
 
// Arrow function with two arguments 
const sum = (firstParam, secondParam) => { 
  return firstParam + secondParam; 
}; 
console.log(sum(2,5)); // Prints: 7 
 
// Concise arrow functions
const multiply = (a, b) => a * b; 
console.log(multiply(2, 30)); // Prints: 60 

const divide = (a, b) => a / b; 
const calcDivide = divide(30, 3); // you can save the return value into a variable if needed
console.log(calcDivide); // Prints: 10 

// Ex:
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1991, 'Valyn'));

// Arrow functions don't get to use the .this keyword so we use traditional function expressions more and arrow functions in different situations.


// 3 Different Function Types Overview:

//Function Declaration: Function that can be used before it is declared.
function calcAge(birthYear) {
  return 2021 - birthYear;
}

// Function expression: Essentially a function value stored in a variable.
const calcAge = function (birthYear) {
  return 2021 - birthYear;
}

// Arrow Function: Quick one line function. Has no 'this' keyword.
const calcAge = (birthYear) => 2021 - birthYear;


// CHAPTER 4: SCOPE:

// Scope is a concept that refers to where values and functions can be accessed. Various scopes include:
// Global scope: (a value/function in the global scope can be used anywhere in the entire program)
// File or Module scope: (the value/function can only be accessed from within the file)
// Function scope (only visible within the function),
// Code Block scope (only visible within a { ... } codeblock)

// Function scope
function myFunction() {
  var pizzaName = "Volvo";
  // Code here can use pizzaName
}
 

// Global Variables:
// JavaScript variables that are declared outside of blocks or functions can exist in the global scope, which means they are accessible throughout a program. Variables declared outside of smaller block or function scopes are accessible inside those smaller scopes.
// Note: It is best practice to keep global variables to a minimum.

// Variable declared globally
const color = 'blue';
 
function printColor() {
  console.log(color);
}
printColor(); // Prints: blue

// Hoisting:
// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (to the top of the current script or the current function). 
// In JavaScript, a variable can be declared after it has been used. Variables defined with let and const are hoisted to the top of the block, but not initialized. 
// JavaScript only hoists declarations, not initializations.
// let and const have a temporal dead zone (TDZ).
// Any variables declared with var will be hoisted and set to UNDEFINED.

// Using a let variable before it is declared will result in a ReferenceError: Cannot access 'carName' before initialization. const is in the the temporal dead zone (TDZ) at this point.
carName = "Volvo";
let carName;

// Using a const variable before it is declared, is a syntax errror, so the code will simply not run.
carName = "Volvo";
const carName;

//Because of hoisting, y has been declared before it is used, but because initializations are not hoisted, the value of y is undefined.
var x = 5; // Initialize x
var y;     // Declare y

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y

y = 7;    // Assign 7 to y

console.log(addDecl(2, 3)); // 5 Here we are able to call the function declaration in before it was defined in the code. it supports hoisting.
console.log(addExpr(2, 3)); // Uncaught ReferenceError: Cannot access 'addExpr' before initialization.
console.log(addArrow(2, 3)); // Uncaught ReferenceError: Cannot access 'addArrow' before initialization.
console.log(addExpr1(2, 3)); // Uncaught TypeError: addExpr1 is not a function
console.log(addArrow1(2, 3)); // Uncaught TypeError: addExpr1 is not a function
console.log(addArrow1); // undefined

// Function declaration and hoisting
function addDecl(a, b){
  return a + b;
}

// Function expression and hoisting
const addExpr = function (a, b){
  return a + b;
}
var addExpr1 = function (a, b){
  return a + b;
}

// Arrow functions and hoisting
const addArrow = (a,b) => a + b;
var addArrow1 = (a,b) => a + b;


// Example 1: 
console.log(numProducts); // undefined
if (!numProducts) deleteShoppingCart(); // if no products run function deleteShoppingCart()

var numProducts = 10;
function deleteShoppingCart(){
  console.log('All Products deleted');
}
// Best Practices:
// avoid using var to declare variables as it leads to bugs. use const and let instead.
// declare variables at the top of each scope. it makes the code look more cleaner.
// always declare all types of functions first and use them only after the declaration.

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true. variables declared with var will create an object on the global window object
console.log(y === window.y); // false
console.log(z === window.z); // false

// CHAPTER 5: ARRAYS:

// Arrays are lists of ordered, stored data. They can hold items that are of any data type. Arrays are created by using square brackets, with individual elements separated by commas.

// An array containing numbers
const numberArray = [0, 1, 2, 3];
 
// An array containing different data types
const mixedArray = [1, 'chicken', false, 2021-1991, numberArray];


// Array can be created in 2 diiferent ways:
// 1st Way: (literal syntax)
const friends = ['Micca', 'Jose', 'Andre'];
console.log(friends);
console.log(friends[1]);

// 2nd Way:
const friend = new Array('Micca', 'Jose', 'Andre');
console.log(friend.length); // to find the total number of elements
console.log(friend[friend.length - 1]); // to find the last element
friend[2] = 'Jake'; // you can mutate an array
console.log(friend);
// friend = ['Bob', 'Alex'] // you cannot reassign the const array


// Index:
// Array elements are arranged by index values, starting at 0 as the first element index. Elements can be accessed by their index using the array name, and the index surrounded by square brackets.

// Accessing an array element
const myArray = [100, 200, 300];
 
console.log(myArray[0]); // 100
console.log(myArray[1]); // 200
console.log(myArray[2]); // 300

// Property .length:
// The .length property of a JavaScript array indicates the number of elements the array contains.
const numbers = [1, 2, 3, 4];
numbers.length // 4

// Ex:
const calcAge = function(birthYear){
  return 2021 - birthYear;
}
const years = [1991, 1963, 1957, 1987, 2017, 1988];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

// Array Methods:
// Method .push():
// The .push() method of JavaScript arrays can be used to add one or more elements to the end of an array. .push() mutates the original array returns the new length of the array.
// Adding a single element:
const cart = ['apple', 'orange'];
cart.push('pear'); 

// Adding multiple elements
const numbers = [1, 2];
numbers.push(3, 4, 5);

// Method .unshift():
// .unshift() adds one or more elements to the start of an array.
cart.unshift('strawberry');

// Method .pop():
// The .pop() method removes the last element from an array and returns that element.
const ingredients = ['eggs', 'flour', 'chocolate'];
 
const poppedIngredient = ingredients.pop(); // 'chocolate'
console.log(ingredients); // ['eggs', 'flour']

// Method .shift():
// .shift() removes the first element from an array and returns that element.
ingredients.shift('eggs');

// Method indexOf():  finds the index of an element
const myArray1 = [100, 200, 300];
console.log(myArray1.indexOf(100));
// we get -1 for an element that does not exist in the array
console.log(myArray1.indexOf(400));

// ES6 Method .includes(): returns true if element in array or false if not.
console.log(myArray1.includes(100)); // true
console.log(myArray1.includes('100')); // false checks with strict equality and does not do type coercion
console.log(myArray1.includes(400)); // false

if(myArray1.includes(100)){
  console.log('100 exists in the array!');
}

// Mutable Arrays:
// JavaScript arrays are mutable, meaning that the values they contain can be changed.
// Even if they are declared using const, the contents can be manipulated by reassigning internal values or using methods like .push() and .pop().
const names = ['Alice', 'Bob'];
 
names.push('Carl');
// ['Alice', 'Bob', 'Carl']

// Array.concat():
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);

// CHAPTER 6: LOOPS:
// A loop is a programming tool that is used to repeat a set of instructions. Iterate is a generic term that means “to repeat” in the context of loops. A loop will continue to iterate until a specified condition, commonly known as a stopping condition, is met.

// FOR Loop
// A for loop declares looping instructions, with three important pieces of information separated by semicolons ;:
// The initialization defines where to begin the loop by declaring (or referencing) the iterator variable
// The stopping condition determines when to stop looping (when the expression evaluates to false)
// The iteration statement updates the iterator each time the loop is completed
// for loop keeps running while condition is TRUE

// When you know how many iterations/times the loop will run you will also need a counter and the 'for' loop is the best choice.
// (ex: when looping through an array we already know how many elements it has so we know how many iterations we will need)
for (let i = 0; i < 4; i += 1) {
  console.log(i);
};
// Output: 0, 1, 2, 3

//Ex 2:
for(let rep = 1; rep <= 10; rep++){
  console.log(`Lifting weights rep no# ${rep}`);
}

// Reverse Loop / Looping Backwards:
//A for loop can iterate “in reverse” by initializing the loop variable to the starting value, testing for when the variable hits the ending value, and decrementing (subtracting from) the loop variable at each iteration.

const items = ['apricot', 'banana', 'cherry'];
 
for (let i = items.length - 1; i >= 0; i -= 1) { // i-- can be used instead of i -= 1
  console.log(`${i}. ${items[i]}`);
}
// Prints: 2. cherry
// Prints: 1. banana
// Prints: 0. apricot


// Looping, Breaking and Continuing Through Arrays:
// An array’s length can be evaluated with the .length property. This is extremely helpful for looping through arrays, as the .length of the array can be used as the stopping condition in the loop.
for (let i = 0; i < array.length; i++){
  console.log(array[i]);
}
// Output: Every item in the array

// Ex 2:
const val = [
   'Val',
  'Silva',
  2021-1991,
 'developer',
 ['waze', 'tiki', 'plagg']
];
const types = [];
// console.log(val[0]);
// console.log(val[1];
// ...
// console.log(val[4];

for(let i = 0; i <= val.length; i++){

  //reading from val array
  console.log(val[i], typeof val[i]);

  // filling types array
  // types[i] = typeof val[i];
  types.push(typeof val[i]);
}
console.log(types);

// Ex 3:
const years = [1991, 2007, 1969, 2020];
const ages = [];
for(let i = 0; i < years.length; i++){
  ages.push(2021 - years[i]);
}
console.log(ages);

// continue and break:
const valyn = [
   'Val',
  'Silva',
  2021-1991,
 'developer',
 ['waze', 'tiki', 'plagg']
];
console.log('--- Only Strings ---');
for(let i = 0; i <= valyn.length; i++){
  if(typeof valyn[i] !== 'string') continue;
  //reading from valyn array
  console.log(valyn[i], typeof valyn[i]);
}
console.log('--- Break with Number ---');
for(let i = 0; i <= valyn.length; i++){
  if(typeof valyn[i] === 'number') break;
  //reading from valyn array
  console.log(valyn[i], typeof valyn[i]);
}

// Nested For Loop:
// A nested for loop is when a for loop runs inside another for loop.
// The inner loop will run all its iterations for each iteration of the outer loop.
for (let outer = 0; outer < 2; outer += 1) {
  for (let inner = 0; inner < 3; inner += 1) {
    console.log(`${outer}-${inner}`);
  }
}
/* 
Output:
0-0
0-1
0-2
1-0
1-1
1-2
*/

// Ex 2:
for(let excercise = 1; excercise < 4; excercise++){
  console.log(`--- starting excercise ${excercise}`);
  for(let rep = 1; rep < 6; rep++){
    console.log(`Excercise ${excercise}: Lifting weight rep no# ${rep}`);
  }
}

// While Loop
// The while loop creates a loop that is executed as long as a specified condition evaluates to true. The loop will continue to run until the condition evaluates to false. The condition is specified before the loop, and usually, some variable is incremented or altered in the 'while' loop body to determine when the loop should stop.

while (condition) {
  // code block to be executed
}
 
let i = 0;
 
while (i < 5) {        
  console.log(i);
  i++;
}

// Ex 2:
let rep = 1;
  while(rep <= 6){
    console.log(`Excercise ${excercise}: Lifting weight rep no# ${rep}`);
    rep++;
  }
// Ex 3:
  // let dice = Math.random() * 6; // deicmal result
  // let dice = Math.trunc(Math.random() * 6); // numbers from 0 - 5
    let dice = Math.trunc(Math.random() * 6) + 1; // numbers from 0 - 6 
     console.log(dice);

     while(dice!==6){
       console.log(`You rolled a ${dice}`);
       dice = Math.trunc(Math.random() * 6) + 1; 
       if(dice === 6){
         console.log('Loop is about to end...');
       }
     }
     // if dice is 6 at the beginning the loop would have no iterations so it never starts.
  // A while loop does not have to depend on any counter variable. When you need a loop with outer counter it's best to use while loop. 
  // Basically when you do not know how many iterations the loop will have use the  while loop.


// Do…While Statement
// A do...while statement creates a loop that executes a block of code once, checks if a condition is true, and then repeats the loop as long as the condition is true. They are used when you want the code to always execute at least once. The loop ends when the condition evaluates to false.

x = 0
i = 0
 
do {
  x = x + i;
  console.log(x)
  i++;
} while (i < 5); 
// Prints: 0 1 3 6 10

// Break Keyword:
// Within a loop, the break keyword may be used to exit the loop immediately, continuing execution after the loop body.
// Here, the break keyword is used to exit the loop when i is greater than 5.
for (let i = 0; i < 99; i += 1) {
  if (i > 5) {
     break;
  }
  console.log(i)
}
// Output: 0 1 2 3 4 5

// CHAPTER 7: ITERATORS:

// Functions Assigned to Variables:
// In JavaScript, functions are a data type just as strings, numbers, and arrays are data types. Therefore, functions can be assigned as values to variables, but are different from all other data types because they can be invoked.

let plusFive = (number) => {
  return number + 5;  
};
 
plusFive(3); // 8
// Since f has a function value, it can be invoked. 
f(9); // 14

// Callback Functions:
// In JavaScript, a callback function is a function that is passed into another function as an argument. This function can then be invoked during the execution of that higher order function (that it is an argument of).
// Since, in JavaScript, functions are objects, functions can be passed as arguments.
const isEven = (n) => {
  return n % 2 == 0;
}
 
let printMsg = (evenFunc, num) => {
  const isNumEven = evenFunc(num); // evenFunc returns true or false
  console.log(`The number ${num} is an even number: ${isNumEven}.`)
}
 
// Pass in isEven as the callback function
printMsg(isEven, 4); 
// Prints: The number 4 is an even number: True.

// Higher-Order Functions
// In Javascript, functions can be assigned to variables in the same way that strings or arrays can. They can be passed into other functions as parameters or returned from them as well.
// A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

//printMsg is a higher-order function and isEven is a Callback Function.

// Array Method .reduce():
// The .reduce() method iterates through an array and returns a single value.
// It takes a callback function with two parameters (accumulator, currentValue) as arguments. On each iteration, accumulator is the value returned by the last iteration, and the currentValue is the current element. Optionally, a second argument can be passed which acts as the initial value of the accumulator.
// Here, the .reduce() method will sum all the elements of the array.
const arrayOfNumbers = [1, 2, 3, 4];
 
const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {  
  return accumulator + currentValue;
});
console.log(sum); // 10

// Array Method .forEach():
// The .forEach() method executes a callback function on each of the elements in an array in order.
// Here, in the example below the callback function containing a console.log() method will be executed 5 times, once for each element.
const numbers = [28, 77, 45, 99, 27];
 
numbers.forEach(number => {  
  console.log(number);
}); 

// Array Method .filter():
// The .filter() method executes a callback function on each element in an array. The callback function for each of the elements must return either true or false. The returned array is a new array with any elements for which the callback function returns true.
// Here, the array filteredArray will contain all the elements of randomNumbers but 4.

const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter(n => {  
  return n > 5;
});

// Array Method .map():
// The .map() method executes a callback function on each element in an array. It returns a new array made up of the return values from the callback function.
// The original array does not get altered, and the returned array may contain different elements than the original array.
const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];
 
const announcements = finalParticipants.map(member => {
  return member + ' joined the contest.';
})
 
console.log(announcements);

// CHAPTER 8: OBJECTS:
// An object is a built-in data type for storing key-value pairs. Data inside objects are unordered, and the values can be of any type.

// Restrictions in Naming Properties:
// JavaScript object key names must adhere to some restrictions to be valid. Key names must either be strings or valid identifier or variable names (i.e. special characters such as - are not allowed in key names that are not strings).

// Example of invalid key names
const trainSchedule = {
  platform num: 10, // Invalid because of the space between words.
  40 - 10 + 2: 30, // Expressions cannot be keys.
  +compartment: 'C' // The use of a + sign is invalid unless it is enclosed in quotations.
}

// Dot Notation for Accessing Object Properties:
// Properties of a JavaScript object can be accessed using the dot notation in this manner: object.propertyName. Nested properties of an object can be accessed by chaining key names in the correct order.
const apple = { 
  color: 'Green',
  price: {
    bulk: '$3/kg',
    smallQty: '$4/kg'
  }
};
console.log(apple.color); // 'Green'
console.log(apple.price.bulk); // '$3/kg'

// Ex 2:
const val = {
  firstName: 'Val',
  lastName: 'Silva',
  age: 2021-1991,
  job: 'developer',
  friends: ['waze', 'tiki', 'plagg']
};
console.log(val.lastName); // dot notation
console.log(val['lastName']); // bracket notation
const nameKey = 'Name'
console.log(val['first' + nameKey], val['last' + nameKey]); // works with bracket notation
// console.log(val.'first' + nameKey); // does not work with dot notation

const interestedIn = prompt('Choose firstName, lastName, age, job or friends to get the value');
// console.log(val.interestedIn); // does not work with dot notation
console.log(val[interestedIn]);// works with bracket notation 

if(val[interestedIn]){
  console.log(val[interestedIn]);
} else {
  console.log('Invalid request');
}

val.location = 'Portugal';
val['twitter'] = '@val';
console.log(val);

// Val has 3 friends and her best friend is tiki.
console.log(`${val.firstName} has ${val.friends.length} and her best friend is ${val.friends[1]}`);

// Accessing non-existent JavaScript properties:
// When trying to access a JavaScript object property that has not been defined yet, the value of undefined will be returned by default.
const classElection = {
  date: 'January 12'
};
console.log(classElection.place); // undefined

// JavaScript Objects are Mutable:
// JavaScript objects are mutable, meaning their contents can be changed, even when they are declared as const. New properties can be added, and existing property values can be changed or deleted.
// It is the reference to the object, bound to the variable, that cannot be changed.

const student = {
  name: 'Sheldon',
  score: 100,
  grade: 'A',
}
 
console.log(student)
// { name: 'Sheldon', score: 100, grade: 'A' }
 
delete student.score
student.grade = 'F'
console.log(student)
// { name: 'Sheldon', grade: 'F' }
 
student = {}
// TypeError: Assignment to constant variable.

// JavaScript for...in loop:
// The JavaScript for...in loop can be used to iterate over the keys of an object. In each iteration, one of the properties from the object is assigned to the variable of that loop.
let mobile = {
  brand: 'Samsung',
  model: 'Galaxy Note 9'
};
 
for (let key in mobile) {
  console.log(`${key}: ${mobile[key]}`);
}

// Properties and values of a JavaScript object:
// A JavaScript object literal is enclosed with curly braces {}. Values are mapped to keys in the object with a colon (:), and the key-value pairs are separated by commas. All the keys are unique, but values are not.
// Key-value pairs of an object are also referred to as properties.
const classOf2018 = {
  students: 38,
  year: 2018
}

// Delete operator:
// Once an object is created in JavaScript, it is possible to remove properties from the object using the delete operator. The delete keyword deletes both the value of the property and the property itself from the object. The delete operator only works on properties, not on variables or functions.
const person = {
  firstName: "Matilda",
  age: 27,
  hobby: "knitting",
  goal: "learning JavaScript"
};
 
delete person.hobby; // or delete person[hobby];
 
console.log(person);
/*
{
  firstName: "Matilda"
  age: 27
  goal: "learning JavaScript"
}
*/
    
// Javascript passing objects as arguments:
// When JavaScript objects are passed as arguments to functions or methods, they are passed by reference, not by value. This means that the object itself (not a copy) is accessible and mutable (can be changed) inside that function.
const origNum = 8;
const origObj = {color: 'blue'};
 
const changeItUp = (num, obj) => {
  num = 7;
  obj.color = 'red';
};
 
changeItUp(origNum, origObj);
 
// Will output 8 since integers are passed by value.
console.log(origNum);
 
// Will output 'red' since objects are passed 
// by reference and are therefore mutable.
console.log(origObj.color);

// JavaScript Object Methods:
// JavaScript objects may have property values that are functions. These are referred to as object methods.
// Methods may be defined using anonymous arrow function expressions, or with shorthand method syntax.
// Object methods are invoked with the syntax: objectName.methodName(arguments).
const engine = {
  // method shorthand, with one argument
  start(adverb) {
    console.log(`The engine starts up ${adverb}...`);
  },  
  // anonymous arrow function expression with no arguments
  sputter: () => {
    console.log('The engine sputters...');
  },
};
 
engine.start('noisily');
engine.sputter();
 
/* Console output:
The engine starts up noisily...
The engine sputters...
*/

// Ex 2:
const valy = {
  firstName: 'Val',
  lastName: 'Silva',
  job: 'developer',
  friends: ['waze', 'tiki', 'plagg'],
  hasDriversLicense: true,
  
  // 1st way
  // calcAge: function(birthYear){
  //   return 2021 - birthYear;
  // }

  // 2nd way (Recommended)
  // calcAge: function(){
  //   console.log(this); // returns the whole valy object
  //   return 2021 - this.birthYear;
  // }

   // 3rd way (Recommended) when creating new property
  calcAge: function(){
    this.age = 2021 - this.birthYear; // create a new property in the object using 'this' keyword
    return this.age;
  },
  getSummary: function(){
    return `${this.firstName} is a ${this.calcAge()}-year old ${valy.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

// 1st way (cont..)
// console.log(valy.calcAge(1991));
// console.log(valy['calcAge'](1991));

// 2nd way (Recommended)
// we can read the birthYear property directly from the object instead of having to pass it in as a parameter by using the 'this' keyword
console.log(valy.calcAge());

// 3rd way (Recommended)
console.log(valy.age);

console.log(valy.getSummary());



// this Keyword:
// Rules:
// 1. Method: this = Object that is calling the method
// 2. Simple function call: this = undefined (for strict mode) or points to global object window if not in strict mode.
// 3. Arrow functions: this = this of surrounding function (lexical this). arrow functions do not get it's own this.
// 4. Event Listener: this = points to DOM element that the event handler function is attached to.

// this does NOT point to the function itself and also NOT the variable environment of the function.

// 1. 'this' Keyword inside an object function (Method) (object scope)
// The reserved keyword 'this' refers to a method’s calling object, and it can be used to access properties belonging to that object.
// The 'this' keyword inside the method (object function) is used to refer to the object itself and access properties within the object.
const cat = {
  name: 'Pipey',
  age: 8,
  whatName() {
    return this.name  
  }
};
console.log(cat.whatName()); 
// Output: Pipey

console.log(this);

// Example with a regular function call
const calcAge1 = function (birthYear){
  console.log(2021 - birthYear);
  console.log(this); // undefined (in strict mode)
}
calcAge1(1991);

// Example with a arrow function
const calcAge1 =  (birthYear) => {
  console.log(2021 - birthYear);
  console.log(this); // points to the this keyword in the global scope. here it is window object ( arrow function does not get it's own this keyword but a lexical this keyword)
}
calcAge1(1991);

// Example 'this' keyword inside a method
const jake = {
  year: 1991,
  calcAge: function(){
    console.log(this); // points to the jonas object 
    console.log(2021 - this.year);
  }
}
jake.calcAge();

const maggie = { 
  year: 2017,
};

maggie.calcAge = jake.calcAge; // method borowing (we don't call the method here).
console.log(maggie); // {year: 2017, calcAge: f}
console.log(jake); // {year: 1991, calcAge: f}
maggie.calcAge(); // 4
// the this keyword always points to the object that is calling the method. we are calling the method here on maggie so the 'this' keyword will point to maggie.

const f = jake.calcAge;
f(); // regular function call not attached to any object // Uncaught TypeError: cannot read property year of undefined at calcAge and f.

// 2. javascript function this:
// this keyword inside a Javascript function outside of an object (global scope)
// Every JavaScript function or method has a this context. For a function defined inside of an object, this will refer to that object itself. For a function defined outside of an object, this will refer to the global object (window in a browser, global in Node.js).
const restaurant = {
  numCustomers: 45,
  seatCapacity: 100,
  availableSeats() {
    // this refers to the restaurant object
    // and it's used to access its properties
    return this.seatCapacity - this.numCustomers;
  }
}

// 3. JavaScript Arrow Function this Scope:
// JavaScript arrow functions do not have their own this context, but use the this of the surrounding lexical context. Thus, they are generally a poor choice for writing object methods.

//Consider the example code:
// loggerA is a property that uses arrow notation to define the function. Since data does not exist in the global context, accessing this.data returns undefined.
// loggerB uses method syntax. Since this refers to the enclosing object, the value of the data property is accessed as expected, returning "abc".
const myObj = {
    data: 'abc',
    loggerA: () => { console.log(this.data); },
    loggerB() { console.log(this.data); },
};
 
myObj.loggerA();    // undefined
myObj.loggerB();    // 'abc'

// this is NOT static. It depends on how the function is called, and it's value is only assigned when the function is called.

// Regular Functions vs Arrow Functions using 'this' keyyword:
// var firstName = 'Manuel';
const jake = {
  firstName = 'Jake';
  year: 1991,
  calcAge: function(){
    console.log(this); // points to the jake object 
    console.log(2021 - this.year);

    //Solution 1: using self or that
    const self = this; // points to jake object. you can name it as self or that. this preserves the this keyword. This is a pre-ES6 solution. this can also be solved in ES6 using an arrow function.
    
    const isMillenial = function (){
      // console.log(this); // undefined (inside a regular function call the 'this' keyword must be undefined). use the self or that keyword to solve this issue above.

      // console.log(this.year >=1981 && this.year <= 1996); // Uncaught TypeError: Cannot read property 'year' of undefined

      console.log(self); // points to jake object
      console.log(self.year >=1981 && self.year <= 1996); // true
    };

   //Solution 2: using an arrow function as it does not have it's own this keyword but uses 'this' keyword of its parents scope.
    const isMillenial = () => {

      console.log(this); // points to jake object in parents scope
      console.log(this.year >=1981 && this.year <= 1996); // true
    };

    isMillenial(); 
  },
  greet: () => { // the arrow function used here as a method does not get it's own this keyword
    console.log(this); // points to the window object
    console.log(`Hey ${this.firstName}`); // points to global scope this property firstName with value Manuel
  },

  // Important Note: Never use an ARROW function as a method. Just use a normal function. And avoid using var.

  greet: function () { // The regular function used as a method here gets it's own this keyword
    console.log(this); // points to the object jake
    console.log(`Hey ${this.firstName}`); // Hey Jake 
  },
}
jake.greet();
jake.calcAge(); // calcAge is a regular function used as a method and not an arrow function 


  console.log(this.firstname); // if not in strict mode points to the window object and since firstName is not in the window object its set to undefined.


  // Arguments keyword only exists in regular functions:
  const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
  };
  addExpr(2, 5);
  addExpr(2, 5, 8, 12); // this is valid to add more arguments as it will also store 8 and 12 just without a name in the Arguments array

  var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
  };
  addArrow(2, 5);
  addArrow(2, 5, 8, 12); // Uncaught ReferenceError: arguments is not defined

// javascript getters and setters restricted:
// JavaScript object properties are not private or protected. Since JavaScript objects are passed by reference, there is no way to fully prevent incorrect interactions with object properties.
// One way to implement more restricted interactions with object properties is to use getter and setter methods.
// Typically, the internal value is stored as a property with an identifier that matches the getter and setter method names, but begins with an underscore (_).
const myCat = {
  _name: 'Dottie',
  get name() {
    return this._name;  
  },
  set name(newName) {
    this._name = newName;  
  }
};
 
// Reference invokes the getter
console.log(myCat.name);
 
// Assignment invokes the setter
myCat.name = 'Yankee';

// getters and setters intercept property access:
// JavaScript getter and setter methods are helpful in part because they offer a way to intercept property access and assignment, and allow for additional actions to be performed before these changes go into effect.
const myCat = {
  _name: 'Snickers',
  get name(){
    return this._name
  },
  set name(newName){
    //Verify that newName is a non-empty string before setting as name property
    if (typeof newName === 'string' && newName.length > 0){
      this._name = newName; 
    } else {
      console.log("ERROR: name must be a non-empty string"); 
    }
  }
}

// javascript factory functions:
// A JavaScript function that returns an object is known as a factory function. Factory functions often accept parameters in order to customize the returned object.
// A factory function that accepts 'name', 'age', and 'breed' parameters to return a customized dog object. 
const dogFactory = (name, age, breed) => {
  return {
    name: name,
    age: age,
    breed: breed,
    bark() {
      console.log('Woof!');  
    }
  };
};
console.log('albert', 3, 'akhita');

// JavaScript destructuring assignment shorthand syntax
// The JavaScript destructuring assignment is a shorthand syntax that allows object properties to be extracted into specific variable values.
// It uses a pair of curly braces ({}) with property names on the left-hand side of an assignment to extract values from objects. The number of variables can be less than the total properties of an object.
const rubiksCubeFacts = {
  possiblePermutations: '43,252,003,274,489,856,000',
  invented: '1974',
  largestCube: '17x17x17'
};
const {possiblePermutations, invented, largestCube} = rubiksCubeFacts;
console.log(possiblePermutations); // '43,252,003,274,489,856,000'
console.log(invented); // '1974'
console.log(largestCube); // '17x17x17'

// shorthand property name syntax for object creation:
// The shorthand property name syntax in JavaScript allows creating objects without explicitly specifying the property names (ie. explicitly declaring the value after the key). In this process, an object is created where the property names of that object match variables which already exist in that context. 
//Shorthand property names populate an object with a key matching the identifier and a value matching the identifier’s value.
const activity = 'Surfing';
const beach = { activity };
console.log(beach); // { activity: 'Surfing' }

// DESTRUCTURING ARRAYS: 
// Destructuring is an ES6 feature: unpacking values from an array or object into separate variables. (breaking a larger data structure into smaller ones like a variable.)
// When you destructure an array the original array is not affected.
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr; // destructuring the array
console.log(x, y, z); // 2, 3, 4
console.log(arr); [2, 3, 4]

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
};
let [main, secondary] = restaurant.categories;
console.log(main, secondary);  // Italian Pizzeria
const [main, , secondary] // adding an empty hole in between
console.log(main, secondary);  // Italian Vegetarian

// Switching variables: To switch main with secondary
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); // Vegetarian Italian

// Trick 1# To switch using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary); // In destructuing we didn't need a temp variable

// Trick 2# We can have a function return an array and immediately destruct the result into different variables. This allows to return multiple values from a function.
// Here we receive 2 return values from a function.
const [starter, mainCourse] = restaurant.order[2, 0];
console.log(starter, mainCourse); // Garlic Bread Pizza

// Destructuring a nested array
const nested = [2, 4, [5, 6]];
const [i, ,j] = nested;
console.log(i, j); // 2 [5,6]

const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6 as separate variables

const [p, q, r] = [8, 9]
console.log(p, q, r); // 8 9 undefined

//We can set Default values
const [p = 1, q = 1, r = 1] = [8, 9]
console.log(p, q, r); // 8 9 1

// DESTRUCTURING OBJECTS:
const newRestaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours:{
    thu:{
      open: 12,
      close: 12,
    },
    fri:{
      open: 11,
      close: 23,
    },
    sat:{
      open: 0, // open 24 hours
      close: 24,
    },
  },
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery: function(starterIndex = 1, mainIndex = 0, time = '20:00', address){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },
  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }

};
// Calling a method with an object
newRestaurant.orderDelivery({ 
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})

// uses default values for mainIndex = 0 and time = '20:00'
newRestaurant.orderDelivery({ 
  address: 'Via del Sole, 21',
  starterIndex: 1,
})

// In an object the order of elements does not matter like it does in arrays. 
// So we don't need to manually skip elements like we did in an array.
const {name, openingHours, categories} = newRestaurant; // Here the variable names are same as the property names.
console.log(name, openingHours, categories); 
// Classico Italiano {thu:{..}, fri:{..}, sat:{..}} ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// To have a different variable name compared to the property name
const {name: restaurantName, openingHours: hours, categories: tags} = newRestaurant;
console.log(restaurantName, hours, tags);

// Default vlaues: You can also create a default value if the property does not exist or even if it exists using = []
const {menu = [], starterMenu: starters = []} = newRestaurant;
console.log(menu, starters); // [] ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Mutating variables whie destructuring objects:
let a = 111;
let b = 999;
const obj = {a:23, b:7, c:14}

// Destructuring the array
// const {a, b} = obj; // cannot be used as a and b are already declared
// let {a, b} = obj; // this would create new variables so not recommended

// {a, b} = obj; // We cannot assign anything to a code block {a,b} we get a Uncaught SyntaxError: Unexpected Token '='

// Trick to assign is wrapping the code into ()
({a, b} = obj);
console.log(a, b); // 23, 7

// Nested Objects
const {fri: {open, close}} = openingHours;
console.log(open, close); // 11, 23
// const {fri: {open: o, close: c}} = openingHours; // You can rename open and close if needed
// console.log(o, c);

// SPREAD OPERATOR (...):
// Spread operator is used to build new arrays or pass multiple values into a function. It unpacks elements from an array. 
// Spread operator is similar to destructuting as it helps get elements out of arrays.
// But spread operator takes all the elements out of the array but does not create new variables, so they can be used in places where we write values separated by commas.

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [1, 2, 7, 8, 9]

const newArr = [1, 2, arr];
const newArr = [1, 2, ...arr];
console.log(newArr); // [1, 2, 7, 8, 9]
console.log(...newArr); // 1, 2, 7, 8, 9

const newMenu = [...newRestaurant.mainMenu, 'Gnocci']; 
console.log(newMenu); // ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// Two important use cases of a spread operator:
// 1st Case: Create Shallow Copies of Arrays:
//2nd Case: Merge 2 Arrays together:

// Copy Array
const mainMenuCopy = [...newRestaurant.mainMenu];

// Join 2 Arrays
const menu = [...newRestaurant.starterMenu, ...newRestaurant.mainMenu];
console.log(menu);

// FOR-OF-LOOP
for (const item of menu) 
console.log(item);

for (const item of menu.entries()){
  console.log(item);
}
// console.log([...menu.entries()]);

// Spread operators work on all iterables. Iterables are arrays, strings, maps or sets but NOT objects.
const str = 'Val';
console.log(...str); // ['V', 'a', 'l']
const letters = [...str, ' ', 'S. ']
console.log(letters); // ['V', 'a', 'l', '', 'S.']
console.log(`${...str} Silva`); // Uncaught SyntaxError: Unexpected token '...' Cannot use ... here.
// multiple values separated by a comma are used when we pass arguments into a function or when we build a new array.

// Real world example
// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
// console.log(ingredients); // a, b, c
// newRestaurant.orderPasta(ingredients[0],ingredients[1], ingredients[2]); // Here is your delicious pasta with a, b and c
// newRestaurant.orderPasta(...ingredients); // Here is your delicious pasta with a, b and c

// SPREAD operator in Objects
const newRestaurant1 = {founded: 1998, ...newRestaurant, founder: 'Guiseppe'}
console.log(newRestaurant1);

const restaurantCopy = {...newrestaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name); // Ristorante Roma
console.log(newRestuarant.name); // Classico Italiano


// REST PATTERN AND PARAMETERS
// Similar syntax as spread operator. But Rest Pattern is used to collect multiple elements and condense / pack them into an array.

// SPREAD, beacause on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [3, 4, 5]

// Destructuring in REST

// Does not include any skipped elements 
// Rest element must be the last element
// const [pizza, , risotto, ...otherFood, bread] = [..newRestaurant.mainMenu, ...newRestaurant.starterMenu]; // cannot have bread as last element after the REST element
// There can be only one REST element in a destructuring assignment
const [pizza, , risotto, ...otherFood] = [..newRestaurant.mainMenu, ...newRestaurant.starterMenu];
console.log(pizza, rissotto, otherFood); // Pizza Risotto ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// REST in Objects
const { sat, ...weekdays } = newRestaurant.openingHours;
console.log(weekdays); // {thu:{..}, fri:{..}}

// Functions in REST (REST parameters)
const add = function(...numbers){
  console.log(numbers);
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) 
  sum += numbers[i];
  console.log(sum);
}
add(2, 3); // [2, 3]
add(5, 3, 7, 2); // [5, 3, 7, 2]

const x  = [23, 5, 7];
add(...x);

//Real world example
newRestaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// mushrooms
// ['onion', 'olives', 'spinach']
newRestaurant.orderPizza('mushrooms'); 
// mushrooms
// []

// SPREAD operator is used where we would write values separated by commas
// REST operator is used where we would write variable names separated by commas


// SHORTCIRCUITING && and ||

console.log('--- OR ---');
// Use ANY data type, return ANY data type and they do short-circuiting ( if 1st operand returns true it returns truthy value)
// We can use the OR operator to set default values 
console.log(3 || 'Val'); // 3
console.log('' || 'Val'); // Val
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello is truthy and it shortcircuits the evaluation and returns  Hello

newRestaurant.numGuests = 23;
const guests1 = newRestaurant.numGuests ? newRestaurant.numGuests : 10;
console.log(guests1); // 23
const guests2 = newRestaurant.numGuests || 10; 
console.log(guests2);  // 23

console.log('--- AND ---');
// We can use the AND operator to execute code in the 2nd operand if the 1st one is true.
// The && shortcircuits when the 1st value it comes across is falsy and immediately returns the falsy value without evaluating the next operand.
console.log(0 && 'Val'); // 0
console.log(6 && 'Val'); // Val
console.log('Hello' && 23 && null && 'Val'); // null
 
// Real-world example
if(newRestaurant.orderPizza){
  newRestaurant.orderPizza('mushrooms', 'spinach');
}
// Using && operator:
newRestaurant.orderPizza && newRestaurant.orderPizza('mushrooms', 'spinach');

// NULLISH COALESCING OPERATOR ??
newRestaurant.numGuests = 0;
const guests3 = newRestaurant.numGuests || 10; 
console.log(guests3);  // 10 (this is a bug)

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = newRestaurant.numGuests ?? 10;
console.log(guestCorrect); // 0

// Looping Arrays: For Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];



// CHAPTER 9: CLASSES:
// JavaScript supports the concept of classes as a syntax for creating objects. Classes specify the shared properties and methods that objects produced from the class will have.
// When an object is created based on the class, the new object is referred to as an instance of the class. New instances are created using the new keyword.
// The code sample shows a class that represents a Song. A new object called mySong is created underneath and the .play() method on the class is called. The result would be the text Song playing! printed in the console.

// new keyword:
class Song {
  constructor() {
    this.title;
    this.author;
  }
  
  play() {
    console.log('Song playing!');
  }
}
 
const mySong = new Song();
mySong.play();

// Class Constructor:
// Classes can have a constructor method. This is a special method that is called when the object is created (instantiated). Constructor methods are usually used to set initial values for the object.
class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }
}
 
const mySong = new Song('Bohemian Rhapsody', 'Queen');
console.log(mySong.title);

// Class Methods:
// Properties in objects are separated using commas. This is not the case when using the class syntax. Methods in classes do not have any separators between them.
class Song {
  play() {
    console.log('Playing!');
  }
  
  stop() {
    console.log('Stopping!');
  }
}


// Static Methods:
// Within a JavaScript class, the static keyword defines a static method for a class. Static methods are not called on individual instances of the class, but are called on the class itself. Therefore, they tend to be general (utility) methods.
class Dog {
  constructor(name) {
    this._name = name;  
  }
  
  introduce() { 
    console.log('This is ' + this._name + ' !');  
  }
  
  // A static method
  static bark() {
    console.log('Woof!');  
  }
}
 
const myDog = new Dog('Buster');
myDog.introduce();
 
// Calling the static method
Dog.bark();

// extends:
// JavaScript classes support the concept of inheritance — a child class can extend a parent class. This is accomplished by using the extends keyword as part of the class definition.
// Child classes have access to all of the instance properties and methods of the parent class. They can add their own properties and methods in addition to those. A child class constructor calls the parent class constructor using the super() method.
// The super() method refers to the parent class. By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

// Parent class
class Media {
  constructor(info) {
    this.publishDate = info.publishDate;
    this.name = info.name;
  }
}
 
// Child class
class Song extends Media {
  constructor(songData) {
    super(songData);
    this.artist = songData.artist;
  }
}
 
const mySong = new Song({ 
  artist: 'Queen', 
  name: 'Bohemian Rhapsody', 
  publishDate: 1975
});

// CHAPTER 10: PROMISES:
// A JavaScript Promise is an object that can be used to get the outcome of an asynchronous operation when that result is not instantly available.
// Since JavaScript code runs in a non-blocking manner, promises become essential when we have to wait for some asynchronous operation without holding back the execution of the rest of the code.

// States of a JavaScript Promise:
// A JavaScript Promise object can be in one of three states: pending, resolved, or rejected.
// While the value is not yet available, the Promise stays in the pending state. Afterwards, it transitions to one of the two states: resolved or rejected.
// A resolved promise stands for a successful completion. Due to errors, the promise may go in the rejected state.
// In the given code block, if the Promise is on resolved state, the first parameter holding a callback function of the then() method will print the resolved value. Otherwise, an alert will be shown.
const promise = new Promise((resolve, reject) => {
  const res = true;
  // An asynchronous operation.
  if (res) {
    resolve('Resolved!');
  }
  else {
    reject(Error('Error'));
  }
});
 
promise.then((res) => console.log(res), (err) => alert(err));

// The .catch() method for handling rejection:
// The function passed as the second argument to a .then() method of a promise object is used when the promise is rejected. An alternative to this approach is to use the JavaScript .catch() method of the promise object. The information for the rejection is available to the handler supplied in the .catch() method.
const promise = new Promise((resolve, reject) => {  
  setTimeout(() => {
    reject(Error('Promise Rejected Unconditionally.'));
  }, 1000);
});
 
promise.then((res) => {
  console.log(value);
});
 
promise.catch((err) => {
  alert(err);
});

// JavaScript Promise.all():
// The JavaScript Promise.all() method can be used to execute multiple promises in parallel. The function accepts an array of promises as an argument. If all of the promises in the argument are resolved, the promise returned from Promise.all() will resolve to an array containing the resolved values of all the promises in the order of the initial array. Any rejection from the list of promises will cause the greater promise to be rejected.

// In the code block, 3 and 2 will be printed respectively even though promise1 will be resolved after promise2.
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 300);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 200);
});
 
Promise.all([promise1, promise2]).then((res) => {
  console.log(res[0]);
  console.log(res[1]);
});

// Executor function of JavaScript Promise object:
// A JavaScript promise’s executor function takes two functions as its arguments. The first parameter represents the function that should be called to resolve the promise and the other one is used when the promise should be rejected. A Promise object may use any one or both of them inside its executor function.
// In the given example, the promise is always resolved unconditionally by the resolve function. The reject function could be used for a rejection.
const executorFn = (resolve, reject) => {
  resolve('Resolved!');
};
 
const promise = new Promise(executorFn);

// .then() method of a JavaScript Promise object:
// The .then() method of a JavaScript Promise object can be used to get the eventual result (or error) of the asynchronous operation.
// .then() accepts two function arguments. The first handler supplied to it will be called if the promise is resolved. The second one will be called if the promise is rejected.

const promise = new Promise((resolve, reject) => {    
  setTimeout(() => {
    resolve('Result');
  }, 200);
});
 
promise.then((res) => {
  console.log(res);
}, (err) => {
  alert(err);
});

// setTimeout():
// setTimeout() is an asynchronous JavaScript function that executes a code block or evaluates an expression through a callback function after a delay set in milliseconds.
const loginAlert = () =>{
  alert('Login');
};
 
setTimeout(loginAlert, 6000);

// Avoiding nested Promise and .then():
// In JavaScript, when performing multiple asynchronous operations in a sequence, promises should be composed by chaining multiple .then() methods. This is better practice than nesting.
// Chaining helps streamline the development process because it makes the code more readable and easier to debug.
const promise = new Promise((resolve, reject) => {  
  setTimeout(() => {
    resolve('*');
  }, 1000);
});
 
const twoStars = (star) => {  
  return (star + star);
};
 
const oneDot = (star) => {  
  return (star + '.');
};
 
const print = (val) => {
  console.log(val);
};
 
// Chaining them all together
promise.then(twoStars).then(oneDot).then(print);

// Creating a Javascript Promise object:
// An instance of a JavaScript Promise object is created using the new keyword.
// The constructor of the Promise object takes a function, known as the executor function, as the argument. This function is responsible for resolving or rejecting the promise.
const executorFn = (resolve, reject) => {
  console.log('The executor function of the promise!');
};
 
const promise = new Promise(executorFn);

// Chaining multiple .then() methods:
// The .then() method returns a Promise, even if one or both of the handler functions are absent. Because of this, multiple .then() methods can be chained together. This is known as composition.
// In the code block, a couple of .then() methods are chained together. Each method deals with the resolved value of their respective promises.
const promise = new Promise(resolve => setTimeout(() => resolve('dAlan'), 100));
 
promise.then(res => {
  return res === 'Alan' ? Promise.resolve('Hey Alan!') : Promise.reject('Who are you?')
}).then((res) => {
  console.log(res)
}, (err) => {
  alert(err)
});

// CHAPTER 11: ASYNC AND AWAIT:

// Resolving JavaScript Promises:
// When using JavaScript async...await, multiple asynchronous operations can run concurrently. If the resolved value is required for each promise initiated, Promise.all() can be used to retrieve the resolved value, avoiding unnecessary blocking.
let promise1 = Promise.resolve(5);
let promise2 = 44;
let promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});
 
Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});
// expected output: Array [5, 44, "foo"]

// Asynchronous JavaScript function:
// An asynchronous JavaScript function can be created with the async keyword before the function name, or before () when using the async arrow function. An async function always returns a promise.
function helloWorld() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}
 
const msg = async function() { //Async Function Expression
  const msg = await helloWorld();
  console.log('Message:', msg);
}
 
const msg1 = async () => { //Async Arrow Function
  const msg = await helloWorld();
  console.log('Message:', msg);
}
 
msg(); // Message: Hello World! <-- after 2 seconds
msg1(); // Message: Hello World! <-- after 2 seconds

// Async Await Promises:
// The async...await syntax in ES6 offers a new way write more readable and scalable code to handle promises. It uses the same features that were already built into JavaScript.
function helloWorld() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}
 
async function msg() {
  const msg = await helloWorld();
  console.log('Message:', msg);
}
 
msg(); // Message: Hello World! <-- after 2 seconds

// Using async await syntax:
// Constructing one or more promises or calls without await can allow multiple async functions to execute simultaneously. Through this approach, a program can take advantage of concurrency, and asynchronous actions can be initiated within an async function. Since using the await keyword halts the execution of an async function, each async function can be awaited once its value is required by program logic.

// JavaScript async…await advantage:
// The JavaScript async...await syntax allows multiple promises to be initiated and then resolved for values when required during execution of the program. As an alternate to chaining .then() functions, it offers better maintainablity of the code and a close resemblance synchronous code.

// Async Function Error Handling:
// JavaScript async functions uses try...catch statements for error handling. This method allows shared error handling for synchronous and asynchronous code.
let json = '{ "age": 30 }'; // incomplete data
 
try {
  let user = JSON.parse(json); // <-- no errors
  alert( user.name ); // no name!
} catch (e) {
  alert( "Invalid JSON data!" );
}

// JavaScript aysnc await operator:
// The JavaScript async...await syntax in ES6 offers a new way write more readable and scablable code to handle promises. A JavaScript async function can contain statements preceded by an await operator. The operand of await is a promise. At an await expression, the execution of the async function is paused and waits for the operand promise to resolve. The await operator returns the promise’s resolved value. An await operand can only be used inside an async function.
function helloWorld() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}
 
async function msg() {
  const msg = await helloWorld();
  console.log('Message:', msg);
}
 
msg(); // Message: Hello World! <-- after 2 seconds

// CHAPTER 12: REQUESTS:

// HTTP GET request:
// HTTP GET requests are made with the intention of retrieving information or data from a source (server) over the web.
// GET requests have no body, so the information that the source requires, in order to return the proper response, must be included in the request URL path or query string.

// JSON: JavaScript Object Notation:
// JSON or JavaScript Object Notation is a data format suitable for transporting data to and from a server.
// It is essentially a slightly stricter version of a Javascript object. A JSON object should be enclosed in curly braces and may contain one or more property-value pairs. JSON names require double quotes, while standard Javascript objects do not.
const jsonObj = {
  "name": "Rick",
  "id": "11A",
  "level": 4  
};

// Asynchronous calls with XMLHttpRequest (XHR):
// AJAX enables HTTP requests to be made not only during the load time of a web page but also anytime after a page initially loads. This allows adding dynamic behavior to a webpage. This is essential for giving a good user experience without reloading the webpage for transferring data to and from the web server.
// The XMLHttpRequest (XHR) web API provides the ability to make the actual asynchronous request and uses AJAX to handle the data from the request.
// The given code block is a basic example of how an HTTP GET request is made to the specified URL.
const xhr = new XMLHttpRequest();
xhr.open('GET', 'mysite.com/api/getjson');

// The query string in a URL:
// Query strings are used to send additional information to the server during an HTTP GET request.
// The query string is separated from the original URL using the question mark character ?.
// In a query string, there can be one or more key-value pairs joined by the equal character =.
// For separating multiple key-value pairs, an ampersand character & is used.
// Query strings should be url-encoded in case of the presence of URL unsafe characters.
const requestUrl = 'http://mysite.com/api/vendor?name=kavin&id=35412';

// XMLHttpRequest GET Request Requirements:
// The request type, response type, request URL, and handler for the response data must be provided in order to make an HTTP GET request with the JavaScript XMLHttpRequest API.
// The URL may contain additional data in the query string. For an HTTP GET request, the request type must be GET.
const req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', '/myendpoint/getdata?id=65');
req.onload = () => {
  console.log(req.response);
};
 
req.send();

// HTTP POST request:
// HTTP POST requests are made with the intention of sending new information to the source (server) that will receive it.
// For a POST request, the new information is stored in the body of the request.

// HTTP POST request with the XMLHttpRequest API:
// To make an HTTP POST request with the JavaScript XMLHttpRequest API, a request type, response type, request URL, request body, and handler for the response data must be provided. The request body is essential because the information sent via the POST method is not visible in the URL. The request type must be POST for this case. The response type can be a variety of types including array buffer, json, etc.
const data = {
  fish: 'Salmon',
  weight: '1.5 KG',
  units: 5
};
const xhr = new XMLHttpRequest();
xhr.open('POST', '/inventory/add');
xhr.responseType = 'json';
xhr.send(JSON.stringify(data));
 
xhr.onload = () => {
  console.log(xhr.response);
};

// Promise URL parameter FETCH API:
// A JavaScript Fetch API is used to access and manipulate requests and responses within the HTTP pipeline, fetching resources asynchronously across a network.
// A basic fetch() request will accept a URL parameter, send a request and contain a success and failure promise handler function.
// In the example, the block of code begins by calling the fetch() function. Then a then() method is chained to the end of the fetch(). It ends with the response callback to handle success and the rejection callback to handle failure.
fetch('url')
.then(
  response  => {
    console.log(response);
  },
 rejection => {
    console.error(rejection.message);
 }
);

// ok property FETCH API:
// In a Fetch API function fetch() the ok property of a response checks to see if it evaluates to true or false. In the code example the .ok property will be true when the HTTP request is successful. The .ok property will be false when the HTTP request is unsuccessful.
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message) 
  })

// Fetch API Function:
// The Fetch API function fetch() can be used to create requests. Though accepting additional arguments, the request can be customized. This can be used to change the request type, headers, specify a request body, and much more as shown in the example block of code.
fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
 body: JSON.stringify({id: "200"})
}).then(response => {
  if(response.ok){
      return response.json();  
  }
    throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  console.log(jsonResponse);
})

// JSON Formatted response body:
// The .json() method will resolve a returned promise to a JSON object, parsing the body text as JSON.
// The example block of code shows .json() method that returns a promise that resolves to a JSON-formatted response body as a JavaScript object.
fetch('url-that-returns-JSON')
.then(response => response.json())
.then(jsonResponse => {
  console.log(jsonResponse);
});

// async await syntax:
// The async…await syntax is used with the JS Fetch API fetch() to work with promises. In the code block example we see the keyword async placed the function. This means that the function will return a promise. The keyword await makes the JavaScript wait until the problem is resolved.
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  try{
const response = await fetch(endpoint, {cache: 'no-cache'});
    if(response.ok){
      const jsonResponse = await response.json()
       console.log(jsonResponse)
    }
  }
  catch(error){
    console.log(error)
  }
}

// CHAPTER 12: STRICT MODE:

// Strict mode:
// JavaScript in strict mode does not allow variables to be used if they are not declared.
// "use strict"; Defines that JavaScript code should be executed in "strict mode". You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.
// "use strict" is just a string, so IE 9 will not throw an error even if it does not understand it.
// Declared at the beginning of a script, it has global scope (all code in the script will execute in strict mode):
// Ex 1:
"use strict";
x = 3.14;       // This will cause an error because x is not declared

// Ex 2:
"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}

// Ex 3:
// Declared inside a function, it has local scope (only the code inside the function is in strict mode):
x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}

// Strict mode makes it easier to write "secure" JavaScript. It changes previously accepted "bad syntax" into real errors.
// In normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.
// In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

// Not Allowed in Strict mode:
// Using a variable, without declaring it, is not allowed:
"use strict";
x = 3.14;                // This will cause an error

// Using an object, without declaring it, is not allowed:
"use strict";
x = {p1:10, p2:20};      // This will cause an error

// Deleting a variable (or object) is not allowed.
"use strict";
let x = 3.14;
delete x;                // This will cause an error

// Deleting a function is not allowed.
"use strict";
function x(p1, p2) {};
delete x;                // This will cause an error 

// Duplicating a parameter name is not allowed:
"use strict";
function x(p1, p1) {};   // This will cause an error

// Octal numeric literals are not allowed:
"use strict";
let x = 010;             // This will cause an error

// Octal escape characters are not allowed:
"use strict";
let x = "\010";            // This will cause an error

// Writing to a read-only property is not allowed:
"use strict";
const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;            // This will cause an error

// Writing to a get-only property is not allowed:
"use strict";
const obj = {get x() {return 0} };

obj.x = 3.14;            // This will cause an error

// Deleting an undeletable property is not allowed:
"use strict";
delete Object.prototype; // This will cause an error

// The word eval cannot be used as a variable:
"use strict";
let eval = 3.14;         // This will cause an error

// The word arguments cannot be used as a variable:
"use strict";
let arguments = 3.14;    // This will cause an error

// The with statement is not allowed:
"use strict";
with (Math){x = cos(2)}; // This will cause an error

// For security reasons, eval() is not allowed to create variables in the scope from which it was called:
"use strict";
eval ("let x = 2");
alert (x);             // This will cause an error

// The this keyword in functions behaves differently in strict mode:
// The this keyword refers to the object that called the function.
// If the object is not specified, functions in strict mode will return undefined and functions in normal mode will return the global object (window):
"use strict";
function myFunction() {
  alert(this); // will alert "undefined"
}
myFunction();

// Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.
// These are: implements, interface, let, package, private, protected, public, static, yield
"use strict";
let public = 1500;      // This will cause an error



// CHAPTER 13: BROWSER COMPATIBILITY AND TRANSPILATION:

// Running scripts with npm:
// Command line shortcuts can be defined in a package.json file in a “scripts” object. This is used to combine multiple command line instructions in one command. These shortcuts can be executed from the terminal with the npm run command. For example, a script command named "build" can be executed with npm run build.

// Babel Package Installation:
// The babel-cli JavaScript package contains Babel command line tools. The babel-preset-env JavaScript package is used to transpile ES6 JavaScript code to ES5. They should be installed with the flag -D in the command line instruction like npm install -D babel-preset-env to be installed as development dependency.

// ES5 & ES6 Compatibility:
// ECMAScript (ES) is a scripting language specification standardized by Ecma International for Javascript. ES5 is the older JavaScript version which is supported by all web browsers while the ES6 version, released in 2015, is not supported by all web browsers.

// Installing Development JavaScript Packages:
// When a -D flag is used to install a JavaScript package using the command line, this adds the package under the property called devDependencies in a package.json file for the project. Whenever the developer runs npm install, all the listed packages and their dependencies will be installed.

// ES6 JavaScript backwards compatibility:
// ES6 is a version of JavaScript that was released in 2015 and is backward compatible. One example of how to do this is the JavaScript Babel library which transpiles ES6 JavaScript to ES5. Transpilation is the process of converting one programming language to another.

// Babel configuration file:
// Babel uses the .babelrc file as a configuration file to determine the JavaScript file’s presets, plugins and more. It can be created with the command touch .babelrc.

// Babel build process:
// Babel uses the npm run build commend to covert all the JavaScript ES6 files in the src folder of the project to ES5. This conversion makes the JavaScript code compatible on all modern browsers. The ES5 code is written in a new file named main.js within the folder called lib

// Installing JavaScript Packages:
// The npm install command installs JavaScript packages to the project directory. It creates a folder called node_modules and copies the JavaScript package files to it. This command also installs all the dependencies for the given package.

// Caniuse.com for checking browser support:
// The website caniuse.com is useful for looking up the percent of browsers that support certain features in HTML, CSS, JavaScript, and their libraries.
// For instance, you can find out what percent of browsers support specific features in ES6, as covered in the “Browser compatibility and transpilition” lesson.

// Reasons to update JavaScript:
// Ecma international updated JavaScript from ES5 to ES6 in 2015 to make JavaScript syntax more similar to other languages, make JavaScript syntax more efficient and easier to read, and address ES5 bugs.

// Node Package Manager:
// The node package manager, or npm, is a package manager for JavaScript which is used to access and manage Node packages - modules that contain JavaScript code written by other developers that are meant to provide helpful tools, reduce duplication of work, and reduce bugs.

// Initiate JavaScript project:
// The command line instruction npm init is used to set up a new JavaScript project. A package.json file is created by the npm init command and contains a list of key-value pairs that provides information about the JavaScript project, such as the project name, version, description, a list of node packages required for the project, command line scripts, and more.

