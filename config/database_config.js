const MongoConfig = require('../databases/mongo_config');
const MySqlConfig = require('../databases/mysql_config');

class DatabasesConfig {
    constructor() {
        new MongoConfig();
        new MySqlConfig();
    }   

    connectToAllDatabases(){
        new MongoConfig().startConnection()
        new MySqlConfig().startConnection()
    }
}

module.exports = DatabasesConfig;
