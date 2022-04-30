const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port:3306,
    user: 'admin',
    password: 'asd1236547899',
    database: 'animekill'
});

exports.SqlWrapper=function SqlWrapper() {

let value=`INSERT INTO \`Post\` (\`postId\`, \`PostHtmlContent\`, \`videoUrl\`, \`thumbnail\`, \`sequence\`) VALUES ('4', '<div style=\\"margin-top:25px\\" itemprop=\\"text\\">\\r\\n Hi,<br>\\r\\n<br>\\r\\nI am trying to insert into following html code into a column using sql query but \\"incorrect syntax error near Arial\\" message is coming.', 'asd', 'asd', '2');`

    connection.connect();
    connection.query(value, function (error, results, fields) {
        if (error) throw error;
        console.log(results)

      /*  results.map((e)=>{
            console.log(`Result ${e['name']}`);
        })*/
    });

    connection.end();

}
