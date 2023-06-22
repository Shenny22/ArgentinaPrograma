// Ejercicio 3
const readlineSync = require('readline-sync');
let entero = readlineSync.question("Ingrese un numero entero: ");
let numero = parseInt(entero);

if(numero > 0 && (numero %2 == 0)) {
    console.log("El numero es positivo y par");
} else if(numero > 0 && (numero %2 == 1)) {
    console.log("El numero es positivo e impar");
} else if(numero < 0){
    console.log("El numero es negativo");
} else {
    console.log("El numero es cero");
}