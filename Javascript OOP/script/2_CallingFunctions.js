// Method #1 (In the global object)
function foo() {
    console.log('Hello!');
}
foo();

// Method #2 (In a specific object)
let obj = {};
obj.foo = function() {
    console.log('Hello!');
};
obj.foo();

// Method #3 (In an implicit created object)
new foo();

// Method #4 (Call argument is the obj referred by 'this.')
foo.call();