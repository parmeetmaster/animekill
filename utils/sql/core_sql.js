const mysql = require('mysql');
const Failure=require('../../models/core_models/failure_model')

var getConnection = () => {

    try {
        return mysql.createConnection({
            host     : '143.198.139.1',
            port     :  3306,
            user     : 'anime_kill_web_mobile',
            password : 'admin',
            database : 'anime_kill_web_mobile',
            multipleStatements: true
        })

    } catch (e) {
       // throw e;
        return Failure("unable to make sql connection");

    }
}

module.exports = {getConnection}
