

const alexis = {
    nombre: 'Alexis',
    edad: 22,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${ this.edad }`);
    }
}

const eduardo = {
    nombre: 'Eduardo',
    edad: 25,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${ this.edad }`);
    }    
}


function Persona(nombre, edad) {
    console.log('Se ejecutó esta línea');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - edad: ${ this.edad }`);
    }   
}

const maria = new Persona('María', 18);
const alex = new Persona('Alexis', 23);
console.log(maria);
maria.imprimir();
alex.imprimir();