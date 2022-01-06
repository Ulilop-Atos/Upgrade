// Object function

// Remembering obj creation methods
let simple = {};
console.log(simple);
// That was syntactic sugar for
let obj = new Object();
console.log(obj);

// Remember, we can use the proto to access the constructor
console.log(Object.prototype);
// ===
console.log(obj.__proto__);
// ===
console.log(simple.__proto__);

// If we create a simple constructor function Foo, the __proto__ of an instance of Foo is an instance of Object(), then Foo.__proto__.__proto__ references to Object.prototype

function Foo() {
    this.who = 'I\'m Foo.'
}
let test = new Foo();

console.log(test.__proto__.__proto__ === Object.prototype);

// Therefore, if we add a properties to the Object.prototype, all the objects can access that property
Object.prototype.testProp = 'I have test!';
console.log(test.testProp);