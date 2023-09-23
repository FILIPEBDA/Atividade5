import PromptSync from "prompt-sync";
const prompt = PromptSync()
//let ValorAjustado

//console.log("Digite o valor do produto")
//let ValorProduto = prompt()

//console.log("Digite a quantidade de produtos")
//let QuantProduto = prompt()

function valores(QuantProduto, ValorProduto, Valor){
 
    Valor = (QuantProduto, ValorProduto) }

function calculototal(QuantProduto, ValorProduto){
       QuantProduto * ValorProduto}

const ValorTotal = calculototal(1000, 5, valores)
console.log(ValorTotal)
//let desconto = calcularPrecoComDesconto(ValorTotal)

function calcularPrecoComDesconto() {

    if(ValorTotal < 1000){
       ValorAjustado = ValorTotal
    }

    else if(ValorTotal < 5000 ) {
        ValorAjustado = ValorTotal * 0,95
    } 
    
    else if (ValorTotal < 10000){
        ValorAjustado = ValorTotal * 0,90
    }
    else {
        ValorAjustado = ValorTotal *0,8
    }
    
    console.log("O Valor a pagar é de:" + ValorAjustado)
}





