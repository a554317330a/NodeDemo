var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database : 'nodejsdb'
});

//監聽connect
pool.on('connection', function (connection) {
    connection.query(" set SEESION  auto_increment_increment=1  ");
}); 

/*
pool.query(" select 1+1 as result  ", function (err, rows, fields) {
    if (err) {
        console.log("err:",err.message);
    }
    console.log(" sa :", rows[0].result)
});
*/



