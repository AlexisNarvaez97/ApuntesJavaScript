let a = 10;

if (a >= 10) {
  console.log("A e smayor o igual a 10");
} else {
  console.log("A es menor a 10");
}

const hoy = new Date();

// console.log({hoy});

let dia = hoy.getDay(); // 0 Domingo, 1 Lunes, 2 Martes

console.log({ dia });

// == NO TOMA EN CUENTA EL TIPO
// === EVALUA EL TIPO Y EL VALOR IDENTICO
if (dia === 0) {
  console.log("Domingo");
} else if ( dia === 1) {
    console.log('Lunes');
//   if (dia === 1) {
//     console.log("Lunes");
//   } else {
//     console.log("No es lunes ni domingo");
//   }
} else if (dia === 2) {
    console.log('Martes');
} else {
    console.log("No es lunes, martes o domingo");
}



// Laboratorio

dia = 3;

let diasSemana = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miercoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sabado'
};

console.log( diasSemana[dia]);