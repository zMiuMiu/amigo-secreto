//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === '') {
        alert('Insira o nome do seu amigo!');
        return;
    }

    amigos.push(nome);
    input.value = '';
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para realizar o sorteio!');
    }

    if (amigos.length < 3) {
        alert('Adicione pelo menos três amigos para realizar o sorteio!');
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];
    exibirResultado(amigoSorteado);
}

function exibirResultado(amigoSorteado) {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado foi: <b>${amigoSorteado}</b>`;
}

function limparResultado() {
    document.getElementById('resultado').innerHTML = '';
}

function atualizarJogo() {
    amigos = [];
    atualizarLista();
    limparResultado();
    document.getElementById('amigo').value = '';
}