const {getConnection} = require("../../utils/sql/core_sql");

const performLogin = async (email, password) => {
    return await new Promise(function (resolve, reject) {
        try {
            console.log("search begin")
            let connection = getConnection();

            let query = "SELECT * FROM `UserCredentials` WHERE `email` LIKE 'parmeetyash@gmail.com' AND `password` LIKE 'asd1236547899'";

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


module.exports = {performLogin: performLogin};