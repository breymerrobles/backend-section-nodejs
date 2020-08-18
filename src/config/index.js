if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
module.exports = {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT,
    APPLICATION_NAME: process.env.APPLICATION_NAME,
    PASSWORD_HASH_SALT: 10
};