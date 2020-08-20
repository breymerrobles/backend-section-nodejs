const mongoose = require('mongoose');
const { Schema } = mongoose;
const { compareSync, hashSync, genSaltSync } = require('bcryptjs');
const { UserSchemaName } = require('./model-names');
const { PASSWORD_HASH_SALT } = require('../config');

const UserSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: { createdAt: true, updatedAt: true }
});
UserSchema.methods.toJSON = function() {
    let user = this.toObject();
    delete user.password;
    delete user.createdAt;
    delete user.updatedAt;
    return user;
};
UserSchema.methods.comparePasswords = function(password) {
    return compareSync(password, this.password);
};
UserSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    const salt = genSaltSync(PASSWORD_HASH_SALT);
    const hashPassword = hashSync(user.password, salt);
    user.password = hashPassword;
    next();
});
module.exports = mongoose.model(UserSchemaName, UserSchema);