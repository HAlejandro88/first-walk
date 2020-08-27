import React from 'react';
import CounterApp from '../CounterApp';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

describe('Prubas en el <CounterApp />', () => {
    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
         wrapper = shallow(<CounterApp />);
    })

    test('debe de mostrar e counter app correcatemnet', () => {
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={100} />);
        const counterText =  wrapper.find('h2').text().trim();
        expect(counterText).toBe('100')
    });

    test('debe de incremetar en 1 con el boton +1', () => {
        const wrapper = shallow(<CounterApp value={10} />);
        wrapper.find('button').at(0).simulate('click');
        const counterText =  wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
    });

    test('debe de decrementar en 1 con el boton -1', () => {
        const wrapper = shallow(<CounterApp value={10} />);
        wrapper.find('button').at(2).simulate('click');
        const counterText =  wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    });

    test('debe de colocar el valor por defecto el boton reset ', () => {
        const wrapper = shallow(<CounterApp value={105} />);

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText =  wrapper.find('h2').text().trim();

        expect(counterText).toBe('105');
       
    });
})