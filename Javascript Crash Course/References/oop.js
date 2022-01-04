// Object oriented programing

// Constructor function
function Person(fname, lname, dob) {
    this.fname = fname;
    this.lname = lname;
    this.dob = new Date(dob);
    // Function to get yob
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    // Function to get full name
    this.getFullName = () => `${this.fname} ${this.lname}`;
}

// Adding a function to the prototype see https://www.toptal.com/javascript/es6-class-chaos-keeps-js-developer-up
Person.prototype.birthYear = function() {
    return this.dob.getFullYear();
};

// Cannot use lambdas for this
Person.prototype.name = function() {
    return `${this.fname} ${this.lname}`
};

//Instance of person
const person1 = new Person('John', 'Doe', '1-1-2000');
const person2 = new Person('Mary', 'Smith', '1-1-1970');
console.log(person1);
console.log(`${person2.getFullName()} year of birth is ${person2.getBirthYear()}`);
console.log(`${person2.name()} year of birth is ${person2.birthYear()}`);

// Class (syntactic sugar)
class PersonClass {

    constructor(fname, lname, dob) {
        this.fname = fname;
        this.lname = lname;
        this.dob = new Date(dob);
    }

     getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName = () => `${this.fname} ${this.lname}`;

}

const person3 = new Person('Dave', 'Wall', '1-1-1800');
console.log(`${person3.getFullName()} year of birth is ${person3.getBirthYear()}`);
