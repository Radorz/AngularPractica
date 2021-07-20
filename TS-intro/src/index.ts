

/*
    ===== Código de TypeScript =====
*/
/* Formas de variables*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero ={
    nombre: 'La pampara'
}

const pasajero2: Pasajero ={
    nombre: 'tokisha',
    hijos: ['Natalia', 'Gabriel']
}


function imprimeHijos( pasajero: Pasajero): void{

const cuantoshijos= pasajero2.hijos?.length || 0;
console.log (cuantoshijos);
}