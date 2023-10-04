/*--------------------------------EXPONENCIAL--------------------------*/

const expEs6 = Math.pow(2, 3); // 2 * 2 * 2 (se pone la base en este caso 2 y el siguiente es el exponencial, ej 3)
const expEs7 = 2 ** 3;

console.log(expEs6);
console.log(expEs7);

/*--------------------------------INCLUDES----------------------------*/

const array = [1,2,3,4,5,6];
console.log('Existe dentro del arreglo: ', array.includes(5));
console.log('No existe dentro del arreglo: ', array.includes(8));

//si queremos verificar si existe una prop adentro de un obj podemos usar el metodo find o sonme...
const users = [
    {name: 'Juan', age : 50},
    {name: 'Marcos', age : 40},
    {name: 'Pepe', age : 30}
];
//si queremos verificar si alguna persona tiene la edad de 40 x ej, creamos variable y usamos metodo search
const ageSearch = 40;
//usamos users.some y le pasamos una funcion callback, que nos devuelve true or false, y el find nos devuelve el valor encontrado.
const userSearch = users.some((user) => {     //Retorna buleano TRUE or FLASE
    return user.age === ageSearch;
});
//----------------------------------------------------------------
//METODO FIND que me devuelve el objeto que coincide cno la busqueda
const userSearch2 = users.find((user) => {     //Retorna el OBJETO
    return user.age === ageSearch;
});
console.log(userSearch2);

//---------------------------------------------------------------

if (userSearch) console.log(`Existe una persona cona la edad de ${ageSearch}`);
else console.log(`No existe persona con tal edad`);
