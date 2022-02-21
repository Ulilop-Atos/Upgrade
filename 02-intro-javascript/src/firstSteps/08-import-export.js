import heros from "../data/heros";

// console.log(heros);
// console.log(owners);

const getHeroById = id => heros.find(item => item.id === id);

// console.log(getHeroById(2));

const getHerosByOwner = owner => heros.filter(item => item.owner === owner);

// console.log(getHerosByOwner('DC'));

export {
    getHeroById,
    getHerosByOwner
};

