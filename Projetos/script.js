var produtos = [];

function Produto(nome, quantidade, preco_unitario) {
    this.nome = nome;
    this.quantidade = quantidade;
    this.preco_unitario = preco_unitario;
}

Produto.prototype.calcularPrecoConsumidor = function(margem_lucro) {
    var preco_consumidor = this.preco_unitario * (1 + margem_lucro);
    return preco_consumidor;
};

function adicionarProduto() {
    var nome = document.getElementById("nome").value;
    var quantidade = parseInt(document.getElementById("quantidade").value);
    var preco_unitario = parseFloat(document.getElementById("preco").value);

    var produto = new Produto(nome, quantidade, preco_unitario);
    produtos.push(produto);

    adicionarLinhaTabela(produto);

    document.getElementById("nome").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("preco").value = "";
}

function adicionarLinhaTabela(produto) {
    var table = document.getElementById("estoqueTable");

    var row = table.insertRow();
    var nomeCell = row.insertCell();
    var quantidadeCell = row.insertCell();
    var precoCell = row.insertCell();

    nomeCell.textContent = produto.nome;
    quantidadeCell.textContent = produto.quantidade;
    precoCell.textContent = produto.preco_unitario.toFixed(2);
}

function gerarPlanilha() {
    var csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Nome do Produto,Quantidade em Estoque,Preço Unitário,Preço Consumidor Final\n";

    for (var i = 0; i < produtos.length; i++) {
        var produto = produtos[i];
        var precoConsumidor = produto.calcularPrecoConsumidor(0.2);

        csvContent += produto.nome + "," + produto.quantidade + "," + produto.preco_unitario.toFixed(2) + "," + precoConsumidor.toFixed(2) + "\n";
    }

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "estoque.csv");
    document.body.appendChild(link); // Needed for Firefox
    link.click();
    document.body.removeChild(link);
}