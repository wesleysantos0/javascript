const entrada = [10,20,35,65,80,94];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}



module.exports = {gets, print};