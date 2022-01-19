console.log('Login to the console.');
console.error('Displaying an error');
console.warn('This is a warning');
// Variable keywords:
// var:   Sets a global variable.
// let:   Defines a local variable
// const: Defines a constant variable. Good idea to use this by default. Requires the variable to be initialized.
// Data Types:
// string:  use '' or "", use `` for template literals
const pname = "John";
// number: int or decimal 100, 100.56
const age  = 30;
const rate = 4.5; 
// boolean: true or false
const isOk = true;
// objects: null, undefined(using let this is the default value)
const x = null; // null is not object, that's an error
const y = undefined;
let z;
// Showing types on the console:
console.log(pname + ' type ' + typeof pname);
console.log(age + ' type ' + typeof age);
console.log(rate + ' type ' + typeof rate);
console.log(isOk + ' type ' + typeof isOk);
console.log(x + ' type ' + typeof x);
console.log(y + ' type ' + typeof y);
console.log(z + ' type ' + typeof z);
// Simple string concatenation
console.log('My name is ' + pname + ' and I am ' + age);
// Template string:
const hello = `My name is ${pname} and I am ${30}`;
console.log(hello);
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String for all the methods and properties of a String
console.log(hello.length);
// We can chain methods and properties.
console.log(hello.substring(0,16).toLocaleUpperCase());
const strList = 'aItem, b item, c-item';
console.log(strList.split(", "));
// Arrays in JS, can be multi data type, are 0 based see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array for methods and prop
const numbers = new Array(1,2,3,4,5);
console.log(numbers);
const fruits = ['Apples', 'Banana', 'Raspberry', 'Oranges'];
console.log(fruits[1]);
// You can manipulate an array created using 'const', however you can't re assign that array
// ie, fruits = []; FAILS  
// Appending to the end
fruits.push('Mangos');
// Appending to the beginning
fruits.unshift('Strawberries');
console.log(fruits);
// Removing last
fruits.pop();
console.log(fruits);
console.log(fruits + ' is array: '+ Array.isArray(fruits));
console.log('Test' + ' is array: '+ Array.isArray('Test'));
console.log('Trying to find a non existent element in array returns: ' + fruits.indexOf('Not in array'));
// Object prototype, const to prevent object pointer overwrite, but allows modification
const person = {
    fname: 'John',
    lname: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    // Embedded obj
    address: {
        street: 'Test street #0',
        city: 'NotACity',
        state: 'NA' 
    }
}
// Consulting obj values
console.log(person);
console.log(person.lname);
console.log(person.hobbies[person.hobbies.indexOf('movies')]);
console.log(person.address.city);

// Deconstructing an obj, this takes the vales an assign them as variables, can take values from embedded objs too
const {fname, lname, address: { city } } = person;
console.log(fname);
console.log(city);

// Adding properties
person.email = 'test@mail.com';
console.log(person.email);

const todoList = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: false,
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false,
    }
];

console.log(todoList);
console.log(todoList[1].text);

// JSON format, you can only use "" for string, everything else is the same
const todoJSON = JSON.stringify(todoList);
console.log(todoJSON);

// Control structures
for (let i = 0; i < 10; i++) {
    console.log(`For loop i: ${i}`);
}

let j = 0;
while (j<10) {
    console.log(`While loop j: ${j}`);
    j++;
}

for(let t of todoList) {
    console.log(t.text);
}

// Array for each
todoList.forEach(element => {
    console.log(`Id: ${element.id} todo: ${element.text}`);
});

// Array map
const todoText = todoList.map(function(todo) {
    return todo.text;
});
// Using a lambda
const todoTextAlt = todoList.map(e => {return e.text});

// Array filter and map
const todoPending = todoList.filter(e => {
    return !e.isCompleted;
}).map(e => e.text);

console.log(todoText);
console.log(todoTextAlt);
console.log(todoPending);

// == for matching values
// === for also matching data types

const n = 10;
const m = 20;
if (n === 10) {
    console.log('n is 10');
} else if (n > 10) {
    console.log('n is more than 10');
} else {
    console.log('n is less than 10');

}
if (n < 10 || m < 10) {
    console.error("Too small numbers!");
}

// Ternary op
const color = n >= 10 ? 'red': 'blue';

switch(color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Unknown color');
}

// Function, can specify a default value
function addNum(n1 = 0, n2 = 0) {
    return n1+ n2;
}
console.log(addNum(5));

// One line def 
const subNum = (n1 = 0, n2 = 0) => n1- n2;
console.log(subNum(3,5));
