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

const heroeId1 = 'capi';
const heroeId2= 'spider';

// buscarHeroe(heroeId1).then( heroe => {
//     buscarHeroe(heroeId2).then( heroe2 => {
//         console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la mision`);
//     })
// });


// Promise.all([buscarHeroe(heroeId1), buscarHeroe(heroeId2)])
//         .then( ([heroe1, heroe2]) => {
//     // console.log('Promise.all', heroes);
//     console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
// }).catch( err => {
//     alert(err);
// });


const promesaLenta = new Promise(( resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa Lenta')
    }, 2000);
});

const promesaMedia = new Promise(( resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa Lenta')
    }, 1500);
});

const promesaRapida = new Promise(( resolve, reject) => {
    setTimeout(() => {
        resolve('Promesa Lenta')
    }, 1000);
});


Promise.race([promesaLenta, promesaMedia, promesaRapida]).then( console.log);


console.log('Fin de programa');