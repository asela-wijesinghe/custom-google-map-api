'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-02.cleardb.net',
    user: 'bfb1858ff5134e',
    password: '2f8b2348',
    database: 'heroku_47526a6979522fb'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;
