var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    prot: '3306',
    database: 'nodejsdb',
    connectTimeout:10

});

connection.connect();



/*
//增
var userAddSql = "insert into userinfo(Id,UserName,UserPass) value(0,?,?)";
var userAddSql_Params = ['MrWen','123456'];

connection.query(userAddSql,userAddSql_Params, function (err, result) {
    if(err) {
        console.log("[INSERT ERROR] - " + err.message);
        return;
    }
    console.log("-------------------------------------INSERT---------------------------------------");
    console.log("INSERT ID:" + result);
    console.log('---------------------------------------END-----------------------------------------');
});

*/

/*
//改
var userUpdataSql = "update userinfo set UserPass = ? where Id = ?";
var userUpdataSql_Params = ["123123123","7"]
connection.query(userUpdataSql, userUpdataSql_Params, function (err, result) {
    if (err) {
        console.log("UPDATA ERROR :",err.message);
    }
    console.log("-------------------------------------UPDATE---------------------------------------");
    console.log("UPDATE :" + result);
    console.log('---------------------------------------END-----------------------------------------');
})
*/

/*
//查
var userSelectSql = "select * from userinfo";

connection.query(userSelectSql, function (err, result) {
    if (err) {
        console.log("UPDATA ERROR :", err.message);
    }
    console.log("-------------------------------------select---------------------------------------");
    console.log("select :" + '2' + JSON.stringify(result));//解析返回的数据
    console.log('---------------------------------------select-----------------------------------------');
})

*/

/*
//刪


var userDelteSql = "delete  FROM userinfo where Id = ?";
var userDelteSql_Params = [7]

connection.query(userDelteSql, userDelteSql_Params, function (err, result) {
    if (err) {
        console.log("DELETE ERROR:",err.message);
    }
    console.log("-------------------------------------DELETE---------------------------------------");
    console.log("DELETE :" + result.affectedRows);
    console.log('---------------------------------------DELETE-----------------------------------------');
})

*/

/*
//存儲過程


var userProc = "call P_UserInfo(?,?,?,@ExtReturnVal);";
var userProc_Params = ['0', 'wwj', 'wwjwwj'];
connection.query(userProc, userProc_Params, function (err, result) {
    if (err) {
        console.log("PROC ERROR:", err.message);
    }
    console.log("-------------------------------------PROC---------------------------------------");
    console.log(result);
    console.log("PROC :" + result[0][0].ExtReturnVal);
    console.log('---------------------------------------PROC--------------------------------------');
});

*/

connection.end();

/* 測試鏈接
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

*/