var controllerP = require('../controllers/produtos');

app.get('/produtos', controllerP.produtosMenu);
app.get('/produtos/listar', controllerP.produtosListar);
app.get('/produtos/novo', controllerP.produtosNovo);
app.post('/produtos/salvar', controllerP.produtosSalvar);
app.get('/produtos/editar/:codigo', controllerP.produtosEditar);