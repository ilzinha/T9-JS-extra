//Vamos utilizar um reducer pra extrair todos os livros do seguinte conjunto de dados:

const dados = [{
        "nome": "Tawany",
        "livros": [
            "Harry Potter",
            "1984"
        ]
    },
    {
        "nome": "Suzelen",
        "livros": [
            "Capitões da Areia",
            "Menina bonita do laço de fita"
        ]
    }
]

// //SAÍDA
// ["Harry Potter", "1984", "Capitões da Areia", "Menina bonita do laço de fita"]

//como é string, vamos receber o valor inicial, que são todos e em seguida, vou ter meu valor atual, que é livro

const todosLivros = dados.reduce((todos, livro) => {
    const obterTodosLivros = todos.concat(livro.livros)
    return obterTodosLivros;
}, []);

//--------------------------------------

//exemplo
// const numberList = [1, 2, 3, 4, 5, 6, 7, 8]
// let valorInicial = 0
// const calculaSoma = numberList.reduce((acumulado, itemArray) => {
//     const resultadoSoma = acumulado + itemArray;
//     return resultadoSoma
// },0)