// Desafio 1
let diaDaSemana = prompt('Qual é o dia da semana?');
if (diaDaSemana === 'Sábado' || diaDaSemana === 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

// Desafio 2
let numero = prompt('Digite um número:');
if (numero > 0) {
    alert('Número positivo!');
} else if (numero < 0) {
    alert('Número negativo!');
} else {
    alert('O número é zero!');
}

// Desafio 3
let pontuacao = prompt('Digite sua pontuação:');
if (pontuacao >= 100) {
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar.');
}

// Desafio 4
let saldo = 1500; // Example value
alert(`Seu saldo é de R$${saldo}.`);

// Desafio 5
let nome = prompt('Qual o seu nome?');
alert(`Boas-vindas, ${nome}!`);