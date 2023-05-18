const { depositPaystack, callbackPaystack, getBalance } = require('./controllers/deposit_paystack_riders');
const { tranferUserstoDrivers, tranferUserstoOtherUsers, tranferDriverstoOtherDrivers } = require('./controllers/transfers')
const driverHandler = require('./controllers/deposit_paystack_driver');
class Routes {
    constructor(app) {
        this.app = app;
    }
    /* creating app Routes starts */
    userRoutes() {
        //paystack routes
        this.app.post('/charge', depositPaystack);
        this.app.get('/callback', callbackPaystack);

        //get balance
        this.app.post('/getbalance', getBalance);

        //transfers
        this.app.post('/transferToDrivers', tranferUserstoDrivers);
        this.app.post('/transferToUsers', tranferUserstoOtherUsers);
    }

    driverRoutes(){
        //paystack routes
        this.app.post('/chargeDriver', driverHandler.depositPaystack);
        this.app.get('/callbackdriver', driverHandler.callbackPaystack);

        //get balance
        this.app.post('/getbalancedriver', driverHandler.getBalance)

        //transfers
        this.app.post('/tranfertodriver', tranferDriverstoOtherDrivers);
    }

    routesConfig(){
        this.userRoutes();
        this.driverRoutes();
    }
}

module.exports = Routes;