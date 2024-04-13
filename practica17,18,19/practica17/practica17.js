//atributos
var numero1 = 10;
var numero2 = 5;

var suma1 = numero1 + numero2;
var resta1 = numero1 - numero2;
var multiplicacion1 = numero1 * numero2;
var division1 = numero1 / numero2;

// ingresar datos
var num1 = parseFloat(prompt("Ingrese el primer número:"));
var num2 = parseFloat(prompt("Ingrese el segundo número:"));

var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;

// Mostrar resultados
alert("Operaciones con datos predefinidos:\n" +
    "Suma: " + suma1 + "\n" +
    "Resta: " + resta1 + "\n" +
    "Multiplicación: " + multiplicacion1 + "\n" +
    "División: " + division1 + "\n\n" +
    "Resultado de operacion Ingresada por el usuario:\n" +
    "Suma: " + suma + "\n" +
    "Resta: " + resta + "\n" +
    "Multiplicación: " + multiplicacion + "\n" +
    "División: " + division);