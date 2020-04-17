const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'IronMan',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reaccion alergica a las arañas'
    }
};


const buscarHeroe = ( id ) => {
    const heroe = heroes[id];

    return new Promise( (resolve, reject) => {

        if (heroe) {
            resolve( heroe);
        } else {
            reject(`No existe un heroe con el id ${id}`);
        }

    });

}

const buscarHeroeAsync = async ( id ) => {
    const heroe = heroes[id];
        if (heroe) {
            return heroe;
        } else {
            throw Error(`No existe un heroe con el id ${id}`);
        }
}


const heroeId1 = 'capi';
const heroeId2= 'spider';

buscarHeroeAsync(heroeId1).then( console.log );