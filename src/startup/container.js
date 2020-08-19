const { createContainer, asClass, asValue, asFunction } = require('awilix');
//Config
const config = require('../config');
//Services
const { HomeService, UserService, IdeaService, CommentService } = require('../services');
//controllers
const { HomeController } = require('../controllers');
const Routes = require('../routes');
//Routes
const { HomeRoutes } = require('../routes/index.routes');
//app 
const app = require('.');
//Models
const { User, Idea, Comment } = require('../models');
//Repository
const { CommentRepository, IdeaRepository, UserRepository } = require('../repositories');
const container = createContainer();
container.register({
    router: asFunction(Routes).singleton(),
    app: asClass(app).singleton(),
    config: asValue(config)

}).register({
    //register services
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton()
}).register({
    //register controllers
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
}).register({
    //register routes
    HomeRoutes: asFunction(HomeRoutes).singleton()
}).register({
    //register models
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment)
}).register({
    //register repository
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton()

});
module.exports = container;