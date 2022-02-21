import { getHeroByIdAsync } from "../../base/09-promises";
import heros from "../../data/heros";


describe('Test on 09', () => {

    test('getHeroByIdAsync should be a Promise for a hero for all the ids', ( done )=> {
        heros.forEach(hero => {
            
            getHeroByIdAsync(hero.id)
                .then(testResponse => {
                    expect(testResponse).toEqual(hero);
                    done();
                })  
        });
    });

    test('getHeroByIdAsync should be an error for invalid ID', ( done )=> {
        
        getHeroByIdAsync(0)
        .catch(testResponse => {
                expect(testResponse).toEqual('Error, hero missing!');
                done();
            })  
    });

});