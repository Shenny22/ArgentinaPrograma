const readlineSync = require("readline-sync");
const numero = readlineSync.question("Ingrese un numero entero del 1 al 12: ");
let mes = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let cantidadDeDias = {enero: 31, febrero: 28, marzo: 31, abril: 30, mayo:31, junio: 30, julio: 31, agosto: 31, septiembre: 30, octubre: 31, noviembre: 30, diciembre: 31};
if (numero == 1){
    console.log(`La cantidad de dias del mes de  ${mes[0]} es ${cantidadDeDias.enero}`);
} else if (numero == 2){
    console.log(`La cantidad de dias del mes de ${mes[1]} es ${cantidadDeDias.febrero}`);
} else if (numero == 3){
    console.log(`La cantidad de dias del mes de ${mes[2]} es ${cantidadDeDias.marzo}`);
} else if (numero == 4){
    console.log(`La cantidad de dias del mes de ${mes[3]} es ${cantidadDeDias.abril}`);
} else if (numero == 5){
    console.log(`La cantidad de dias del mes de ${mes[4]} es ${cantidadDeDias.mayo}`);
} else if (numero == 6){
    console.log(`La cantidad de dias del mes de ${mes[5]} es ${cantidadDeDias.junio}`);
} else if (numero == 7){
    console.log(`La cantidad de dias del mes de ${mes[6]} es ${cantidadDeDias.julio}`);
} else if (numero == 8){
    console.log(`La cantidad de dias del mes de ${mes[7]} es ${cantidadDeDias.agosto}`);
} else if (numero == 9){
    console.log(`La cantidad de dias del mes de ${mes[8]} es ${cantidadDeDias.septiembre}`);
} else if (numero == 10){
    console.log(`La cantidad de dias del mes de ${mes[9]} es ${cantidadDeDias.octubre}`);
} else if (numero == 11){
    console.log(`La cantidad de dias del mes de ${mes[10]} es ${cantidadDeDias.noviembre}`)
} else if (numero == 12){
    console.log(`La cantidad de dias del mes de ${mes[11]} es ${cantidadDeDias.diciembre}`);
}
