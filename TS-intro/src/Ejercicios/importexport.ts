import { caculaISV, Producto } from './Desestructuracion2';

console.log('Hola Mundo! Palomon');

/*
    ===== Código de TypeScript =====
*/
/* Formas de variables*/


const carritoCompras: Producto[] = [

    {
        desc: 'Telefono 1 ',
        precio: 100

    },
    {
        desc: 'Telefono 1 ',
        precio: 100

    }

];


const  [totals, isvs] = caculaISV(carritoCompras);

console.log('Total:', totals);
console.log('ISV:', isvs );