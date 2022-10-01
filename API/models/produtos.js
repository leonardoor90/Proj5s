const client = require('../../config/conexao.js');

module.exports = {
    produtosLista,
    produtosBuscarUm,
    produtosSalvar,
    produtosAlterar,
    //produtosDeletar
}

function produtosLista(callback){
    client.query('SELECT * from produto', callback);
}

function produtosSalvar(dados, callback) {
    var msql = "INSERT INTO produto SET pro_descricao = '" + dados.pro_descricao +
    "' , pro_custo = '" + dados.pro_custo + 
    "' , pro_venda = '" + dados.pro_venda + " ' ";
    
    console.log(msql);

	client.query(msql, callback);
}

function produtosBuscarUm(id, callback){
    client.query('Select * from produto where pro_codigo = ' + id, callback);
}

function produtosAlterar(dados, callback){
    var msql =  "UPDATE produto SET pro_descricao = '" + dados.pro_descricao +
                "' , pro_custo = '" + dados.pro_custo + 
                "' , pro_venda = '" + dados.pro_venda + 
                "' WHERE pro_codigo = '" + dados.pro_codigo + "'";
                
    console.log(msql);

    client.query(msql, callback);
}