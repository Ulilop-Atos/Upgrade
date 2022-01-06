// Dynamic function call

// Bicycle
function Bicycle(cadence, speed, gear, tirePressure) {
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTires = function() {
        this.tirePressure += 3;
    }
}
let bike1 = new Bicycle(50, 20, 4, 25);
console.log(bike1);

// Mechanic 
function Mechanic(name) {
    this.name = name;
}

let mike = new Mechanic('Mike');
console.log(mike);

// // This doesn't works
// mike.inflateTires = bike1.inflateTires;
// mike.inflateTires();
// console.log(mike);
// console.log(bike1);


// ------ Internal reference manipulation
// Empty function
function foo() {this.abc = 'def';}
// Normal call
foo();
// Execution using call
foo.call();
// Is the same behavior, but call accepts an object as an argument and binds it internally to the 'this' reference.

// This should work
mike.inflateTires = bike1.inflateTires;
mike.inflateTires.call(bike1);
console.log(mike);
console.log(bike1);
