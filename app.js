let numeroSecreto = gerarNumeroAleatorio(10);
let tentativas = 1;
    
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p','Escolha um número de 1 a 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
        let mensagemTentativa = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}!!!`;
     exibirTextoNaTela('h1', 'ACERTOU!!!');
     exibirTextoNaTela('p',mensagemTentativa);
     document.getElementById('reiniciar').removeAttribute('disabled');
     } else {
        if (numeroSecreto > chute) {
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        } else {
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        }
        tentativas++;
     }
     limparCampo()
}

function gerarNumeroAleatorio(cap) {
    return parseInt(Math.random() * cap + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogoClicado() {
    numeroSecreto = gerarNumeroAleatorio(10);
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}