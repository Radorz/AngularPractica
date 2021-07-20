

console.log('Hola Mundo! Palomon');

/*
    ===== Código de TypeScript =====
*/
/* Formas de variables*/

function sumar(a: number, b:number):number{

    return a+b;
}

const sumarflecha =(a: number, b:number):number =>{

return a+b;
 
}

function multiplicar(numero:number, otronumero?:number, base:number=2):number{

    return numero * base;
}

interface PersonajeLORD{
    nombre: string;
    pv: number;
    mostrarhp: () => void;
}

const newPersonaje: PersonajeLORD = {
    nombre:'lola',
    pv: 50,
    mostrarhp(){
        console.log(this.pv)
    }
}

function curar(personaje: PersonajeLORD, puntosCurar: number): void {
    personaje.pv +=puntosCurar;
    console.log(personaje)
}

curar(newPersonaje,20);
newPersonaje.mostrarhp();
const resultado = sumar(2,10);

console.log(resultado);