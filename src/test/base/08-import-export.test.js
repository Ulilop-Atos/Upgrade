import { getHeroById, getHerosByOwner } from "../../base/08-import-export";
import heros from "../../data/heros";


describe('Test on 08', () => {

    test('getHeroById should be a hero for all the ids', ()=> {
        heros.forEach(hero => {
            expect(getHeroById(hero.id)).toEqual(hero);
        });
    });

    test('getHeroById should be a undefined on invalid ID', ()=> {
        expect(getHeroById(100)).toEqual(undefined);
    });
    
    test('getHerosByOwner should be a list of heros from Marvel and have length of 2', ()=> {
        const herosList = heros.filter(hero => hero.owner === 'Marvel');
        const test = getHerosByOwner('Marvel');
        
        expect(test).toEqual(herosList);
        expect(test.length).toEqual(2);
    });

    test('getHerosByOwner should be a list of heros from DC and have length of 3', ()=> {
        const herosList = heros.filter(hero => hero.owner === 'DC');
        const test = getHerosByOwner('DC');
        
        expect(test).toEqual(herosList);
        expect(test.length).toEqual(3);
    });
    
    test('getHerosByOwner should be an empty list', ()=> {
        const herosList = [];
        expect(getHerosByOwner('OTHER')).toEqual(herosList);
    });
});