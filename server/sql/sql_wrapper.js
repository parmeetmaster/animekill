const mysql = require('mysql');
const Failure = require('./sql_models/failure_model')
const malScraper = require('mal-scraper');

const {getConnection} = require('../sql/core/core_sql');


const animeList = async () => {
    let connection = getConnection();
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

