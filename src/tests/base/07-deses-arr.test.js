
import {retornaArreglo} from '../../base/07-deses-arr';
import '@testing-library/jest-dom';


describe('Pruebas en la destructuracion de arreglos', () => {
    test('debe de retornar un string y un numero', () => {
        const arr = retornaArreglo();

        expect(arr).toEqual(['ABC',123])
    })

    test('destruccturacion', () => {
        const [letras, numeros] = retornaArreglo();

        expect(letras).toEqual('ABC');
        expect(typeof letras).toBe('string');
        expect(numeros).toEqual(123);
        expect(typeof numeros).toBe('number');
    })
    

})


