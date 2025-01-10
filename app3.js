
/*Ejercicio 3: Verificar elementos únicos */

//funcion que verifica si tiene numeros duplicados
function tieneDuplicados(array) {
    //compara y retorna el valor de si tiene o no duplicados
    return new Set(array).size != array.length; 
  }
  //llama la funcoin y se le pasa el valor que quiere comparar
  tieneDuplicados([1, 2, 3, 4, 5]);
  