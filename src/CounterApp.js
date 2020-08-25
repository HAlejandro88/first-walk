import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
    return (
        <Fragment>
            <h1>Counter App</h1>
            <h2>{ value }</h2>
            <button>+1</button>
        </Fragment>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}


export default CounterApp;