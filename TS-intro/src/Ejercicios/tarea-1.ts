

console.log('Hola Mundo! Palomon');

/*
    ===== Código de TypeScript =====
*/
/* Formas de variables*/

interface SuperHeroe{
    nombre: string;
    edad: number;
    direccion: Direccion,
    mostrarDireccion:()=>String;
}
interface Direccion{

    calle: string,
    pais: string,
    ciudad:string
}



const superheroe:SuperHeroe ={
    nombre:'Spiderman',
    edad: 50,
    direccion: {
        calle:"Main St",
        pais: 'Usa',
        ciudad: 'NY'
    },
    mostrarDireccion(){
    return this.nombre+', '+this.direccion.ciudad+ ', ' + this.direccion.pais;
    }

}