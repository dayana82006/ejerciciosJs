// Definimos el primer conjunto (A) con algunos valores
const conjuntoA = [1, 2, 3, 4, 5]; // conjunto A

// Definimos el segundo conjunto (B) con otros valores
const conjuntoB = [4, 5, 6, 7, 8]; // conjunto B

// Convertimos los arrays en conjuntos (Set) para que cada valor sea único
const conjuntoAset = new Set(conjuntoA);
const conjuntoBset = new Set(conjuntoB);

// Aquí intentamos obtener la intersección de ambos conjuntos.
const interseccionC = conjuntoAset.intersection(conjuntoBset);

// Convertimos el resultado de la intersección (que es un Set) en un array
const interseccionA = Array.from(interseccionC);

// Mostramos el resultado en consola
console.log(interseccionA); 
