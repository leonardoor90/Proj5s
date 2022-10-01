const client = require('../../config/conexao.js');

module.exports = {
    contapagarLista,
    fornecedoresLista,
    salvarConta,
    ContasBuscarUm,
    contasAlterar
}

function contapagarLista(callback){
    client.query('SELECT a.*, b.for_nome FROM contapagar a LEFT JOIN fornecedor b on a.for_codigo = b.for_codigo ', callback);
}

function fornecedoresLista(callback){
    client.query('SELECT * from fornecedor', callback);
}

function salvarConta(dados, callback) {
    var msql =  "INSERT INTO contapagar SET pag_descricao = '" + dados.pag_descricao +
                                        "' , pag_valor = '" + dados.pag_valor + 
                                        "' , pag_data_vcto = '" + dados.pag_data_vcto + 
                                        "' , pag_data_pgto = '" + dados.pag_data_pgto + 
                                        "' , for_codigo = '" + dados.for_codigo + " ' ";
    console.log(msql);

	client.query(msql, callback);
}

function ContasBuscarUm(id, callback) {
    client.query('Select * from contapagar where for_codigo = ' + id, callback);
}

function contasAlterar(dados, callback){
    var msql =  "UPDATE contapagar SET pag_descricao = '" + dados.pag_descricao +
                "' , pag_valor = '" + dados.pag_valor + 
                "' , pag_data_vcto = '" + dados.pag_data_vcto + 
                "' , pag_data_pgto = '" + dados.pag_data_pgto +
                "' , for_codigo = '" + dados.for_codigo + 
                "' WHERE pag_codigo = '" + dados.pag_codigo + "'";

    //    console.log('Estou alterando o livro.......');
    console.log(msql);

    client.query(msql, callback);
}