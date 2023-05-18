const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const {errormessage} = require('../ansi-colors-config');

class ServiceConfig {
    constructor(app) {
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