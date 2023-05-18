const express = require('express');
const http = require('http');
const ServiceConfig = require('./config/service_config');
const DatabaseConfig = require('./config/database_config');
const Routes = require('./routes');

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

    /* Including app Routes starts */
    includeRoutes(){
        new Routes(this.app).routesConfig();
    }

    startTheServer() {
        this.databaseConfig();
        this.serviceConfig();
        this.includeRoutes();

        const port = process.env.PORT;
        //const host = 'localhost';

        this.http.listen(port, () => {
            console.log(`Listening on Port: ${port}`);
        });
    }
}

module.exports = new Server();
