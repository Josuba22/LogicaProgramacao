algoritmo "Pizzaria Bom Sabor"

var sabor1: caractere
    sabor2: caractere
    quantidade: inteiro
    tamanho: caractere
    entrega: logico


inicio

    
    escreval("Digite o seu 1º sabor: ")
    leia(sabor1)
    escreval("Digite o seu 2º sabor: ")
    leia(sabor2)
    escreval("Digite o tamanho da sua pizza (P, M ou G): ")
    leia(tamanho)
    escreval("Digite a quantidade: ")
    leia(quantidade)
    escreval("Deseja que seu pedido seja entregue? (Digite 0-NÃO ou para 1-SIM) ")
    leia(entrega)
    escreva("O seu pedido é: metade ", sabor1, " e metade ", sabor2, ", tamanho: ", tamanho, ", quantidade: ", quantidade, " entrega: ", entrega)



fimalgoritmo