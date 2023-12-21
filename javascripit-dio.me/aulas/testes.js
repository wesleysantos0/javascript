//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Definição da classe ItemMagico
class ItemMagico {
    //TODO: Crie adequadamente um construtor que receba todos os atributos referente ao item mágico:
      constructor(arma, dano, tipo) {
        this.tipo = arma;
        this.dano = dano;
        this.tipo = tipo;
    
      }
    
      calcularDano() {
        return this.tipo === 'arma' ? this.dano * 2 : this.dano;
      }
    }
    
    // Solicita ao usuário para digitar o tipo do item mágico, o dano no item e a resistência do item
    const tipoItem = gets(arco);
    const danoItem = parseInt(gets(200));
    const resistenciaItem = parseInt(gets(400));
    
    //TODO: Crie o de um objeto ItemMagico personalizado com base no tipo escolhido
     itemPersonalizado = ['tipo: Espada','tipo: Cajado','tipo: Arco' ];
    
    // TODO: Imprima os atributos do item personalizado
    print("Tipo: " + itemPersonalizado(i) );
    print("Dano: " + calcularDano() );
    print("Resistencia: " + itemPersonalizado.resistencia);
    
    // Calcula e imprime o dano causado pelo item personalizado em um combate simulado
    const danoTotal = itemPersonalizado.calcularDano();
    print("Dano em combate: " + danoTotal);