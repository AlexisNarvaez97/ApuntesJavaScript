// Metodos de arreglos


let juegos = ['Zelda', 'Mario', 'Metroid', 'Chorono'];

console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length-1];

console.log({ primero, ultimo });

// Ejecuta una instruccion por cada elemento del array
juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});


// Insertar un nuevo valor a un arreglo
let nuevaLongitud = juegos.push('F-Zero');
console.log({ nuevaLongitud, juegos});


// Insertar un nuevo valor a un arreglo pero al principio.
nuevaLongitud = juegos.unshift('Fire');
console.log({ nuevaLongitud, juegos});

// Borrar el ultimo valor de un array
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});


// Borrar cierta posicion de un arreglo.
let pos = 1;
console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2);

console.log({juegosBorrados, juegos});


// Buscar un indice en un array
let metroidIndex = juegos.indexOf('Metroid'); 
console.log({metroidIndex});