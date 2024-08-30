'use strict'; // impede o uso de variaveis não declaradas

let nome = 'Anna';

let sobrenome = 'Silva';

console.log(sobrenome);

const instrutor = 'EDUARDO LUIZ FERREIRA';
//split separa um string em um array de string com o separador escolhido

const pieces = instrutor.split(' ');

console.log(pieces);

// pop remove e retorna o ultimmo elemento

console.log(pieces[0], pieces.pop());

let array = [1,2,3,4,5,6];
console.log(array);
let numero = array.pop();
console.log(numero);
console.log(array);

//push empurra ao final do array
array.push(7);
console.log(array)

//shift remove e retorna o primeiro
console.log(array.shift());
console.log(array);

//unshift remove e retorna o primeiro
array.unshift(0);
console.log(array);

let cores = ['verde', 'azul', 'roxo', 'vermelho','rosa'];

for (let i = 0; i < cores.length; i++){
    console.log(cores[i]);
}

console.log('For simplificado');

for (let cor of cores){
    console.log(cor);
}