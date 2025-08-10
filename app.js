// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");


function agregarAmigo() {
    if(inputAmigo.value ==""){
        alert("Ingresa un nombre valido")
    }
    listaAmigos.push(inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;

    limpiarCaja();
};


function limpiarCaja(){
    document.querySelector('#amigo').value = '';  
}

function sortearAmigo() {
    const randon = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[randon];
    ulResultado.innerHTML = `<li> El amigo secreto es: ${amigoSecreto}</li>`

    //Limpia la lista de la vista
    ulListaAmigos.innerHTML = "";
}
