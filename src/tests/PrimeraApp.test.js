import React from 'react';
import PrimeraApp from '../PrimeraApp';
/* import { render } from '@testing-library/react'; */
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'; // todo el dom 




describe('pruebas en la <PrimeraApp>', () => {
    /* test('demostrar le mensaje Hola soy alex', () => {
        const saludo = 'Hola soy alex';
        const { getByText }  = render(<PrimeraApp saludo={ saludo }/>);
        expect(getByText(saludo)).toBeInTheDocument();
    }); */

    test('debe de mostrar el compomnente <PrimeraApp> correctaemnte', () => {
        const saludo = 'Hola soy alex';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        expect(wrapper).toMatchSnapshot();
    });

    /* test('debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola soy alex';
        const subTitulo = 'propiedad por default';

        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={ subTitulo } />);
        
        const textoParrafo = wrapper.find('p').text();
        expect( textoParrafo ).toBe(subTitulo);
    }); */
});