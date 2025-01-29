// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const nombres = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    if (!input.value.trim()) {
        mostrarMensajeError("No se puede añadir un nombre vacío.");
        return;
    }

    nombres.push(input.value.trim());
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length === 0) {
        mostrarMensajeError("Debe agregar al menos un nombre para sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * nombres.length);
    const amigoSecreto = nombres[indiceSorteado];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto sorteado es: <strong>${amigoSecreto}</strong>`;
    
    nombres.length = 0;
    actualizarLista();
}

function mostrarMensajeError(mensaje) {
    alert(mensaje); 
}
