const mysql = require('mysql');
const { errormessage, info } = require('../ansi-colors-config');

class MySqlConfig {
    constructor() {
        this.MySQLConnection = mysql.createPool({
            host: process.env.HOST || 'localhost',
            user: process.env.USER || 'root',
            password: process.env.PASSWORD || null,
            database: process.env.DATABASE || 'waya',
            // Enable multiple statements in command
            multipleStatements: true
        });
    }

    startConnection() {
        this.MySQLConnection.getConnection(function (err) {
            if (err) throw err;
            console.log(info("MYSQL DB Connected!"));
        });
    }
}

module.exports = MySqlConfig;
