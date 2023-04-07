const mysql = require('mysql');

function createConnection() {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "amitmaindola",
        database: "ace"
    });

    connection.connect(function(err) {
        if (err){
            console.log(err);
            throw err;
        }
        else{
            console.log("Connected!");
        }
    });
    return connection;
}

async function executeQuery(connection, sql, callback){
    await connection.query(sql, function (err, result) {
        if (err){
            return callback(err, null);
        }
        else{
            return callback(null, result);
        }
    });
}

module.exports = {createConnection, executeQuery};