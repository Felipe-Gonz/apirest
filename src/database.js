const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'buch2ho7r3xwj9w4ilwf-mysql.services.clever-cloud.com',
    user: 'ucjzsckxqtvivfpo',
    password: 'R4T7UW8mzMgbCo8g930q',
    database: 'buch2ho7r3xwj9w4ilwf'
});

mysqlConnection.connect(function (err) {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log('Db is connect');
    }
});

module.exports = mysqlConnection;