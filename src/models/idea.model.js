const mongoose = require('mongoose');
const { Schema } = mongoose;
const { UserSchemaName, IdeaSchemaName, CommentSchemaName } = require('./model-names');
const IdeaSchema = new Schema({
    idea: { type: String, required: true },
    description: { type: String },
    upvotes: [{ type: Boolean }],
    downvotes: [{ type: Boolean }],
    author: { type: Schema.Types.ObjectId, ref: UserSchemaName, required: true, autopopulate: true },
    comments: [{ type: Schema.Types.ObjectId, ref: CommentSchemaName, required: true, autopopulate: true }]
}, {
    timestamps: { createdAt: true, updatedAt: true }
});

//plugins
IdeaSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model(IdeaSchemaName, IdeaSchema);