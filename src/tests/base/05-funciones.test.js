import { getUser, getUsuarioActivo } from '../../base/05-funciones';
import '@testing-library/jest-dom';


describe('pruebas de funciones', () => {
    test('debe de retornat un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user.uid).toEqual(userTest.uid)
    })

    test('to equal', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toEqual(userTest);
    })
    
    // get usuarioActivo

    test('prueba en la funf¡cion de getUsuarioActivo', () => {
        const userTest = {
            uid: 'ABC567',
            username: 'Alejandro'
        } ;
        const user = getUsuarioActivo('Alejandro');
        expect(user).toEqual(userTest);
    })

    test('pruebo las propiedas de la funcion getUsuarioActivo', () => {
        const nombre = 'Alex';
        const userActive = getUsuarioActivo(nombre);
        expect(userActive.username).toEqual(nombre);
    })
    
    
    
})