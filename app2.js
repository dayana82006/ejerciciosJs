
/*Eliminar duplicados de un arreglo*/
const numerosDuplicados = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 10]; //conjunto de numeros duplicados
const numerosUnicos = [...new Set(numerosDuplicados)]; //convierte el array en conjunto
const numerosArray = Array.from(numerosUnicos); //convierte conjunto en array
console.log(numerosArray); //muestra en consola el array sin numero duplicados