// Función para cambiar el color de fondo
function cambiarColorFondo() {
    const color = prompt("Ingrese un color en inglés para el fondo:");
    if (color) {
        document.body.style.backgroundColor = color;
    }
}

// Función para registrar hermanos
function registrarHermanos() {
    const cantidadDeHermanos = parseInt(prompt("Ingrese la cantidad de hermanos:"));
    
    if (isNaN(cantidadDeHermanos) || cantidadDeHermanos < 0) {
        alert("Por favor ingrese un número válido");
        return;
    }

    const gameArea = document.getElementById("game-area");
    gameArea.innerHTML = ''; // Limpiar área

    if (cantidadDeHermanos === 0) {
        gameArea.innerHTML = '<p>No tienes hermanos</p>';
        return;
    }

    const lista = document.createElement('ul');
    lista.className = 'hermanos-lista';

    for (let i = 0; i < cantidadDeHermanos; i++) {
        const hermano = prompt(`Ingresa el nombre del hermano ${i + 1}:`);
        if (hermano) {
            const li = document.createElement('li');
            li.textContent = hermano;
            lista.appendChild(li);
        }
    }

    gameArea.appendChild(lista);
}

// Función para crear bloques
function crearBloques() {
    const cantidadBloques = parseInt(prompt("¿Cuántos bloques quieres generar?"));
    
    if (isNaN(cantidadBloques) || cantidadBloques <= 0) {
        alert("Por favor ingresa un número válido mayor a 0");
        return;
    }

    const gameArea = document.getElementById('game-area');
    gameArea.innerHTML = ''; // Limpiar área existente
    
    for (let i = 0; i < cantidadBloques; i++) {
        const bloque = document.createElement('div');
        bloque.className = 'block';
        bloque.style.backgroundColor = generarColorAleatorio();
        gameArea.appendChild(bloque);
    }
}

function generarColorAleatorio() {
    const letrasHex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letrasHex[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función para jugar Yankenpo
function jugarYankenpo() {
    const eleccionUsuario = prompt("Elige: piedra, papel o tijera").toLowerCase();
    
    if (!["piedra", "papel", "tijera"].includes(eleccionUsuario)) {
        alert("Por favor, elige solo: piedra, papel o tijera");
        return;
    }
    
    const eleccionComputadora = obtenerEleccionComputadora();
    const resultado = determinarGanador(eleccionUsuario, eleccionComputadora);
    
    const gameArea = document.getElementById("game-area");
    gameArea.innerHTML = `
        <div class="resultado ${resultado}">
            <p>Tu elección: ${eleccionUsuario}</p>
            <p>Computadora: ${eleccionComputadora}</p>
            <p>Resultado: ${resultado.toUpperCase()}</p>
        </div>
    `;
}

function obtenerEleccionComputadora() {
    const opciones = ["piedra", "papel", "tijera"];
    return opciones[Math.floor(Math.random() * 3)];
}

function determinarGanador(eleccionUsuario, eleccionComputadora) {
    if (eleccionUsuario === eleccionComputadora) return "empate";
    
    if ((eleccionUsuario === "piedra" && eleccionComputadora === "tijera") ||
        (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
        (eleccionUsuario === "tijera" && eleccionComputadora === "papel")) {
        return "ganaste";
    }
    
    return "perdiste";
}

// Función para limpiar el área de juego
function limpiarArea() {
    document.getElementById("game-area").innerHTML = '';
}
