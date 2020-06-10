// const alunas = ["Ilza", "Nayla", "Sindi",
//     "Maria", "Liana", "Viviane",
//     "Lorena", "Nathalia",
//     "Raquel", "Raquel", "Marisa",
//     "Nathy", "Patricia",
//     "Jordana", "Od",
//     "Talisia", "Débora", "Tabita", "Gabrielli",
//     "Claudia", "Sara", "Jemima", "Suzelen", "Giulia", "Vanessa",
//     "Carol", "Ariane", "Millena", "Adela",
//     "Gabi Fernandes"
// ];

// const lista = document.querySelector('#lista-alunas')


// alunas.forEach((aluna) => {

//     const item = document.createElement('li')

//     item.innerText = aluna;
//     // item.classList.add('vermelha')
//     lista.appendChild(item)
// })

//----------------------OU--------------------- //

// alunas.map( (aluna) => {

//     console.log(aluna)
//     const item = document.createElement('li')

//     item.innerText = aluna;
//     item.classList.add('vermelha')
//     listaUl.appendChild(item)
// })

//não precisa chamar o retorno e só usa uma {}, que deve estar dentro de um ()
// const retornarBiografia = () => ({
//     nome: 'Mulheres, raça e classe',
//     descricao: 'Da mesma forma que gênero é a maneira como a raça é vivida'
// })

// const objetoUsuario = (id, nome) => {
//     return {
//         id: id,
//         nome: nome
//     }
// }
// ouuu

const objetoUsuario = (id, nome) => ({
    id: id,
    nome: nome
})
