// Ejercicio 2
const readlineSync = require('readline-sync');

let numeroEntero = readlineSync.question("Ingrese un numero entero entre 1 y 12: ");
let meses= [0, "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let num = parseInt(numeroEntero);

if(num === 1 || num === 3 || num === 5 || num === 7
    || num === 8 || num === 10 || num === 12) {
    console.log(`La cantidad de dias del mes de ${meses[numeroEntero]} es 31`);
} else if(num === 4 || num === 6 
    || num === 9 || num === 11) {
    console.log(`La cantidad de dias del mes de ${meses[numeroEntero]} es 30`);
} else{
   console.log("La cantidad de dias del mes de febrero es 28");
}