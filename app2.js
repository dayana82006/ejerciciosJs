
/*Eliminar duplicados de un arreglo*/
const numerosDuplicados = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 10];
const numerosUnicos = [...new Set(numerosDuplicados)];
const numerosArray = Array.from(numerosUnicos);
console.log(numerosArray);