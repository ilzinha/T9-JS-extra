//Escreva uma função chamada mostrarPrimeiroUltimoChar que aceite uma array de apenas STRINGS e retorne uma nova array com apenas o primeiro e o último caractere de cada string.

//SAÍDA
// mostrarPrimeiroUltimoChar (['Jessica', 'Ana', 'sorriso', 'reprograma'])
// //['ja', 'aa', 'so', 'rm']

//const arr = ['Jessica', 'Ana', 'sorriso', 'reprograma']

const mostrarPrimeiroUltimoChar = (listaNomes) => {
    let novoArray = [];

    listaNomes.forEach((item) => {
       if (typeof item === 'string') {
           novoArray.push(item[0] + item[item.length - 1])
       }
    });
    return novoArray;
}

const obterLetras = mostrarPrimeiroUltimoChar(['Viviane', 'Ilza', 'Amanda'])

console.log(obterLetras)