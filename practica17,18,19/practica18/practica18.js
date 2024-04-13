
//  arreglo vacío para almacenar los días de la semana
var diasSemana = [];

// Capturar los días de la semana
for (var i = 0; i < 7; i++) {
    // Solicitar al usuario que ingrese cada día de la semana
    var dia = prompt("Ingrese el día " + (i + 1) + " de la semana:");

    // Agregar el día ingresado al arreglo
    diasSemana.push(dia);
}

// Mostrar los días de la semana en un alert
alert("Los días de la semana son:\n" + diasSemana.join(", "));