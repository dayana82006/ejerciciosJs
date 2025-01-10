

/*Contar palabras Unicas
 Dado un texto, crea una función llamada contarPalabrasUnicas 
 que cuente cuántas palabras únicas hay en el texto.*/
 let texto = "Hola mundo cruel mundo de JavaScript";
 texto = texto.split(" ");
 
 function contarPalabrasUnicas() {
   const textoS = new Set(texto);
   console.log(textoS.size);
 }
 console.log(contarPalabrasUnicas(texto));