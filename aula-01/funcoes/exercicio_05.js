//Faça uma função que pegue o ano que a pessoa nasceu e retorne a idade dela. 

let idade = (anoNasc) => {

    let anoAtual = new Date().getFullYear()
    const age = anoAtual - anoNasc;
    return age;
}