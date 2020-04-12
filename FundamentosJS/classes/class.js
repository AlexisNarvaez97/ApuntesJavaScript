
class Persona {

    nombre= '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Hello');
const ironman = new Persona('Tony Stark', 'IronMan', 'Helouda');
console.log(ironman);

spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pay de cereza de la tía May';

console.log(spiderman.getComidaFavorita);
console.log(spiderman);