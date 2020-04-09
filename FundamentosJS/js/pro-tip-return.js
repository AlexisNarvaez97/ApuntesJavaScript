
// function crearPersona( nombre, apellido) {
//     return {
//         nombre,
//         apellido
//     }
// }

// Al retornar un objeto, indicar entre parentesis.
const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Alexis', 'Narvaez')
console.log(persona);


function imprimeArgumentos() {
    console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) => {
    // console.log({edad, args});
    return args;
}

const [vivo, casado, saludo] = imprimeArgumentos2(10, true, false, 'Hola');
console.log({vivo, casado, saludo});

const { apellido: nuevoApellido } = crearPersona('Alexis', 'Narvaez')
console.log({ nuevoApellido });

const tony = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};


// Destructuracion de argumentos 
// const imprimePropiedades = (personaje) => {

//     console.log(personaje.nombre);


// }

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});

}

imprimePropiedades(tony);
