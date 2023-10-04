//trim() remueve los espacion inecesarios en una cadena de texto, nos sirve para validar cadenas enviadas como vacias o eliminar espacion finales o iniciales en un string
//array.flat remueve anidaciones internas n un array para dejar una array plano
//se añade la funcionalidad de los imports dinamicos en es10
/*--------------------------------------TRIM---------------------------------*/

const name1 = `       Andres      `;
const nameNormalized = name1.trim();
console.log(nameNormalized);

/*--------------------------------------FLAT---------------------------------*/

const array = [1, 2, [3, 4], [7, [8, 9]]];
console.log(array.flat());
// console.log(array.flat(2)); esto me devuelve el array en un solo nivel sino solo elimina solo el primero y no el segundo array dentro
