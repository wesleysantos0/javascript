// 1) Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
// gasto em reais para realizar este percurso.

class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor(marca,cor,gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }
    calcuclarPercurso(distanciaemKm,precoCombustivel){
        return distanciaemKm * this.gastoMedioKm * precoCombustivel
    }
}

const civic = new Carro('honda', 'prata', 1/8);
const jeta = new Carro('volsk','prata', 1/7);
const hornet = new Carro('honda','preta',1/15)

console.log(civic);
// Vai me retornar a media de consume em KM;
console.log(civic.calcuclarPercurso(18,5.8));




//  TEste

// class Colares {
//     tamanho;
//     cor;
//     qtd;

//     constructor(tamanho,cor,qtd) {
//         this.tamanho = tamanho;
//         this.cor = cor;
//         this.qtd = qtd;
//     }

// }

// const pontodeLuz = new Colares(30,'verde',3);

// console.log(pontodeLuz);


