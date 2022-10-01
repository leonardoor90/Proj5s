var controllerCP = require('../models/contapagar');

module.exports = {
  
  contapagarMenu,
  contapagarListar,
  contasNovo,
  ContasSalvar,
  contasEditar

} 

function contapagarListar(req, res) {
  controllerCP.contapagarLista(function(err, result){
    console.log("Listando Contas !");
    if(err){
      throw err;
    }
    res.render('../views/contapagar/contapagar_listar.ejs',
    {title: 'Contas a Pagar',
     contas: result

    });
  });
}

function contapagarMenu(req, res) {
  res.render('../views/contapagar/frm_contapagarMenu.ejs', {title: 'Contas a Pagar'})
}

function contasNovo(req, res){
  var dados = [
    {
      pag_codigo: "",
      pag_descricao: "",
      pag_valor: "",
      pag_data_vcto: "",
      pag_data_pgto: "",
      for_codigo:""
    }
  ];

  controllerCP.fornecedoresLista(function (err, result_fornecedor) {
      if (err) {
          throw err;
      } else {
          res.render('../views/contapagar/contapagar_nova.ejs',
              {title: "Nova Conta", 
              contas: dados,
              listar_fornecedores: result_fornecedor,
          })
      }
  });
}

function ContasSalvar(req, res){
  var dados = req.body;
  console.log("Salvando Conta...");
  console.log(req.body);
  if(dados.pag_codigo == ""){
      dados.pag_codigo = null;
      console.log("Inserindo Conta...");
      controllerCP.salvarConta(dados, function (err, result) {
          if (err) {
              throw err;
          }
          res.redirect('/contas/listar');
      })
  }else{
      console.log("Alterando Conta...");
      controllerCP.contasAlterar(dados, function (err, result) {
          if (err) {
              throw err;
          }
          res.redirect('/contas/listar');
      });
  }
}

function contasEditar(req, res) {
  var id = req.params.codigo;
    controllerCP.ContasBuscarUm(id, function(err, result){
      if (err) {
        throw err;
      } else{
        controllerCP.fornecedoresLista(function (err, result_fornecedores) {
          if (err) {
            throw err;
          } else {
            res.render('../views/contapagar/contapagar_editar.ejs',
              {
              contas: result,
              listar_fornecedores: result_fornecedores
            });            
          }
        });
      }
    });
}