import { getHeroById } from "./08-import-export";

export const getHeroByIdAsync = (id) => {
   
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);
            if(hero)
                resolve(hero);
            reject('Error, hero missing!');
        }, 1000);
    });

}
