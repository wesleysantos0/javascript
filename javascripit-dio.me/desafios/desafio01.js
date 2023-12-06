// Desafio de JS. Fazer um programa que para calcular o valor de uma viagem .
// Teremos 5 variáveis, sendo elas:
//  1- Preço do etanol ;
//  2- Preco da gasolina;
//  3- Tipo de combustível de seu carro;
//  4- Gasto médio de combustível do carro por KM;
//  Distância em KM da viagem;

// -- Imprima no console o valor que será gasto para realizar esta viagem.

const precoEtanol = 4.2;
const precoGasolina = 5.8;
let tipoCombustivel = 'etanol';
const kmporlitro = 12.2;
const kmPercorrido = 150;

const litrosConsumidos = kmPercorrido/kmporlitro;


if (tipoCombustivel === 'etanol') {
    const valorgasto = litrosConsumidos * precoEtanol;
    console.log (valorgasto.toFixed(2));
} else {
    const valorgasto = litrosConsumidos * precoGasolina;
    console.log (valorgasto.toFixed(2));
}    



    
