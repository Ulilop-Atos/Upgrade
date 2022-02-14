import getGifs from "../../helpers/getGifs";

describe('Tests for getGifs()', () => {
  test('should return 25 elements', async () => { 
    const gifs = await getGifs('Test'); 
    expect(gifs.length).toBe(25);
   });

  test('should return an empty array', async () => { 
    const gifs = await getGifs(''); 
    expect(gifs.length).toBe(0);
   });
});