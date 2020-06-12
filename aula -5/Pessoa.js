 export class Pessoa {
     constructor(nome, sobrenome, idade) {
         this.nome = nome;
         this.sobrenome = sobrenome;
         this.idade = idade;
     }

     getNome() {
         return `Nome: ${this.nome} ${this.sobrenome}`
     }
 }

 
 