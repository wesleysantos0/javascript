// Desafio Calculo de Média

// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperacao"
// Caso a média seja >= 7 imprima "Aprovado"

const { gets, print } = require('../importacao/funcoes-auxiliares')

let media = gets();

if (media < 5) {
    print('Você foi Reprovado!');
} else if (media >= 5 && media < 7) {
    print('Você está de Recuperação!');
} else {
    print('Você foi Arovado!');
}

print(media);

