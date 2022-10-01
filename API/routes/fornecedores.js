var controller = require('../controllers/fornecedores');

app.get('/fornecedores', controller.fornecedoresMenu);
app.get('/fornecedores/listar', controller.fornecedoresListar);
app.get('/fornecedores/novo', controller.fornecedoresNovo);
app.post('/fornecedores/salvar', controller.fornecedoresSalvar);
app.get('/fornecedores/editar/:codigo', controller.fornecedoresEditar);
app.delete('/fornecedores/excluir/:codigo', controller.fornecedoresDeletar);