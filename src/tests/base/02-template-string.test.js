import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';


describe('pruebas en el 02 string-template', () => {
    test('getSaludo debe de retornar hola alejandro', () => {
        const nombre = 'Alejandro';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola '+ nombre);   
    })

    test('getSaludo debe de devolver hola carlos is no hay argumento de nombre', () => {
        const saludo = getSaludo();

        expect(saludo).toBe('Hola carlos')
    })
    
})