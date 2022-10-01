var controllerP = require('../models/produtos');

module.exports = {
  
  produtosMenu,
  produtosListar,
  produtosSalvar,
  produtosNovo,
  produtosEditar

  //produtosDeletar

} 

function produtosMenu(req, res) {
  res.render('../views/produto/frm_produtoMenu.ejs');
}

function produtosListar(req, res) {
  controllerP.produtosLista(function (err, result){
    console.log("Listando Produtos...");
    if(err) {
        throw err;
    }
    else{
      res.render('../views/produto/produtos_listar.ejs', 
        {produtos:result});
    }
  })
}

function produtosNovo(req, res){
    var dados = [
      {
        pro_codigo: "",
        pro_descricao: "",
        pro_custo: "",
        pro_venda: ""
      }
    ];
  
    res.render('../views/produto/produtos_novo.ejs', { produtos: dados });
    ;
  }

function produtosSalvar(req, res){
    var dados = req.body;
    console.log("Salvando Produto...");
    console.log(req.body);
    if(dados.pro_codigo == ""){
        dados.pro_codigo == null;
        console.log("Inserindo Produto...");
        controllerP.produtosSalvar(dados, function(err, result){
        if(err){
            throw err;
        }
        res.redirect('/produtos/listar');
        })
    }
    else{
      console.log("Alterando produto...");
      controllerP.produtosAlterar(dados, function(err, result){
        if (err){
          throw err;
        }
        res.redirect('/produtos/listar');
      });
    }
}

function produtosEditar(req, res){
  var id = req.params.codigo;
  controllerP.produtosBuscarUm(id, function(err, result){
    if (err) {
      throw err;
    } 
    else{
      res.render('../views/produto/produtos_editar.ejs', {
        produtos: result});       
    }
  });
}