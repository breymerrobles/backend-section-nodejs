const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
require("express-async-errors");
const { NotFoundMiddleware, ErrorMiddleware } = require("../middlewares");
const swaggerUI = require('swagger-ui-express');
const { SWAGGER_PATH } = require('../config');
const swaggerDocument = require(SWAGGER_PATH);
module.exports = function({
    HomeRoutes,
    UserRoutes,
    IdeaRoutes,
    CommentRoutes,
    AuthRoutes
}) {
    const router = express.Router();
    const apiRoutes = express.Router();
    const swaggerRoutes = express.Router();

    apiRoutes
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression());

    apiRoutes.use("/home", HomeRoutes);
    apiRoutes.use("/user", UserRoutes);
    apiRoutes.use("/idea", IdeaRoutes);
    apiRoutes.use("/comment", CommentRoutes);
    apiRoutes.use("/auth", AuthRoutes);

    router.use("/v1/api", apiRoutes);
    swaggerRoutes.use('/user', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
    swaggerRoutes.use('/idea', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
    swaggerRoutes.use('/comment', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
    router.use('/api-docs', swaggerRoutes);
    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);
    return router;
};