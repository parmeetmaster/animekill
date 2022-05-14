const Failure = require('./sql_models/failure_model')
const {getConnection} = require('../sql/core/core_sql');


const searchResult = async (keywords) => {
    let connection=getConnection();

    return await new Promise(function (resolve, reject) {
        let query = "SELECT * FROM `anime` WHERE MATCH(`anime_synonyms`) AGAINST(\'" + keywords + "\' IN NATURAL LANGUAGE MODE) & `main_index`=1;";
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
    searchResult
};

