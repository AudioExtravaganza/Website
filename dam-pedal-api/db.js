const mysql = require('mysql')
const fs = require ('fs');

var credentials = JSON.parse(fs.readFileSync('.credentials.json'));

var pool = mysql.createPool({
    connectionLimit : 10,
    host            : credentials.host,
    user            : credentials.user,
    password        : credentials.pass,
    database        : 'damp_db'

})

module.exports.pool = pool;
