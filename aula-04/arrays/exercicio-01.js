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
