let amigos = [];

function adicionarAmigo() {
    let nombre = document.getElementById('nombreAmigo').value;
    if (nombre.trim() === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    
    amigos.push(nombre);
    actualizarLista();
    document.getElementById('nombreAmigo').value = '';
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe haber al menos dos amigos en la lista para sortear.');
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];
    
    document.getElementById('resultado').textContent = amigoSecreto;
}

function actualizarLista() {
    let listaHTML = amigos.join(', ');
    document.getElementById('listaAmigos').textContent = listaHTML;
}

document.getElementById('adicionar').addEventListener('click', adicionarAmigo);
document.getElementById('sortear').addEventListener('click', sortearAmigo);