const {gets,print} = require('./fuuncoes-auxiliares');

const quantidadeDealunos = gets();
let maiorValorencontrado = 0;

for (let i = 0; i < quantidadeDealunos; i++) {
    const numerosSorteados = gets();
    if (numerosSorteados > maiorValorencontrado) {
        maiorValorencontrado = numerosSorteados;
    } 
}

print(maiorValorencontrado);