

console.log('Hola Mundo! Palomon');

/*
    ===== Código de TypeScript =====
*/
/* Formas de variables*/

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;

}

interface Detalles{

    autor: string;
    anio:number;
}

const reproductor : Reproductor ={

    volumen:90,
    segundo:36,
    cancion:'Mess',
    detalles:{
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const {volumen, segundo, cancion, detalles} = reproductor;
const {autor} = detalles;


const dbz: string[]= ['goku', 'Vegeta', 'Trunks'];
const [, , p3] = dbz;


console.log('Personaje 3 : ', p3);