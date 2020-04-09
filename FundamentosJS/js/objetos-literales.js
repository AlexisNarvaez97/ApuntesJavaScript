
const personaje = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.023,
        lng: -112.32,
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '123132, 232332',
        ubicacion: 'Malibu, California'
    }
};

console.log(personaje);

console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Coords', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log('No. Trajes:', personaje.trajes.length);
console.log('Ultimo Traje:', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

// Mas detalles.

// Borrar propiedad de un objeto

delete personaje.edad;

personaje.casado = true;

console.log(personaje);


// Objeto convertido como un array.
const entriesPares = Object.entries(personaje);
console.log(entriesPares);


Object.freeze(personaje);

personaje.dinero = 10000;
console.log(personaje);

// Listado de todas las propiedades de un objeto

const propiedades = Object.getOwnPropertyNames(personaje);

const valores = Object.values(personaje);

console.log({propiedades, valores});

