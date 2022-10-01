const client = require('../../config/conexao.js');

module.exports = {
    fornecedoresLista,
    fornecedoresBuscarUm,
    fornecedoresSalvar,
    fornecedoresAlterar,
    fornecedoresDeletar
}

function fornecedoresLista(callback){
    client.query('SELECT * from fornecedor', callback);
}

function fornecedoresBuscarUm(id, callback){
    client.query('Select * from fornecedor where for_codigo = ' + id, callback);
}

function fornecedoresSalvar(dados, callback) {
    var msql = "INSERT INTO fornecedor SET for_nome = '" + dados.for_nome +
    "' , for_cnpj = '" + dados.for_cnpj + 
    "' , for_cep = '" + dados.for_cep + 
    "' , for_nro = '" + dados.for_nro + " ' ";
    console.log(msql);

	client.query(msql, callback);
}

function fornecedoresAlterar(dados, callback){
    var msql =  "UPDATE fornecedor SET for_nome = '" + dados.for_nome +
                "' , for_cnpj = '" + dados.for_cnpj + 
                "' , for_cep = '" + dados.for_cep + 
                "' , for_nro = '" + dados.for_nro + 
                "' WHERE for_codigo = '" + dados.for_codigo + "'";

    //    console.log('Estou alterando o livro.......');
    console.log(msql);

    client.query(msql, callback);
}

function fornecedoresDeletar(id, callback) {
    var del = "delete from fornecedor where for_codigo = " + id;

    console.log(del);
    client.query(del, callback);
}