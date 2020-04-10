
const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// while ( i < carros.length) { // Siempre que la condicion sea verdadera
//     console.log(carros[i]);
//     i++;
// }

while( carros[i]) {
    if ( i=== 1) {
        // break;
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}

console.warn('Do While');

let j = 10;

do { // Minimo entra 1 vez

    console.log(carros[j]);
    j++;

} while(carros[j]);