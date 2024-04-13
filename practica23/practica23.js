

function verificarParImpar() {
    var numero = parseInt(prompt("Ingrese un número:"));

    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    var resultadoParImpar = esPar(numero) ? "par" : "impar";
    alert("El número ingresado es " + resultadoParImpar + ".");
}

function esPar(numero) {
    return numero % 2 === 0;
}

verificarParImpar();