// Bonus

// We can use Classes, in JS are syntactic sugar for function constructors and prototypes manipulation to make our code cleaner

// This Employee definition
function ProtoEmployee(name, salary) { 
    this.name = name; 
    this.salary = salary;
}
ProtoEmployee.prototype.getName = function() { 
    return this.name;
};
ProtoEmployee.prototype.getSalary = function() { 
    return this.salary;
};

// Will be the same as:
class ClassEmployee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getName() {
        return this.name;
    }
    getSalary() {
        return this.salary;
    }
}

// Even inheritance becomes cleaner
// (See 6_Inheritance.js for reference)
class Manager extends ClassEmployee {

    // We can call the initialization from the parent if we want;
    constructor(name, salary, dept) {
        super(name, salary);
        this.dept = dept;
    }

    getDept() {
        return this.dept;
    }
}

let manager = new Manager('Michael Scot', 1000, 'Sales');
console.log(manager);
console.log(manager.getName());
console.log(manager.getSalary());
console.log(manager.getDept());


