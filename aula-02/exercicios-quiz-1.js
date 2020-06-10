// 1. Escreva uma função chamada compararNumero que receberá dois parâmetros,
// em seguida, retorne o número que for maior.

// O retorno deverá conter essa mensagem:

// "O maior número entre 5 e 10 é 10"

// Passo a passo da função:
// - Criar função compararValor(parametro1, parametro2)
// - Inserir uma condição onde parametro1 é maior que parametro dois?
// - Se a condição for verdadeira, retornar "O maior número entre 5 e 10 é 10"
// - Se for falsa, retornar que a segundo parametro é maior que o primeiro. 

//                   RESOLUÇÃO                      ///
// const compararNumero = (num1, num2) => {
//     if(num1 > num2) {
//         return `O número ${num1} é maior que o número ${num2}`
//     } 
//     else if(num2 === num1) {
//         return `O número ${num2} e ${num1} são iguais`
//     }
//     else {
//         return `O número ${num2} é maior que o número ${num1}`
//     }
// }

// 2. Escreva uma função chamada retornarNota que receberá um parâmetro do tipo número:

// A função deve retornar com as seguintes notas:
// Se a pontuação for maior que 90, retornar: "A"
// Se a pontuação for maior que 80, retornar: "B"
// Se a pontuação for maior que 70, retornar: "C"
// Se a pontuação for maior que 65, retornar: "D"
// ou "F"

//                   RESOLUÇÃO                      ///
// const retornarNota = (nota) => {
//     if (nota >= 90){
//         return 'Nota A'
//     }
//     else if(nota >= 80) {
//         return 'Nota B'
//     }
//     else if(nota >= 70) {
//         return 'Nota C'
//     }
//     else if(nota >= 65) {
//         return 'Nota D'
//     }
//     else {
//         return 'Nota F'
//     }
// }


// 3. Crie uma estrutura switch case na qual armazene o dia da semana
// em que estamos em uma variável auxiliadora.

// Você precisará de uma variável para armazenar,
// durante os cases, o dia da semana.

// Cada dia da semana pode ser um valor:

//    0    1     2     3     4     5      6
//  dom   seg   ter   quar  quin  sext   sab

// Para você conseguir pegar a data de hoje,
// utilize o (new Date().getDay()) como parâmetro.

// Onde
// case 0:
// diaSemana = "Domingo";
// break;
// case 1:

//                   RESOLUÇÃO                      ///

let diaSemana;
let diaHoje = new Date().getDay();

switch (diaHoje) {
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Segunda-feira'
        break;
    case 2:
        diaSemana = 'Terça-feira';
        break;
    case 3:
        diaSemana = 'Quarta-feira';
        break;
    case 4:
        diaSemana = 'Quinta-feira';
        break;
    case 5:
        diaSemana = 'Sexta-feira';
        break;
    case 6:
        diaSemana = 'Sábado';
        break
    // default:
    //     return 'Não é um numero válido';
}





// 4. Plano de Viagem:

// Na Agência Turismo é viver, existem alguns planos
// de viagens de acordo com a idade da pessoa.

// A tabela é:

// PLANO TEEN: A partir de 12 anos até 17 anos.
// PLANO PROFISSIONAL: A partir de 18 anos até 29 anos.
// PLANO EXPERIENTE: A partir de 30 anos.

// Faça uma função chamada obterPlanos que receba apenas um parâmetro
// e insira essas condições dentro da função.

// Se não inserirem um valor de acordo com as idades,
// é para retornar: Entrar em contato com a agência de turismo.

// Aqui você pode utilizar:
// If/ else if

// A saída deverá ser algo parecido com:

// obterPlano(12) //SAÍDA: Você pode verificar os nossos pacotes TEEN.

//                   RESOLUÇÃO                      ///

// const obterPlanos = (idade) => {
//     if (idade >= 12 && idade <= 17) {
//         return `Você pode verificar os nossos pacotes com plano TEEN.`
//     }
//     if (idade >= 18 && idade <= 29) {
//         return `Você pode verificar os nossos pacotes com plano PROFISSIONAL.`
//     }
//     if (idade >= 30) {
//         return `Você pode verificar os nossos pacotes com plano EXPERIENTE.`
//     }
//     else {
//         return `Entrar em contato com a agência de turismo.`
//     }
// }