const formulario = document.querySelector(".lista__form");
const divSoma = document.querySelector('.extrato')
const linhaSoma = document.createElement(('hr'))
const paragValor = document.createElement('p')





formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const inputItem = document.querySelector('#inputItem')
  const inputValor = document.querySelector('#inputValor')
  const inputData = document.querySelector('#inputData')
  const tabela = document.querySelector('.extrato__table')

  const linhaTabela = document.createElement('tr')
  const celulaItem = document.createElement('td')
  const celulaValor = document.createElement('td')
  const celulaData = document.createElement('td')

  celulaItem.textContent = inputItem.value;
  celulaValor.textContent = inputValor.value;
  celulaData.textContent = inputData.value;

  tabela.appendChild(linhaTabela)
  linhaTabela.appendChild(celulaItem)
  linhaTabela.appendChild(celulaValor)
  linhaTabela.appendChild(celulaData)
  divSoma.appendChild(linhaSoma)
  
  const somaTotal = () => {
    let soma = 0;
    soma += inputValor.value
    console.log(soma)
    return soma;
  }
  
  paragValor.textContent = `Total gasto: ${soma}`
  divSoma.appendChild(linhaSoma)
  divSoma.appendChild(paragValor)
  
  
});
    