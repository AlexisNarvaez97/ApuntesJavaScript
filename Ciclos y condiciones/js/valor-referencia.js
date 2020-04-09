// Todos los primitivos se pasan por valor.

let a = 10;
let b = a;

a = 30;

console.log({a, b});


// Todos los objetos se pasan por referencia
let juan = { nombre: 'Juan' };

// Operador Spread para romper valores por referencia
let ana = { ...juan };

ana.nombre = 'Ana';

console.log({ juan, ana});

const cambiarNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiarNombre(peter);

console.log({ peter, tony});

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

// const otrasFrutas = [...frutas];

// Para romper la referencia.
console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas]
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas})