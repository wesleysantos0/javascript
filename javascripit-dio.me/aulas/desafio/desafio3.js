
// 3) Faça um programa que calcule e imprima o salário salário a ser transferido para um funcionário.
// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
// O salário salário a ser transferido é calculado da seguinte maneira: 

//    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

// Para calcular o percentual de imposto segue as aliquotas:

//     De R$ 0.00 a R$ 1100.00 = 5.00%
//     De R$ 1100.01 a R$ 2500.00 = 10.00%
//     Maior que R$ 2500.00 = 15.00%

//     Exemplo:
//         Entrada:
//             2000
//             250

//         Saída:
//             2050.00

const { gets, print } = require('../importacao/funcoes-auxiliares3');

const salarioBruto = gets();
const beneficios = gets();

function calcPorcentualSalario(salario) {
    if (salario >= 0 && salario <= 1100) {
        let salariocomDesconto = (salario - (salario * .05));
        return salariocomDesconto;
    } else if (salario >= 1100.01 && salario <= 2500) {
        salariocomDesconto = (salario - (salario * .1));
        return salariocomDesconto;
    } else {
        salariocomDesconto = (salario - (salario * .15));
        return salariocomDesconto;
    }
}

const valoraTransfeir = calcPorcentualSalario(salarioBruto) + beneficios;
print(valoraTransfeir);

//  Existe mais de um tipo de forma para se resolver esse desafio, segue a baixo uma outra maneira a se resolver o problema!


// if (salarioBruto <= 1100) {
//     let salarioLiquido = (salarioBruto - (salarioBruto * .05)) + beneficios;
//     print('Salário depoitado no valor de: ' + salarioLiquido);
// } else if (salarioBruto >= 1100.01 && salarioBruto <= 2500) {
//     salarioLiquido = (salarioBruto - (salarioBruto * .1)) + beneficios;
//     print('Salário depoitado no valor de: ' + salarioLiquido);
// } else {
//     salarioLiquido = (salarioBruto - (salarioBruto * .15)) + beneficios;
//     print('Salário depoitado no valor de: ' + salarioLiquido);
// }
