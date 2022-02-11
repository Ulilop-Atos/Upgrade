const person = {
    f_name: 'Tony',
    l_name: 'Stark',
    age: 45,
    address: {
        city: 'NY',
        zip: '012345',
        lat: 14.35221,
        lng: 34.54645,
    } 
};

const personTwO = {...person};
personTwO.f_name = 'Peter';

console.log(person);
console.log(personTwO);