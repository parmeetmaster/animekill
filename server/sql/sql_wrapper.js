const mysql = require('mysql');
const Failure = require('./sql_models/failure_model')
const malScraper = require('mal-scraper');


var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'admin',
    password: 'asd1236547899',
    database: 'animekill'
});

const animeList = async () => {
    return await new Promise(function (resolve, reject) {
        let query = "SELECT * FROM `anime`";
        connection.connect();
        connection.query(query, function (error, results, fields) {
            if (error) {
                reject(new Failure(error.sqlMessage));
                return;
            }
            console.log(results);
            return resolve(results);
        });
        connection.end();
    })


}




module.exports = {
    animeList
};

