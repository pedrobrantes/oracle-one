alert('Boas-vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(`Número secreto: ${numeroSecreto}`);
let chute = prompt('Escolha um número entre 1 e 10');
console.log(`Chute do usuário: ${chute}`);

if (chute == numeroSecreto) {
    console.log('Condição IF satisfeita.');
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
}