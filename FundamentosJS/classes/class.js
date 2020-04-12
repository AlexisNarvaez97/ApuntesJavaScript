
class Persona {

    nombre;
    codigo;
    frase;

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;
    }

}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Hello');
const ironman = new Persona('Tony Stark', 'IronMan', 'Helouda');
console.log(spiderman);
console.log(ironman);