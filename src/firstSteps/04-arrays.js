const arr =  [1,2,3,4];
// arr.push() Modifies the obj, not the reference
let arr2 = [...arr, 5];

const arr3 = arr2.map(n => Math.sqrt(n));

console.log(arr);
console.log(arr2);
console.log(arr3);