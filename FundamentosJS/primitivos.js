// En Javascript todo es un objeto excepto los primitivos.

// Strings
let nombre = 'Peter Parker';
console.log(nombre);

nombre = 'Ben Parker';
console.log(nombre);

nombre = "Tía May";
nombre = `Alexis Narvaez`;
console.log(nombre);

// Conocer el tipo de la variable
console.log( typeof(nombre));

// Booleanos

let esMarvel = true;
console.log( typeof esMarvel);

console.log(esMarvel);

// Numbers

let edad = 33;
console.log( typeof(edad));


// Undefined 
let superPoder;
console.log( typeof(superPoder));

// Null
let soyNull = null;
console.log( typeof(soyNull)); // Object


// Symbol 

// Permiten crear identificadores unicos a JS
let symbol1 = Symbol('a');
let symbol2 = Symbol('b');

console.log( typeof(symbol1));

console.log( symbol1 === symbol2);