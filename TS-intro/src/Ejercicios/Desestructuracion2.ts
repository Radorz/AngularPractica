

console.log('Hola Mundo! Palomon');

/*
    ===== Código de TypeScript =====
*/
/* Formas de variables*/

export interface Producto{
    desc: string;
    precio: number;
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}

const telefono: Producto = {
    desc: 'iphone x',
    precio: 1000
}

export function caculaISV( productos: Producto[]):[number, number]{

let total = 0;

productos.forEach((productos) =>{
    total += productos.precio;


})
return [total,total * 0.15]

}

const [total, isv] =caculaISV([telefono, tableta]);

console.log('Total:', total);
console.log('ISV:', isv );