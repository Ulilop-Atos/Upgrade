/**
 * Javascript data types
 * 
 * Value types
 *      Number
 *      String
 *      Boolean
 *      Symbol
 *      undefined
 *      null
 * 
 * Reference types
 *      Object
 *      Function
 *      Array
 * 
 * Primitives are copied by value, objects by reference
 */

// Javascript pass by value
let x = 10;
let y = x;
x = 20; 
console.log(x); // -> 20
console.log(y); // -> 10

// Pass by reference
let n = {value: 10};
let m = n;
n.value = 20;
console.log(n); // -> {value: 20}
console.log(m); // -> {value: 20}

let num = 10;
function increase(number) {
    number++;
}
increase(num);
console.log(num); // -> 10, we passed by value

let numb = { value:10 };
function increaseOb(obj) {
    obj.value++;
}
increaseOb(numb);
console.log(numb); // -> {value: 11}, we passed by reference



