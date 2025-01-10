/*Crear una lista de invitados
agregarInvitado(nombre): Agrega un nombre al Set de invitados.
eliminarInvitado(nombre): Elimina un nombre del Set.
mostrarInvitados(): Muestra todos los nombres en el Set.*/
//se definie la variable que ba almacenar 

//TO DO validacion si un nombre ya esta registrado

//conjunto de invitados
let invitados = new Set();

// Función para agregar un invitado
function agregarInvitado() {
    let nombre = prompt("Ingresa el nombre del invitado a agregar: ");
    if (nombre) {
        invitados.add(nombre);
        alert(`${nombre} ha sido agregado a la lista de invitados.`);
    }
}

// Función para eliminar un invitado
function eliminarInvitado() {
    let nombre = prompt("Ingresa el nombre del invitado a eliminar:");
    if (nombre){
        if (invitados.has(nombre)) {
            invitados.delete(nombre);
            alert(`${nombre} ha sido eliminado de la lista de invitados.`);
        } else {
            alert(`${nombre} no está en la lista de invitados.`);
        }
    }
}

// Función para mostrar todos los invitados
function mostrarInvitados() {
    if (invitados.size > 0) {
        let lista = "Lista de invitados:\n";
        invitados.forEach(invitado => {
            lista += invitado + "\n";
        });
        alert(lista);
    } else {
        alert("No hay invitados en la lista.");
    }
}

//funcion principal
function manejarInvitados() {
    let isActive = true;

    while (isActive) {
        let opcion = prompt("Elige una opción:\n1. Agregar invitado\n2. Eliminar invitado\n3. Mostrar lista de invitados\n4. Salir");

        switch (opcion) {
            case "1":
                agregarInvitado();
                break;
            case "2":
                mostrarInvitados();
                eliminarInvitado();
                break;
            case "3":
                mostrarInvitados();
                break;
            case "4":
                isActive = false;
                alert("¡Adiós!");
                break;
            default:
                alert("Opción no válida. Por favor, elige una opción válida.");
        }
    }
}

// funcion principal para ejecutar el problema
 manejarInvitados();