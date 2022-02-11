// Destructure
const people = {
    name: 'Tony',
    age: 45,
    alias: 'Iron-man',
    range: 'Captain',
};

console.log(people.name);
console.log(people.age);
console.log(people.alias);

const returnHero = ({ name, age, alias, range = 'Soldier' }) => {
    return {
        superhero: alias,
        years: age,
        localization: {
            lat: 11.15615,
            lng: 54.35453,
        },
    }
};

const {superhero, years, localization: {lat, lng}} = returnHero(people);
console.log(superhero, years, lat, lng);