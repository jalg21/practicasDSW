
document.addEventListener("DOMContentLoaded", function() {
    // Arreglo con los días de la semana
    var diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  
    // Obtener el elemento ul donde se mostrarán los días
    var listaDias = document.getElementById('lista-dias');
  
    // Recorrer el arreglo de días y agregarlos como elementos de lista
    for (var i = 0; i < diasSemana.length; i++) {
      var li = document.createElement('li');
      li.textContent = diasSemana[i];
      listaDias.appendChild(li);
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    var numero = 1;
    var suma = 0;
    var desglose = "";
  
    // Bucle while para sumar los números del 1 al 5
    while (numero <= 5) {
      // Desglose de números y suma parcial
      desglose += numero;
      suma += numero;
      numero++;
  
      // Añadir "+" si no es el último número
      if (numero <= 5) {
        desglose += " + ";
      }
    }
  
    // Mostrar el desglose y el resultado en el párrafo con id "resultado"
    document.getElementById('resultado').textContent = "SUMA: " + desglose + " = " + suma;
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var numero = 5;
    var factorial = 1;
    var desglose = "";
  
    // Bucle do-while para calcular el factorial del número 5
    do {
      factorial *= numero;
      desglose += numero;
      if (numero > 1) {
        desglose += " * ";
      }
      numero--;
    } while (numero > 0);
  
    // Mostrar el desglose y el resultado en el párrafo con id "resultado"
    document.getElementById('resultado2').textContent = "Factorial de 5: " + desglose + " = " + factorial;
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var resultado = document.getElementById('resultado3');
    var mensaje = "";
  
    // Bucle for para mostrar el mensaje "Hola" siete veces
    for (var i = 1; i <= 7; i++) {
      if (i === 4) {
        mensaje += "Soy el 4to. ";
      }
      mensaje += "Hola";
      if (i !== 7) {
        mensaje += ", ";
      } else {
        mensaje += ". Acabamos de saludar.";
      }
    }
  
    // Mostrar el mensaje en el elemento con id "resultado"
    resultado.textContent = mensaje;
  });

   // Arreglo con los primeros 11 meses del año
   const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'];

   // Ejemplo con for-in
   const forInList = document.getElementById('forInList');
   for (let index in meses) {
     const li = document.createElement('li');
     li.textContent = `${index}: ${meses[index]}`;
     forInList.appendChild(li);
   }

    // Ejemplo con for-of
    const forOfList = document.getElementById('forOfList');
    let i = 0;
    for (let mes of meses) {
      const li = document.createElement('li');
      li.textContent = `${i}: ${mes}`;
      forOfList.appendChild(li);
      i++;
    }

   // Ejemplo con forEach
   const forEachList = document.getElementById('forEachList');
   meses.forEach(function(mes, index) {
     const li = document.createElement('li');
     li.textContent = `${index}: ${mes}`;
     forEachList.appendChild(li);
   });

  // Arreglo con los primeros 11 meses del año, omitiendo julio
const meses2 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'];

// Agregar diciembre fuera del arreglo
meses2.push('Diciembre');

// Mostrar todos los meses, incluyendo diciembre, pero omitiendo julio
const mesesList = document.getElementById('mesesList');
let i2 = 1;
for (let mes of meses2) {
  if (mes !== 'Julio') {
    const li = document.createElement('li');
    li.textContent = `${i2}: ${mes}`;
    mesesList.appendChild(li);
    i2++;
  }
}

// Arreglo con los primeros 11 meses del año, omitiendo julio
const meses3 = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre'];

// Agregar diciembre fuera del arreglo
const diciembre = 'Diciembre';



const mesesList2 = document.getElementById('mesesList2');
for (let i = 0; i < meses.length; i++) {
  const mes = meses[i];
  if (mes !== 'Julio') {
    const li = document.createElement('li');
    li.textContent = `${i + 1}: ${mes}`;
    mesesList2.appendChild(li);
  }
}



// Mostrar diciembre
const liDiciembre = document.createElement('h4');
liDiciembre.textContent = `${meses3.length +2}: ${diciembre}`;
mesesList2.appendChild(liDiciembre);




