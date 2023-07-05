const readlineSync = require('readline-sync');

function obtenerJugadaComputadora() {
    let opciones = {0:"piedra", 1:"papel", 2:"tijeras"};
    let jugadaComputador = opciones[Math.floor(Math.random() * 3)];
    return jugadaComputador;
}

function obtenerJugadaUsuario() {
    let jugadaUsuario = readlineSync.question("Ingrese su eleccion (piedra, papel o tijeras): ");
    return jugadaUsuario;
}

function determinarGanador(obtenerJugadaComputadora, obtenerJugadaUsuario) {
    if ((obtenerJugadaUsuario === "piedra" && obtenerJugadaComputadora === "tijeras") ||
    (obtenerJugadaUsuario === "papel" && obtenerJugadaComputadora === "piedra") ||
    (obtenerJugadaUsuario === "tijeras" && obtenerJugadaComputadora === "papel")) {
        return "Gana el usuario";
    } else if ((obtenerJugadaComputadora === "piedra" && obtenerJugadaUsuario === "tijeras") ||
    (obtenerJugadaComputadora === "papel" && obtenerJugadaUsuario === "piedra") ||
    (obtenerJugadaComputadora === "tijeras" && obtenerJugadaUsuario === "papel")) {
        return "Gana la computadora";
    } else if (obtenerJugadaComputadora === obtenerJugadaUsuario){
        return "Empate";
    }
}

let jugadaComputador = obtenerJugadaComputadora();
let jugadaUsuario = obtenerJugadaUsuario();
let jugadorGanador = determinarGanador(jugadaComputador, jugadaUsuario);

console.log ("La computadora eligio: %s.", jugadaComputador);
console.log ("El usuario eligio: %s.", jugadaUsuario);
console.log ("El resultado fue: %s.", jugadorGanador);