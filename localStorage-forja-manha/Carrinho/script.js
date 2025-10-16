$(document).ready(function(){
    //recupera carrinho do localStorage
 const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
    //atribui a uma variavel a lista do html
    const listaElement = $("#lista")

    const totalElement = $("#total")

    function exibirCarrinho(){
        listaElement.empty()
        let totalPreco = 0
    
        $.each(carrinho, function(index, item){
            const listItem = $("<li>").text(`${item.desc} - Preco: $${item.preco.toFixed(2)}`)
    
            const removeButton = $("<button>").text("❌").css("margin-left", "10px").click(function(){
                removerItem(index)
            })

            listItem.append(removeButton)
            listaElement.append(listItem)

            totalPreco += item.preco

        })
        totalElement.text(`Total: $${totalPreco.toFixed(2)}`)

    }

    function removerItem(index){
        carrinho.splice(index, 1)
        localStorage.setItem("carrinho",JSON.stringify(carrinho))
        exibirCarrinho()
    }

    exibirCarrinho()
})