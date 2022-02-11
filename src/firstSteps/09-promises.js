import { getHeroById } from "./08-import-export";

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const hero = getHeroById(1);
//         if(hero)
//             resolve(hero);
//         reject('Error, hero missing!')
//     }, 1000);
// });

// promise
//     .then((hero) => {
//         console.log('Hero: ', hero);
//     })
//     .catch(err => console.warn(err));


const getHeroByIdAsync = (id) => {
   
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);
            if(hero)
                resolve(hero);
            reject('Error, hero missing!');
        }, 1000);
    });

}

getHeroByIdAsync(2)
    .then( console.log )
    .catch( console.warn );