import { Pessoa } from './Pessoa.js';
import { Habilidade } from './Habilidade.js';

const candidato1 = new Pessoa('Aline', 'Medeiros', 30)
 const candidato1Habilidades = new Habilidade('Aline', ['Arquitetura', 'Bordar', 'Voluntariado'])
 const candidato2Habilidades = new Habilidade('Amanda', ['Liderança', 'Suporte'])

 console.log(candidato1.getNome())
 console.log(candidato1Habilidades.getHabilidades())
 console.log(candidato2Habilidades.getHabilidades())