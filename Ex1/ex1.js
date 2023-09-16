//Crie uma função chamada calcularPrecoComDesconto, essa função vai receber 
//3 parâmetros - (valor do produto, quantidade de produto e uma função callback 
//que aplica o desconto e devolve o valor atualizado) e implementar ao menos uma 
//chamada para a função calcularPrecoComDesconto

function calcularPrecoComDesconto(valorProduto, quantidadeDeProduto, callback) {
    const precoTotal = valorProduto * quantidadeDeProduto
    const precoComDesconto = callback(precoTotal)
    console.log(`\nPreço total: R$ ${precoTotal.toFixed(2)}`)
    return precoComDesconto
}

function aplicarDesconto(ValorTotal) {
    const desconto = 0.25
    const valorComDesconto = ValorTotal * (1 - desconto)
    return valorComDesconto
}

const valorProduto = 50
const quantidadeDeProduto = 3
const precoFinal = calcularPrecoComDesconto(valorProduto, quantidadeDeProduto, aplicarDesconto)

console.log(`\nPreço com desconto: R$ ${precoFinal.toFixed(2)}\n`)
