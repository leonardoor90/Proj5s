const express = require('express');
const consign = require('consign');
const path = require('path');
const body = require('body-parser');

app = express();

app.use(body.urlencoded({extended:true}));
app.use(body.json());

app.use('/static', express.static(__dirname + '/public'));
app.use(express.static('public'));
app.use(express.static('estilos'));
app.use(express.static('imagens'));
app.use(express.static('js'));

app.set('views', path.join(__dirname, '../api/views'));
app.set('view engine', 'ejs');

app.set('port', 3000);

consign({cwd:'api'})
        .include('models')
        .then('controllers')
        .then('routes')
        .into(app);

module.exports = app;