import React, { Fragment } from 'react'; //imr
import PropTypes from 'prop-types';


const PrimeraApp = ({ saludo, subtitulo }) => {// Fragment // destructurar la propiedades

    
    return (
        <>
            <h1>{ saludo }</h1>
            <p>Mi primera aplicacion</p>
            <h4>{ subtitulo }</h4>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired // si pones el isRequired el valor debe de ir 
}


PrimeraApp.defaultProps = {
    subtitulo: 'propiedad por default'
}

export default PrimeraApp;