// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada numero par encontrado;


let listaPar = [3,5,66,4,78,52];

for (let i = 0; i < listaPar.length; i++) {
    let cont = listaPar[i];
    if (cont % 2 ===0) {
        console.log(cont);
    }
    
}
