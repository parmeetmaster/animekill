const mysql = require('mysql');



var getConnection =()=>{
    return mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'admin',
        password: 'asd1236547899',
        database: 'animekill'
    })


}

module.exports={getConnection}
