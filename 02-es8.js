const object = {
    //PROPIEDAD: VALOR,
    a :1,
    b: 2,
    c: 3,
    d: 4
};
//entries recibe el objeto, que declaramos, que nos devuelve un arreglo donde nos muestra prop y valor que tiene cada obj pero cada par de estos me los devuelve en otro array
console.log(Object.entries(object));  //obtenemos un arreglo en donde nos muestra propiedad y calor dentro de una array cada uno
//con Keys nos devuelve una array solo con las props, ej a,b,c,d., es util para listar prop de array de obj y recorremos el array y x cada obj le aplicamos el obj.keys()
console.log(Object.keys(object));   //Keys, obtenemos las prop dentro de este objeto (x)
//includes nos devuelve en este caso como TRUE xq dentro de object existe la prop 'a'
console.log(Object.keys(object).includes('a'));
//aca tenemos un array con los valores
console.log(Object.values(object));   //devuelve VALORESS dentro de (x)

//de object.entries(object); sabemos que obtenemos en cada posicion propiedad y valor. foreach , x ej de cada posicion agregarle una propiedad.
// const entries = Object.entries(object);
// entries.forEach((x))