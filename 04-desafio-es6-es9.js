const objects =[
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
];

//tenesmos q devolver array con claves pero hay rpetidos
const products = [];
let total = 0; //lo dejamos con let xq lo vamos a ir modificando

objects.forEach((item)=>{
    const keys = Object.keys(item);
    // console.log(keys);    //lo dejamos comentado para despues probarlo
    const values = Object.values(item);   //con esto obtenemos los VALORES de las prop (x)
    // console.log(values);
    //a keys hacemos recorrer el array de manzana pera carne etc para insertarla en el array de productos, entonces  en el medio debemos verificar si algun producto esta repetido con filter, map for of, otro forEach.
    //forEach(key*iterador que lo llamamos como queremos*) obtenemos la clave y x cada clave verificamos si en el array productos ya existe una clave con el mismo nombre
    keys.forEach((key)=>{
        //! es de negacion, por lo que dice, si no existe en el array de productos esa key con push lo guardo, entonces si no existe lo guardo si esxiste no hago nada
        if(!products.includes(key)) products.push(key);
    });
    //usamos for(x of x) y nos devuelve la suma de los valores
    for (const val of values) {
        total += val;
    };
})
console.log('total: ',total);
console.log('products: ' ,products);
