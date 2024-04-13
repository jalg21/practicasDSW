// Inicio: Asignar valores a num1 y num2
var num1 = 5;
var num2 = 8;

// Verificar si num1 no es mayor a num2
if (num1 <= num2) {
    alert("num1 no es mayor a num2");
} else {
    // Verificar si num2 es positivo
    if (num2 > 0) {
        alert("num2 es positivo");
    } else {
        // Verificar si incrementar uno en num1 lo hace mayor que num2
        if (++num1 < num2) {
            alert("Incrementar uno en num1 no lo hace mayor que num2");
        }
    }
}
// Fin