// Desafio 1
console.log("Bem-vindo ao nosso site!");

// Desafio 2
let nome = "Pedro";
console.log(`Olá, ${nome}!`);

// Desafio 3
let nomeAlert = "Pedro";
alert(`Olá, ${nomeAlert}!`);

// Desafio 4
let linguagemPreferida = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(`Sua linguagem preferida é: ${linguagemPreferida}`);

// Desafio 5
let valor1Soma = 10;
let valor2Soma = 5;
let resultadoSoma = valor1Soma + valor2Soma;
console.log(`A soma de ${valor1Soma} e ${valor2Soma} é igual a ${resultadoSoma}.`);

// Desafio 6
let valor1Sub = 10;
let valor2Sub = 5;
let resultadoSub = valor1Sub - valor2Sub;
console.log(`A diferença entre ${valor1Sub} e ${valor2Sub} é igual a ${resultadoSub}.`);

// Desafio 7
let idadePrompt = prompt("Qual a sua idade?");
if (idadePrompt >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// Desafio 8
let numeroCheck = prompt("Digite um número:");
if (numeroCheck > 0) {
    console.log("O número é positivo.");
} else if (numeroCheck < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

// Desafio 9
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Desafio 10
let nota = 8;
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// Desafio 11
console.log(Math.random());

// Desafio 12
console.log(parseInt(Math.random() * 10) + 1);

// Desafio 13
console.log(parseInt(Math.random() * 1000) + 1);