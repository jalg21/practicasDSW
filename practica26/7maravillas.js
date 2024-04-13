// Declaración de un arreglo que contiene los nombres de los archivos de imágenes de las maravillas
let maravillas = ["chichen-itza.svg", "coliseo.svg", "cristo-rendentor.svg", "machu-picchu.svg", "muralla-china.svg","petra.svg","taj-mahal.svg"];

// Declaración de un arreglo que contiene las respuestas correctas para cada maravilla
let correcta = [1,0,2,1,2,0,1];

// Declaración de un arreglo bidimensional que contiene las opciones de respuesta para cada maravilla
let opciones = [];

// Inserción de arreglos de opciones en el arreglo "opciones"
opciones.push(["Machu Picchu", "Chichen Itza", "Coliseo"]);
opciones.push(["Coliseo", "Petra", "Cristo Redentor"]);
opciones.push(["Muralla China", "Taj Mahal", "Cristo Redentor"]);
opciones.push(["Petra", "Machu Picchu", "Taj Mahal"]);
opciones.push(["Chichen Itza", "Petra", "Muralla China"]);
opciones.push(["Petra", "Machu Pichu", "Chichen Itza"]);
opciones.push(["Coliseo", "Taj Mahal", "Cristo Redentor"]);

// Declaración de variables para el estado del juego
let posActual = 0; // Variable para llevar el seguimiento de la posición actual en el juego
let cantidadAcertadas = 0; // Variable para almacenar la cantidad de respuestas correctas

// Función que inicia el juego
function comenzarJuego(){
    posActual = 0; // Reinicia la posición actual a cero
    cantidadAcertadas = 0; // Reinicia la cantidad de respuestas correctas a cero
    // Oculta la pantalla inicial y muestra la pantalla de juego
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarMaravilla(); // Llama a la función para cargar la primera maravilla
}

// Función que carga una maravilla y sus opciones de respuesta
function cargarMaravilla(){
    // Verifica si ya se han mostrado todas las maravillas
    if(maravillas.length <= posActual){
        terminarJuego(); // Si sí, termina el juego
    }
    else{
        limpiarOpciones(); // Limpia las opciones de respuesta anteriores

        // Muestra la imagen de la maravilla actual y sus opciones de respuesta
        document.getElementById("imgMaravilla").src = "img/" + maravillas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

// Función que limpia el estilo de las opciones de respuesta
function limpiarOpciones(){
    // Restablece las clases CSS de las opciones y letras de respuesta
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

// Función que comprueba si una respuesta es correcta o incorrecta
function comprobarRespuesta(opElegida){
    // Verifica si la opción elegida coincide con la respuesta correcta para la maravilla actual
    if(opElegida==correcta[posActual]){ // Si coincide, la respuesta es correcta
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada"; // Aplica estilo de respuesta acertada al nombre
        document.getElementById("l" + opElegida).className = "letra letraAcertada"; // Aplica estilo de respuesta acertada a la letra
        cantidadAcertadas++; // Incrementa el contador de respuestas correctas
    }else{ // Si no coincide, la respuesta es incorrecta
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada"; // Aplica estilo de respuesta incorrecta al nombre
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada"; // Aplica estilo de respuesta incorrecta a la letra
        // Muestra la respuesta correcta resaltada
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++; // Avanza a la siguiente maravilla
    setTimeout(cargarMaravilla,1000); // Espera 1 segundo y carga la siguiente maravilla
}

// Función que termina el juego y muestra la pantalla final con los resultados
function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none"; // Oculta la pantalla de juego
    document.getElementById("pantalla-final").style.display = "block"; // Muestra la pantalla final
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas; // Muestra la cantidad de respuestas correctas
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas; // Muestra la cantidad de respuestas incorrectas
}

// Función que vuelve a la pantalla inicial
function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none"; // Oculta la pantalla final
    document.getElementById("pantalla-inicial").style.display = "block"; // Muestra la pantalla inicial
    document.getElementById("pantalla-juego").style.display = "none"; // Oculta la pantalla de juego
}