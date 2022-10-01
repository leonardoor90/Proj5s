var controllerF = require('../models/fornecedores');

module.exports = {
  
  fornecedoresMenu,
  fornecedoresListar,
  fornecedoresEditar,
  fornecedoresNovo,
  fornecedoresSalvar,
  fornecedoresDeletar

} 

function fornecedoresMenu(req, res) {
  res.render('../views/fornecedor/frm_fornecedorMenu.ejs', {title: 'Fornecedores'})
}

function fornecedoresListar(req, res) {
  controllerF.fornecedoresLista(function (err, result){
    console.log("Listando Fornecedores...");
    if(err) {
        throw err;
    }
    else{
      res.render('../views/fornecedor/fornecedores_listar.ejs', 
        {title: 'Listagem de Fornecedores', 
        fornecedores:result});
    }
  })
}

function fornecedoresEditar(req, res){
  var id = req.params.codigo;
  controllerF.fornecedoresBuscarUm(id, function(err, result){
    if (err) {
      throw err;
    } 
    else{
      res.render('../views/fornecedor/fornecedores_editar.ejs', {
        fornecedores: result});       
    }
  });
}

function fornecedoresDeletar(req, res) {
  var id = req.params.codigo;
  controllerF.fornecedoresDeletar(id, function (err, result) {
    if(err){
      throw err;
    }
    else{
      res.render('../views/fornecedor/fornecedores_listar.ejs', {
        fornecedores: result});
    }
  });
}

function fornecedoresNovo(req, res){
  var dados = [
    {
      for_codigo: "",
      for_nome: "",
      for_cnpj: "",
      for_cep: "",
      for_nro: ""
    }
  ];

  res.render('../views/fornecedor/fornecedores_novo.ejs',
    {
      title: "Fornecedores",
      fornecedores: dados
    })
}

function fornecedoresSalvar(req, res){
  var dados = req.body;
  console.log("Salvando Fornecedor...");
  console.log(req.body);
  if(dados.for_codigo == ""){
    dados.for_codigo == null;
    console.log("Inserindo Fornecedor...");
    controllerF.fornecedoresSalvar(dados, function(err, result){
      if(err){
        throw err;
      }
      res.redirect('/fornecedores/listar');
    })
  }else{
    console.log("Alterando Fornecedor...");
    controllerF.fornecedoresAlterar(dados, function(err, result){
      if (err){
        throw err;
      }
      res.redirect('/fornecedores/listar');
    });
  }
}