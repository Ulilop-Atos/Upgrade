/**
 * Ths objects in Js are mutable, can break their contracts, you can't warranty an object of some type always has the same behavior.
 */

function Circle(radius) {
    this.radius = radius;

    this.draw = function() {
        console.log('Draw');
    }
}

const circle = new Circle(10);

console.log(circle); // ->
// draw: ƒ ()
// radius: 10
// [[Prototype]]: Object

circle.location = {x:1};

console.log(circle); // ->
// draw: ƒ ()
// location: {x: 1}
// radius: 10
// [[Prototype]]: Object

// We can access an object property using the name like in an array (or a String:obj map)
console.log(circle['location'].x === circle['location']['x']);

// You can delete a property or method from an object

delete circle.location;
console.log(circle); // ->
// draw: ƒ ()
// radius: 10
// [[Prototype]]: Object

// You can enumerate the prop of an obj like

for (let key in circle) {
    console.log(key);
}

