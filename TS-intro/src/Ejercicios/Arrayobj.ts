

console.log('Hola Mundo! Palomon');

/*
    ===== Código de TypeScript =====
*/
/* Formas de variables*/


let habilidadess: string[] = ['pata','cocotazo','fuetazo'];

interface Personaje {
    nombre: string;
    hp: number;
    habalidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje={
    nombre: 'Cherry',
    hp: 50,
    habalidades: habilidadess,
}

personaje.puebloNatal = 'Los mina'

console.table(personaje);