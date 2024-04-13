
function OperacionesMatematicas(operacion, a, b) {
    // Variable para almacenar el resultado
    var resultado;

    // Realizar la operación matemática según el valor de "operacion"
    switch (operacion) {
        case "sumar":
            resultado = a + b;
            break;
        case "restar":
            resultado = a - b;
            break;
        case "multiplicar":
            resultado = a * b;
            break;
        case "dividir":
            // Verificar si el divisor es 0 para evitar una división por cero
            if (b !== 0) {
                resultado = a / b;
            } else {
                alert("Error: división por cero");
                return;
            }
            break;
        case "residuo":
            // Verificar si el divisor es 0 para evitar una división por cero
            if (b !== 0) {
                resultado = a % b;
            } else {
                alert("Error: división por cero");
                return;
            }
            break;
        default:
            alert("Operación no válida");
            return;
    }

    // Mostrar el resultado en una alerta
    alert("El resultado de la operación " + operacion + " es: " + resultado);
}

// Ejemplos de uso
OperacionesMatematicas("sumar", 5, 3);
OperacionesMatematicas("restar", 10, 4);
OperacionesMatematicas("multiplicar", 6, 2);
OperacionesMatematicas("dividir", 10, 2);
OperacionesMatematicas("residuo", 11, 4);
OperacionesMatematicas("potencia", 2, 3);
