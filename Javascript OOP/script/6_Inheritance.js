// Inheritance

// Lest use an example
function Employee(name) { this.name = name; }
Employee.prototype.getName = function() { return this.name };
let emp1 = new Employee('Jim');
console.log(emp1.getName());

// Creating a similar obj
function Manager(name, dept) {
    this.name = name;
    this.dept = dept;
}
Manager.prototype.getDept = function() { return this.dept };
let mgr = new Manager('Michael', 'Sales');
console.log(mgr.getDept());

// But, trying to use getName() on a Manager doesn't works
// We can add the function to the object prototype, bu then every obj can access that function.
// We can however, link the manager prototype to the employee one, to share behavior.
// Right now points to Object
console.log(mgr.__proto__.__proto__ === Object.prototype);
mgr.__proto__.__proto__ = Employee.prototype; 
// Then this works!
console.log(mgr.getName());