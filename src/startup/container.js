const { createContainer, asClass, asValue, asFunction } = require('awilix');

//Config
const config = require('../config');
//Services
const { HomeService } = require('../services');

//controllers
const { HomeController } = require('../controllers');
const Routes = require('../routes');

//Routes
const { HomeRoutes } = require('../routes/index.routes');

//app 
const app = require('.');
const container = createContainer();
container.register({
    router: asFunction(Routes).singleton(),
    app: asClass(app).singleton(),
    config: asValue(config)

}).register({
    //register services
    HomeService: asClass(HomeService).singleton()
}).register({
    //register controllers
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
}).register({
    //register routes
    HomeRoutes: asFunction(HomeRoutes).singleton()
});
module.exports = container;