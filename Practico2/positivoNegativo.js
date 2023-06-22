// Ejercicio 1b)
const readlineSync = require ("readline-sync");
const numero = readlineSync.question("Ingrese un numero: ");

if (numero > 0){
    console.log("El número es positivo");
} else if (numero < 0){
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
}