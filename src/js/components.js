import '../css/components.css';

export const saludar = ( nombre ) => {

    const h1 = document.createElement('h1');

    h1.innerText = `Hola mi nombre soy, ${ nombre }`;

    document.body.append (h1);
}

