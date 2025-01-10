
/*Interseccion de conjuntos*/
const conjuntoA = [1, 2, 3, 4, 5];
const conjuntoB = [4, 5, 6, 7, 8];

const conjuntoAset = new Set(conjuntoA);
const conjuntoBset = new Set(conjuntoB);

const interseccionC = conjuntoAset.intersection(conjuntoBset);

const interseccionA = Array.from(interseccionC);
console.log(interseccionA);