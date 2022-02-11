import { getImage } from '../../base/11-async-await';

describe('Test 11', () => {
    test('should getImage be a url of an image', async () => {
        const response = await getImage();
        // Regex matches:
        expect((/^https?:\/\/.*\.gif/gm).test(response)).toBe(true);
    });
    
});