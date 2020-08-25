import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import '@testing-library/jest-dom';
import heroes from '../../data/heroes';


describe('Prueba en funciones de heroes', () => {
    test('debe retonat un heroe por el id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        console.log(heroe);

        const heroeData = heroes.find( $heroe => $heroe.id === id);
        expect(heroe).toEqual(heroeData);
    })

    test('debe retornar un undefine si el heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        
        expect(heroe).toBe(undefined)
    })
})

describe('Prueba de funcion de filter', () => {
    test('probando a funcion filter con DC', () => {
        const owner = 'DC';
        const heroesData = getHeroesByOwner(owner);

        const heroesFiltrados = heroes.filter(h => h.owner === owner);
        expect(heroesData).toEqual(heroesFiltrados);
    })

    test('probando el lenght de un array', () => {
        const owner = 'Marvel';
        const heroesFitering = getHeroesByOwner(owner);

        expect(heroesFitering.length).toEqual(2); // toBe puede ser aqui tambien
    })
    
    
})