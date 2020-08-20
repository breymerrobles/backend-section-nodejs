if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
module.exports = {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT,
    APPLICATION_NAME: process.env.APPLICATION_NAME,
    PASSWORD_HASH_SALT: 10,
    JWT_SECRET: process.env.JWT_SECRET,
    CACHE_KEY: process.env.CACHE_KEY,
    SWAGGER_PATH: `../config/swagger/${process.env.SWAGGER_DOC}`
};