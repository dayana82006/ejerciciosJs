
/*Ejercicio 3: Verificar elementos únicos */
function tieneDuplicados(array) {
    return new Set(array).size != array.length;
  }
  tieneDuplicados([1, 2, 3, 4, 5]);
  