var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '172.0.0.1',
    user: 'root',
    password: '11111',
    prot : '3306'
});

connection.connect(function (err) {
    if (err) {
        console.log('[query] - : ' + err);
        return;
    }
    console.log('[connection connect] - :success ');
});

connection.query('select 1+1 as solution ', function (err, rows, fields) {
    if (err)    {
        console.log('[query] - : ' + err);
        return;
    }
    console.log('the solution is : ' + rows[0].solution);
});

connection.end(function (err) {
    if (err) {
        console.log('[query] - : ' + err);
        return;
    }
    console.log('connection end success');
});

