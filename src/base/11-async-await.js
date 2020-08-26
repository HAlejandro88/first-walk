

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {

        const resp   = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
        const { data } = await resp.json(); 

        const { title } = data;

        return title;

    } catch (error) {
        // manejo del error
        return 'no existe';
    }
    
    
    
}




