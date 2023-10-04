/*-----------------------------SPREAD OPERATOR----------------------------*/
//Manipulamos arreglos con spread "..." como agregar num a la lista, sumar prop a un obj.

const array = [1,2,3,4,5,6];
console.log(...array);
//Math.min() nos permite buscar el minimo entre los numeros que estan dentro de este array x ej (), pero el metodo MATH.min solo recibe num por loq ue lo solucionamos con el SPREAD OPERATOR que es agregar "..." delante del objeto
console.log(Math.min(...array));
//sumamos prop a un array, con "...array" traemos el array y a partir de ahi sumamjos props
const array2 = [...array, 7, 8, 9]

console.log(array2);
//usamos spread en creacion de objetos
const obj1 = {
    a: 1,
    b: 2,
    c: 3
};
//
const obj2 = {
    ...obj1,
    d: 4
};

console.log(obj2);

/*-----------------------------------------REST OPERATOR------------------------------*/
//Se utiliza cuando no sabemos la cant de parametros que va a recibir una funcion por ej:
const myFun1 = (a, b, ...otherParams) => {
    //lo muestro
    console.log(a);
    //lo muestro
    console.log(b);
    //nos devuelve un array
    console.log(otherParams);
    
}
console.log(`-------------------------------------`)
//si ejecuto la funcion y le paso el valor que desee
myFun1(1, 2, `hola`, [], 4)
//TODO esto nos devuelve el valor a, b, y en un array los otros parametros como el sting, array, y numero juntos dentro de este ultimo
