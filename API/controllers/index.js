var controller = require('../models/index');

module.exports = {
  
  index

} 

function index(req, res) {
  res.render('../views/inicio/index.ejs', {title: 'Início'})
}