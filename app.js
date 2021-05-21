//can contain digits, letters ,underscores,$
// must start with letter , $ or _

// no keyword
//cannot start with number

//case sensitive - fullname vs Fullname

//camelCase or underscore

// let $random123_$ = "random";
// console.log($random123_$);

// camelCase
// let fullName = 'random';
// console.log(fullName);

// underscore
// let full_name = 'random';
// console.log(full_name);

// LET VS CONST VS VAR

// using var

// var value = 'some value';
// value = 'some other value';
// // using let
// let name = 'sumit';
// name = 'money';
// // using const (CONSTANT)- can't re-assign
// const lastName = 'Upadhyay';
// // const lastName; // you cannot do as well in const
// lastName = 'Spittle';

// console.log(value);
// console.log(name);
// console.log(lastName);

// "" or ''
// const name = 'sumit';
// const name2 = 'money';
// const name3 = "sumit's courses are the best";
// console.log(name);

// String Concatenation - combine string values
// `` backticks (template strings) easier option.

// const name = 'sumit';
// const lastName = 'upadhyay';
// let fullName = name + ' ' + lastName;
// console.log('Hello there your full name is: ' + name + ' ' + lastName);
// console.log(fullName);

// const website = 'google';
// const url = 'https://www.' + website + '.com';
// console.log(url);

// const website = 'youtube';
// const url = 'https://www.' + website + '.com';
// console.log(url);

// Numbers
// Loosely Typed = don't declare type

// const number = 34;
// let pants = 2.466;
// pants = 'are great';
// const number2 = 2.456;
// const number3 = '2.456';

// const add = number + number2;
// const sub = number - number2;
// const mul = number * number2;
// const div = number / number2;
// console.log(add);
// console.log(sub);
// console.log(mul);
// console.log(div);
// console.log(number);
// console.log(number2);
// console.log(number3);

// Numbers
// += , -=, *=, ++ , --, %
// Modulus (%) operators returns the remainder after integer division

// let number = 40;
// number += 5;
// number += 5;
// number += 5;
// number += 5;
// number += 5;
// number += 5;
// number -= 5;
// number += 1;
// number += 1;
// number += 1;
// number += 1;
// number += 1;
// number--;
// number--;
// number++;
// number++;
// number++;
// number++;
// number++;
// const slices = 10;
// const children = 3;
// const children = 4;
// const random = 4 + 6 + 10 * 10;
// const random2 = (4 + 6 + 10) * 10;
// console.log(random);
// console.log(random2);
// const amount = 10 / 3;
// const amount = slices / children;
// const amount = slices % children;
// console.log(amount);
// console.log(number);

// Implicit Type Conversion

// const name = 'sumit';
// const lastName = 'spittle';
// const fullName = name + ' ' + lastName;
// console.log(fullName);

// const number = 4;
// const number2 = 10;
// const result = number + number2;
// console.log(result);

// const value = name - lastName;
// console.log(value);

// let number3 = '10';
// let number4 = '23';

// const result2 = number3 - number4;
// console.log(result2);

// const randomNumber = 13;
// document.querySelector('.form').addEventListener('submit', function (e) {
//   e.preventDefault();
//   let value = document.getElementById('amount').value;
//   value = parseInt(value);
//   console.log('Input Value Type');
//   console.log(value);
//   console.log('Sum of Two Values');
//   console.log(randomNumber + value);
// });

// Data Types - 7 total
// Primitive - String, Number, Boolean, Null, Undefined , Symbol
// Object - Arrays , Functions, Objects
// typeof - operator (typeof variable) (type of value)

// String
// const text = 'some text';
// // Number
// const number = 45;
// // Boolean
// let value1 = true;
// let value2 = false;
// // Null
// const result = null;
// // Undefined
// let name;
// // Symbol(ES6)
// console.log(typeof text);
// console.log(typeof 'Hello World');
// console.log(typeof 34);
// console.log(typeof 'true');
// console.log(typeof number);
// console.log(typeof value1);
// console.log(typeof value2);
// console.log(typeof null);
// console.log(name);

// Arrays, Function and Objects
// Array -[] ,0 index based

// const friend1 = 'anna';
// const friend2 = 'anna';
// const friend3 = 'anna';
// const friend4 = 'anna';

// const friends = ['john', 'peter', 'bob', 'susy', 45, undefined, null];
// let bestFriend = friends[2];
// friends[4] = 'anna';
// console.log(friends);
// console.log(friends[4]);
// console.log(friends[3]);
// console.log(bestFriend);
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
// console.log(friends[4]);

// Arrays , Functions and Objects
// Functions - declare , invoke

// console.log('Hello There Bob');
// console.log('Hello There John');
// console.log('Hello There Susy');
// come code here...
// console.log('Hello There Bob');
// console.log('Hello There Anna');
// console.log('Hello There Susy');
// // come code here
// console.log('Hello There Bob');
// console.log('Hello There Anna');
// console.log('Hello There Susy');
// Function Declaration
// function hello() {
//   // Logic
//   console.log('Hello There Bob');
//   console.log('Hello There John');
//   console.log('Hello There Susy');
// }

// hello(); // Function Invoke
// // greet bob
// hello();
// // greet anna
// hello();
// // greet susy

// Arrays, Functions and Objects
//params - when declare/define
// placeholders , local vars
// arguments - when/invoke/call/run
// use vars/values, multiple params, undefined
// function hello() {
//   //logic
//   console.log('Hello There Bob');
//   console.log('Hello There Anna');
//   console.log('Hello There Susy');
// }

// // greet bob
// hello();
// // greet anna
// hello();
// // greet susy
// hello();

// function helloBob() {
//   //logic
//   console.log('Hello There Bob');
// }
// function helloAnna() {
//   //logic
//   console.log('Hello There Anna');
// }
// function helloSusy() {
//   //logic
//   console.log('Hello There Susy');
// }
// // greet Bob
// helloBob();
// //greet Anna
// helloAnna();
// //greet Susy
// helloSusy();

// const bob = 'Bob';
// const susy = 'Susy';
// const anna = 'Anna';

// function greet(name, second) {
//   console.log(second);
//   console.log('Hello There ' + name);
// }

// greet(anna, bob);
// // greet Bob
// greet('Bob');
// //greet Anna
// greet('Anna');
// // Greet Susy
// greet('Susy');

// Arrays , Functions and Objects
// return
// default , undefined , shortcuts, ignores after
// 1 inch 2.54cm

// const wallHeight = 80;
// function calculate(value) {
//   return value * 2.54; // shortcut
//   console.log('hello'); // ignore after return
//   console.log('hello'); // ignore after return
//   console.log('hello'); // ignore after return
// const newValue = value * 2.54;
// return newValue;
// console.log('The value in cm is :' + value * 2.54 + ' cm');
// }
// calculate(200);
// const width = calculate(100);
// const height = calculate(wallHeight);

// const dimensions = [width, height];
// console.log(dimensions);

//Arrays , Functions and Objects
//Expression - another way define a function
// create a variable , assign to FUNCTION (not value),use var
// diff - hoisting , use - arrow func ,Libraries

// function definition/declaration
// function addValues(num1, num2) {
//   return num1 + num2;
// }

// const firstValue = addValues(3, 4);
// const secondValue = addValues(12, 34);
// function expression
// const add = function (num1, num2) {
//   return num1 + num2;
// };
// const thirdValue = add(5, 6);

// const values = [firstValue, secondValue, add(5, 6)];
// console.log(values);

// Arrow Function
// const multiply = (num1, num2) => num1 * num2;

// exports.nameOfMethod = function () {};

// Arrays , Function and Objects
// Objects - key/value pairs methods
// dot notation

const person = {
  name: 'sumit',
  LastName: 'bostian',
  age: 25,
  education: false,
  married: true,
  siblings: ['anna', 'susan', 'peter'],
  greeting() {
    console.log('Hello my name is SUMIT');
  },
};

const age = person.age;
console.log(age);
person.name = 'money';
console.log(person.name);
console.log(person.siblings[2]);
person.greeting();

// Conditional Statements
// >,<, >=, <=, ==, ===, != ,!===

// if (true) {
//   console.log('hello world');
// }

// if (2 > 1) {
//   console.log('hello world');
// }

// const value = true;
// if (value) {
//   console.log('hello word');
// }

// const value = 2 > 1;
// console.log(typeof value);

// if (value) {
//   console.log('hello world');
// }

// const value = 2 > 1;
// const value2 = false;
// if (value2) {
//   console.log('hello world');
// }

// const num1 = 6;
// const num2 = 6;
// const result = num1 >= num2;

// const value = false;
// if (!value) {
//   console.log('value is true');
// }
// if (num1 > num2) {
//   console.log('first number is bigger than second');
// } else if (result) {
//   console.log('first number equal to second');
// } else {
//   console.log('second number is bigger then first');
// }

// const num1 = 6;
// const num2 = 6;
// const value = num1 == num2;
// const value2 = num1 === num2;
// console.log(value);
// console.log(value2);

//Logical Operators
//(||-OR  ),(&& - AND),!

// const name = 'bob';

// if (name === 'bob' || age === 24) {
//   console.log('hello there user');
// } else {
//   console.log('wrong values');
// }

// Switch
// dice values : 1-6

// const dice = 1;
// const dice = 0;
// // All if
// if (dice === 1) {
//   console.log('you got one');
// }
// if (dice === 2) {
//   console.log('you got two');
// }

// if (dice < 1 || dice > 6) {
//   console.log('you did not roll the dice');
// }

// const dice = 0;
// else if
// if (dice == 1) {
//   console.log('you got one');
// } else if (dice === 2) {
//   console.log('you got two');
// } else {
//   console.log('you did not roll the dice');
// }

// const dice = 1;

// switch (dice) {
//   case 1:
//     console.log('you got one');
//     break;
//   case 2:
//     console.log('you got two');
//     break;
//   case 3:
//     console.log('you got three');
//     break;
//   default:
//     console.log('you did not roll the dice');
// }

//Loops
//repetedly run a block of code while condition is true
//while loop
// TURN OFF AUTOSAVE

let amount = 10;

while (amount > 0) {
  console.log('I have ' + amount + "dollars and I'm going to the mall");
  amount--;
}

// do while loop
// code block first , condition second
// runs at least

let money = 0;
do {
  console.log('you have ' + money + 'dollars');
  money++;
} while (money < 10);

// For loop

let i;
for (i = 0; i < 10; i++) {
  console.log('and the number is :' + i);
}

for (let number = 11; number >= 0; number--) {
  console.log('and the number is :' + number);
}
