// estrutura Condicional ( if, else if, else)



const num = 0;

const numerpar = (num % 2) === 0;

console.log(numerpar);

if (num === 0) {
    console.log('Numeor Invalido');
} else if (numerpar) {
    console.log('numero par');
}
else {
    console.log('numero imp');
}