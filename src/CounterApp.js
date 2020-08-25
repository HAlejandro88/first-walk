import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(value); // Destructuro el hook de useState que viene el valor y funcion del Valor
    

    const handleAdd = e => setCounter(counter + 1);

    const handleSubstract = (e) => {
        setCounter( c => c - 1 );
    }
    const handleReset = e => setCounter(value);

    return (
        <Fragment>
            <h1>Counter App</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </Fragment>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}


export default CounterApp;