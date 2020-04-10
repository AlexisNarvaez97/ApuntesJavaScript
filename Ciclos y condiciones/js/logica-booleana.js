
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}


console.warn( 'Not o negacion');
console.log( true );
console.log( !true); 
console.log( !false );


console.log( !regresaTrue()); // false

console.warn('And');

console.log( true && true);
console.log( true && !false);

console.warn('OR');
console.log( true || false);
console.log( false || false );

console.log('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo';
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso';
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso';
console.log({a1, a2, a3, a4, a5});