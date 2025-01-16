//const edad = prompt ("Ingrese su edad");
// convertidor de letra en numero
//const edadNumber = parseInt(edad);
//const nombre = prompt("Ingresa tu nombre");
//const pregunta = prompt("¿Visitas Lima por primera vez? (si/no)").toLowerCase();
//if (edad < 18) {
    //document.write("<div class='banner'>Recuerda visitar los lugares con un adulto</div>");

//let confirmacion = window.confirm("¿Quiere suscribirse a la informacion de nuestro boletin?");}

const backgrounColor = prompt("Ingrese un color (en ingles) este sera el color de fondo de la pagina" 
);
    document.body.style.backgroundColor = backgrounColor;

    function registrarHermanos() {
    
        const cantidadDeHermanos = parseInt(prompt("Ingrese la cantidad de hermanos")) ;
        
        const nombresDeHermanos =[];
        
        let contador = 0;
        
        while (contador < cantidadDeHermanos) {
            const hermano = prompt("Ingresa el nombre del hermano" + contador);
            nombresDeHermanos.push(hermano);
            contador ++;
            
        console.log(nombresDeHermanos);
        }
    }

    

    // Función para crear los bloques
    function crearBloques() {
        // Pedir al usuario la cantidad de bloques
        const cantidadBloques = parseInt(prompt("¿Cuántos bloques quieres generar?"));
        
        // Validar que sea un número válido
        if (isNaN(cantidadBloques) || cantidadBloques <= 0) {
            alert("Por favor ingresa un número válido mayor a 0");
            return;
        }

        // Obtener el contenedor
        const container = document.getElementById('blockContainer');
        
        // Crear los bloques
        for (let i = 0; i < cantidadBloques; i++) {
            // Crear nuevo div
            const bloque = document.createElement('div');
            
            // Agregar clase y color aleatorio
            bloque.className = 'block';
            bloque.style.backgroundColor = generarColorAleatorio();
            
            // Agregar al contenedor
            container.appendChild(bloque);
        }

        function generarColorAleatorio() {
            const letrasHex = '0123456789ABCDEF';
            let color = '#';
            
            // Generamos 6 caracteres para el código hexadecimal
            for (let i = 0; i < 6; i++) {
                color += letrasHex[Math.floor(Math.random() * 16)];
            }
            
            return color;
        }

    }


// Función principal del juego
function jugarYankenpo() {
    // Obtener elección del usuario
    let eleccionUsuario = prompt("Elige: piedra, papel o tijera").toLowerCase();
    
    // Validar entrada del usuario
    while (!["piedra", "papel", "tijera"].includes(eleccionUsuario)) {
        eleccionUsuario = prompt("Por favor, elige solo: piedra, papel o tijera").toLowerCase();
    }
    
    // Obtener elección de la computadora
    const eleccionComputadora = obtenerEleccionComputadora();
    
    // Determinar el ganador
    const resultado = determinarGanador(eleccionUsuario, eleccionComputadora);
    
    // Mostrar el resultado
    mostrarResultado(resultado, eleccionUsuario, eleccionComputadora);
}
        
// Función para generar la elección aleatoria de la computadora
function obtenerEleccionComputadora() {
    // Generar número aleatorio entre 0 y 2
    const numeroAleatorio = Math.floor(Math.random() * 3);
    
    // Convertir número a elección
    switch(numeroAleatorio) {
        case 0: return "piedra";
        case 1: return "papel";
        case 2: return "tijera";
    }
}

// Función para determinar el ganador
function determinarGanador(eleccionUsuario, eleccionComputadora) {
    if (eleccionUsuario === eleccionComputadora) {
        return "empate";
    }
    
    if (
        (eleccionUsuario === "piedra" && eleccionComputadora === "tijera") ||
        (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
        (eleccionUsuario === "tijera" && eleccionComputadora === "papel")
    ) {
        return "ganaste";
    }
    
    return "perdiste";
}

// Función para mostrar el resultado en la página
function mostrarResultado(resultado, eleccionUsuario, eleccionComputadora) {
    const divResultado = document.getElementById("resultado");
    let mensaje = `
        Tu elección: ${eleccionUsuario}<br>
        Computadora: ${eleccionComputadora}<br><br>
    `;

    if (resultado === "ganaste") {
        mensaje += "¡Felicitaciones, ganaste! 🎉";
    } else if (resultado === "perdiste") {
        mensaje += "¡Lo siento, perdiste! 😢";
    } else {
        mensaje += "¡Es un empate! 🤝";
    }

    divResultado.innerHTML = `<div class="resultado ${resultado}">${mensaje}</div>`;
}




    