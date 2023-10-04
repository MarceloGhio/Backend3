/*-----------------------------NULLISH ----------------*/
//falsey values :
//0, null, undefined, false, NaN, ``
const var1 = null;
if (var1) console.log(`ok`);

let altura = 100;
//console.log(altura || 100);
console.log(altura ?? 1000);

/*-----------------------------VARIABLES PRIVADAS ----------------*/

class Person {
    #fullName  //con # declaramos la variable privada
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
        this.#fullName = `${firstname} ${lastname}`;
    }

    getFullName() {
        return this.#fullName;
    };
    
};

const person = new Person(`Juan`, `Perez`);
console.log(person.getFullName()); //me deviuelve juan perez
// console.log(person.#fullName); // no se puede obtener xq esta encapsulada dentro de la clase, es decir se puede utilizar dentro de la clase pero no x fuera
