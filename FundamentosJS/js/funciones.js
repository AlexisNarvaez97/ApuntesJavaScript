
function saludar( nombre ) {
    console.log(arguments);
    console.log('Hola ' + nombre);
    // return 10;
    return  [1, 2, 3, 4 , 5];
}

const saludar2 = function (nombre) {
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre);
}

saludar('Alexis', 40, true);
// saludar2('Alex');
saludarFlecha();

const retornoDeSaludar = saludar();
console.log(retornoDeSaludar);

saludarFlecha2('Narvaez');

function sumar(a, b) {
    return a + b;
}

const sumar2  = (a, b) => {
    return a + b;
}

const sumar3 = (a, b ) => a + b;

console.log( sumar3(4,2));

function getAleatorio() {
    return Math.random();
}

// Funcion flecha

const getAleatorio2 = () => Math.random();

console.log( getAleatorio2());
