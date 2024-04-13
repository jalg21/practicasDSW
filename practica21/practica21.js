var peso;
var opcion;
var peso_tierra = 9.81; // Asumiendo que el peso en la Tierra es de 9.81 m/s^2
var peso_marte = 0.38; // factor de conversión para Marte
var peso_jupiter = 2.34; // factor de conversión para Júpiter
var resultado;

// Solicitar al usuario que ingrese su peso en la Tierra
peso = parseFloat(prompt("Ingrese su peso en la Tierra (en kilogramos):"));

// Solicitar al usuario que elija un planeta
opcion = parseInt(prompt("Elija un planeta:\n1. Marte\n2. Júpiter"));

// Calcular el peso en el planeta seleccionado
if (opcion === 1 || opcion === 2) {
    switch (opcion) {
        case 1:
            resultado = peso * peso_marte / peso_tierra;
            alert("Su peso en Marte es: " + resultado.toFixed(2) + " kilogramos.");
            break;
        case 2:
            resultado = peso * peso_jupiter / peso_tierra;
            alert("Su peso en Júpiter es: " + resultado.toFixed(2) + " kilogramos.");
            break;
    }
} else {
    alert("No existe esa opción.");
}