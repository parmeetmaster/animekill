const {getConnection} = require("../../utils/sql/core_sql");
const Failure=require('../../models/core_models/failure_model')

const performQuery = async (query) => {
    return await new Promise(function (resolve, reject) {
        try {
            console.log("Inserted Query")
            let connection = getConnection();
            connection.connect();
            connection.query(query, function (error, results, fields) {
                if (error) {
                    console.log(error.message);
                    reject(new Failure(error.message));
                    return;
                }
                return resolve(results);
            });
            connection.end();

        } catch (e) {
            console.log("failure arises")
            reject(new Failure(e.message()));
        }
    })

}


module.exports = {performQuery};