import { getImagen } from '../../base/11-async-await';
import '@testing-library/jest-dom';


describe('Pruebas con asyn-await y fetch', () => {
    test('debe de retonar el titulo de la url', async() => {
        const title = await getImagen();
        expect(typeof title).toBe('string');
    })
    
});
