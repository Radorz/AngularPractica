
console.log('Hola Mundo! Palomon');

/*
    ===== Código de TypeScript =====
*/
/* Formas de variables*/

class PersonaNormal{

    constructor(
        public nombre: string,
        public direccion:string
    ) {}
}

class Heroe extends PersonaNormal{

    constructor(
        public alterego: string,
        public edad:number,
        public nombrereal:string

    ) {
        super(nombrereal, 'Lo mina');
    }
}

const ironman = new Heroe ('IRONMAN',45,'TONY')

console.log(ironman);