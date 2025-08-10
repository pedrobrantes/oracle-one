alert('Boas-vindas ao jogo do número secreto');
let numeroSecreto = 4;
console.log(`Número secreto: ${numeroSecreto}`);
let chute = prompt('Escolha um número entre 1 e 10');
console.log(`Chute do usuário: ${chute}`);

if (chute == numeroSecreto) {
    console.log('Condição IF satisfeita.');
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    console.log('Condição IF não satisfeita. Entrando no ELSE.');
    alert('Você errou :(');
}