import heros from "../data/heros";

const getHeroById = id => heros.find(item => item.id === id);

const getHerosByOwner = owner => heros.filter(item => item.owner === owner);

export {
    getHeroById,
    getHerosByOwner
};

