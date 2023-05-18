const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const {errormessage} = require('../ansi-colors-config');

class ServiceConfig {
    constructor(app) {
        process.on('unhandledRejection', (reason, p) => {
            console.log(errormessage('Unhandled Rejection at: Promise', p, 'reason:', reason));
            // application specific logging, throwing an error, or other logic here
        });
        this.app = app;
    }

    includeConfig() {
        this.loadAppLevelConfig();
    }

    loadAppLevelConfig(){
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(cors());
    }
}

module.exports = ServiceConfig;