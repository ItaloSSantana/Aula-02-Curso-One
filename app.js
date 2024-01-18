let numeroSecreto = gerarNumeroAleatorio(10);
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do Número Secreto');
exibirTextoNaTela('p','Escolha um número de 1 a 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
        let mensagemTentativa = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}!!!`;
     exibirTextoNaTela('h1', 'ACERTOU!!!');
     exibirTextoNaTela('p',mensagemTentativa);
     } else {
        if (numeroSecreto > chute) {
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        } else {
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        }
        tentativas++;
     }
}

function gerarNumeroAleatorio(cap) {
    return parseInt(Math.random() * cap + 1);
}

