alert('Boas-vindas ao jogo do número secreto');
let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10');

if (chute == numeroSecreto) {
    alert('Isso aí! Você descobriu o número secreto (5)');
} else {
    alert('Você errou :(');
}