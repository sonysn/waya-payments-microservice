const express = require('express');
const http = require('http');
const ServiceConfig = require('./config/service_config');
const DatabaseConfig = require('./config/database_config');

class Server {
    constructor() {
        this.app = express();
        this.http = http.Server(this.app);
    }

    databaseConfig() {
        new DatabaseConfig(this.app).connectToAllDatabases();
    }

    serviceConfig(){
        new ServiceConfig(this.app).includeConfig();
    }

    startTheServer() {
        this.databaseConfig();
        this.serviceConfig()
        // this.includeRoutes();

        const port = 4000;
        const host = 'localhost';

        this.http.listen(port, host, () => {
            console.log(`Listening on http://${host}:${port}`);
        });
    }
}

module.exports = new Server();
