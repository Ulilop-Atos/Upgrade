/**
 * Pillars of OOP
 * 
 * Encapsulation:
 * Grouping related variables and functions that operate on them. Reduces complexity and increases usability.
 * 
 * Abstraction:
 * Simplify the interface of objects by hiding methods and variables, this reduces the impact of change. 
 * 
 * Inheritance:
 * The ability to share code between objects eliminates redundant code.
 * 
 * Polymorphism:
 * You only need to implement one particular way of doing something regarding an object. We can refactor switch/case statements.
 * 
 */

/**
 * Creating Objects
 */

// Factory function
function createCircle(radius) {
    
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}
const circle = createCircle(1);
circle.draw(); 

// Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw'); 
    }
}
// We can create a new instance using Circle(), but the it creates all te variables as global variables, referencing 'this' to the higher element on the hierarchy, to prevent this, we use the keyword 'new' when creating an instance. 
const another = new Circle();
another.draw();

// All the objects have a constructor property in javascript. use.constructor to access that reference.

/**
 * Functions as objects
 * All the functions are also an object here, the constructor of a function comes from the object Function. You can create a function making a new instance of that object.
 */

// This will be equivalent to the definition of Circle(radius)
const CircleWeird = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log('Draw radius of: ' + this.radius); 
    }
`);

const weird = new CircleWeird(10);
 
// Circle.call({}, ...args);
// Is equivalent to 
// new Circle(...args);
// The call method creates an instance using the object {} as the this reference.

// Is the same for Circle.apply({}, [...args]);
// But [...args] will be an array.
