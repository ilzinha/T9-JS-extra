export class Habilidade {
    constructor(nome, habilidade) {
        this.nome = nome;
        this.habilidade = habilidade
    }

    getHabilidades() {
        return `Nome: ${this.nome} / Habilidades: ${this.habilidade}`
    }
}
