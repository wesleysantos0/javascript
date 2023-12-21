function print(texto) {
    console.log(texto)
}

class Pessoa {
    nome;
    idade;
    sexo;

    constructor (nome,idade,sexo){
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    }
    
verificaIdade() {
    
    if ( this.idade <= 17) {
        return 'Menor de idade'
    }else {
        return 'maior de idade'
    }

}
    
}
const wesley = new Pessoa('wesley',15,'Masculino' );

//print(wesley);

let pais = ['Weslei', 'Sueli'];

