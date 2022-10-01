var controllerCP = require('../controllers/contapagar');

app.get('/contas', controllerCP.contapagarMenu);

//app.get('/listaconta', controllerCP.contapagarMenu);
app.get('/contas/listar', controllerCP.contapagarListar);
app.get('/contas/nova', controllerCP.contasNovo);
app.post('/contas/salvar', controllerCP.ContasSalvar);
app.get('/contas/editar/:codigo', controllerCP.contasEditar);
//app.delete('/contas/excluir/:codigo', controllerCP.contasDeletar);
