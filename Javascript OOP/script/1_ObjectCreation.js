// Manual creation
const emp1 = {}
emp1.firstName = 'Mike';
emp1.lastName = 'Doe';
emp1.gender = 'M';
emp1.designation = 'REgional Manager';
console.log(emp1);

// Functional creation
function createEmployeeObject(firstName, lastName, gender, designation) {
    const newObj = {};
    newObj.firstName = firstName;
    newObj.lastName = lastName;
    newObj.gender = gender;
    newObj.designation = designation;
    return newObj;
}
const emp2 =createEmployeeObject('Dave','Fill','M','Secretary');
console.log(emp2); 

// Using a constructor
function createEmployee(firstName, lastName, gender, designation) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.designation = designation;
}
const emp3 = new createEmployee('Dave','Fill','M','Secretary');
console.log(emp3); 

// Manual
let bicycle1 = {
    'cadence': 50,
    'speed': 20,
    'gear': 4
};
console.log(bicycle1);

// Function
function createBicycle(cadence, speed, gear) {
    let newBicycle = {};
    newBicycle.cadence = cadence;
    newBicycle.speed = speed;
    newBicycle.gear = gear;
    return newBicycle;
}
let bicycle2 = createBicycle(50, 20, 4);
console.log(bicycle2);

// Constructor function 
function Bicycle(cadence, speed, gear) {
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
}
let bicycle3 = new Bicycle(50, 20, 4);
console.log(bicycle3);

