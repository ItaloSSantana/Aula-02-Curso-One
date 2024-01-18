let numeroSecreto = gerarNumeroAleatorio(10);

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do Número Secreto');
exibirTextoNaTela('p','Escolha um número de 1 a 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
     console.log('acertou');
     } else {
        console.log('tente novamente');
     }
    
}

function gerarNumeroAleatorio(cap) {
    return parseInt(Math.random() * cap + 1)
}

