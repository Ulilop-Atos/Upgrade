// Prototype

// Bicycle
// With constructor functions, every obj Bicycle will have a copy of the inflateTires func.
function Bicycle(cadence, speed, gear, tirePressure) {
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTires = function() {
        this.tirePressure += 3;
    }
}

// Functions engine process
// Definition
function foo() {}
// This creates a foo object and a prototype object
let ex = foo;
console.log(ex);
// We can access the prototype obj like this
console.log(ex.prototype);
// Creating anther instance from a constructor function, will create a reference too foo.prototype using the __proto__ parameter.
let nFoo = new foo();
console.log(nFoo);

// To validate, we will add a property on the foo.prototype and access it using the __proto__ reference
foo.prototype.test = 'This is the prototype obj of foo';
console.log(foo.prototype.test);

console.log(nFoo.__proto__.test);

console.log(foo.prototype === nFoo.__proto__); // True

// JS searches for reference first on the obj, if it doesn't have it, the ask the prototype
// Therefore, this works:
console.log(nFoo.test);

//But, if we create that reference in the obj, we can't access the prototype one without using a proto reference
nFoo.test = 'This is not in prototype';
console.log(nFoo.test);

// We can delete the reference in the object to again fall back to the prototype definition
delete nFoo.test;
console.log(nFoo.test);

// We can also delete something from prototype, breaking the contract of the constructor function
delete foo.prototype.test;
console.log(nFoo.test);
console.log(nFoo);

// Using the prototype we can share a property in all the objects with the same proto
function Employee(name) {
    this.name = name;
}
let emp1 = new Employee('Jim');
console.log(emp1);
let emp2 = new Employee('Pam');
console.log(emp2);
// We will create a function on the prototype to avoid creating copies of it using the constructor function.
// Taking a look to the Employee obj
console.log(Employee.prototype);
Employee.prototype.workHarder = function () { 
    console.log('Worked harder!!!'); 
};

emp1.workHarder();
emp2.workHarder();

// Also works on newly created obj
let emp3 = new Employee('Mike');
emp3.workHarder();

// Other interesting properties

// A simple function
function par() { 
    this.who = 'I\'m a par instance'; 
}
// We can access the prototype
console.log(par.prototype);
// New instances have access to the __proto__
let a = new par();
console.log(a.__proto__);

// The prototype also stores a reference to the constructor function
let proto = par.prototype; 
console.log(proto.constructor);
console.log(par);
console.log(proto.constructor === par);

// We can create an instance from an object liking the prototype
let b = new a.__proto__.constructor();
console.log('b says: ' + b.who);

// The recommended use of prototype is to add functions or properties to objects without creating a copy on every obj

// Prototype is mutable, you can change the reference
a.__proto__.constructor = function bar () { 
    this.who = 'I\'m a bar instance';
}
let c = new a.__proto__.constructor();
console.log('c says: ' + c.who);

