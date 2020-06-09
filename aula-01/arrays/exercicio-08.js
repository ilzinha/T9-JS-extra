/*Dado um array de objetos.
 */

const tarefas = [{
  passear: false,
  afazeres: ["Trabalhar", "Estudar", "Fazer comida", "Mercado",
    "Descansar"],
  reuniao: {
    faculdade: "Segunda-feira",
    amigos: "Sexta-feira"
  },
},
];

/* Acesse a propriedade do objeto do terceiro item*/

tarefas.map( (item) => {
  console.log(item.reuniao)
})

//ouuuu

//variável auxiliadora para fazermos a analise
let acessarTarefas = tarefas[0].reuniao;

//acessar o primeiro item que contém a propriedade reunião.
console.log(acessarTarefas)
