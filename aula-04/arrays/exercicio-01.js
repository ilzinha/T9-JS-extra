<<<<<<< HEAD
const users = [{ PrimeiroNome: 'Ana', ultimoNo: 'Bouley', funcao: 'Desenvolvedora' },
{ PrimeiroNome: 'Chloe', ultimoNome: 'Alnaji', funcao: 'Desenvolvedora' },
{ PrimeiroNome: 'Jonathan', ultimoNome: 'Alves', funcao: 'Publicitário' },
{ PrimeiroNome: 'Micaela', ultimoNome: 'Herman', funcao: 'Lead Instructor' },
{ PrimeiroNome: 'Robert', ultimoNome: 'Santos', funcao: 'Desenvolvedora' },
{ PrimeiroNome: 'Wes', ultimoNome: 'Correia', funcao: 'Instrutor'},
{ PrimeiroNome: 'Hanna', ultimoNome: 'Montana', funcao: 'Diretora'}];


// //SAÍDA:
// 0: {PrimeiroNome: "Ana", ultimoNo: "Bouley", funcao: "Desenvolvedora"}
// 1: {PrimeiroNome: "Chloe", ultimoNome: "Alnaji", funcao: "Desenvolvedora"}
// 2: { PrimeiroNome: 'Robert', ultimoNome: 'Santos', funcao: 'Desenvolvedora' }

const profissaoDev = users.filter( param =>  param.funcao === 'Desenvolvedora'? true : false )
console.log(profissaoDev)
=======
/*O filter() permite remover elementos que não se encaixam em determinados critérios.
É incrivelmente útil para desmontar grandes arrays, para que possamos escolher apenas os itens que queremos.
____________________________


Imagine que queremos enviar uma mensagem apenas aos colaboradores que são Desenvolvedoras.
Podemos usar .filter () para retornar apenas os usuários que se encaixam na função correta.*/

const colaboradores =
  [{ PrimeiroNome: 'Ana', ultimoNo: 'Bouley', funcao: 'Desenvolvedora' },
  { PrimeiroNome: 'Chloe', ultimoNome: 'Alnaji', funcao: 'Desenvolvedora' },
  { PrimeiroNome: 'Jonathan', ultimoNome: 'Alves', funcao: 'Publicitário' },
  { PrimeiroNome: 'Micaela', ultimoNome: 'Herman', funcao: 'Lead Instructor' },
  { PrimeiroNome: 'Robert', ultimoNome: 'Santos', funcao: 'Desenvolvedora' },
  { PrimeiroNome: 'Wes', ultimoNome: 'Correia', funcao: 'Instrutor' },
  { PrimeiroNome: 'Hanna', ultimoNome: 'Montana', funcao: 'Diretora' }];


const filtrarDesenvolvedoras = colaboradores.filter((colaboradora) => {
  return colaboradora.funcao === 'Diretora'
})
console.log(filtrarDesenvolvedoras);

>>>>>>> 8b37ec65e4e28d4f2805391ef53757df127a67da
