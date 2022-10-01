const mysql = require ('mysql');
const database = 'dados191d';

const client = mysql.createConnection({
    user :'root',
    password: '',
    host: 'localhost',
    port: 3306
});

client.query ('USE ' + database);
module.exports = client;