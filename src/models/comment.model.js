const mongoose = require('mongoose');
const { Schema } = mongoose;
const { CommentSchemaName } = require('./model-names');
const CommentSchema = new Schema({
    comment: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'user', required: true, autopopulate: true }
}, {
    timestamps: { createdAt: true, updatedAt: true }
});
//plugins
CommentSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model(CommentSchemaName, CommentSchema);