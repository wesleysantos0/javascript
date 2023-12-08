
function calDesconto(valor, desconto) {
    return valor - (valor * (desconto /100));
}

function calJuros(valor,desconto) {
    return valor + (valor * (desconto /100));
}

const precoproduto = 100;
const formaDpagamento = 4;

if (formaDpagamento === 1) {
    console.log(calDesconto(precoproduto, 10));
} else if (formaDpagamento === 2 ) {
    console.log(calDesconto(precoproduto, 15));
} else if (formaDpagamento === 3) {
    return(precoproduto);
}else {
    console.log(calJuros(precoproduto, 10));
}