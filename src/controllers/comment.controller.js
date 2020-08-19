let _commentService = null;

class CommentController {
    constructor({ CommentService }) {
        _commentService = CommentService;
    }
    async get(req, res) {
        const { commentId } = req.params;
        const comment = await _commentService.get(commentId);
        res.status(200).send(comment);
    }

    async update(req, res) {
        const { body } = req;
        const { commentId } = req.params;
        const comment = await _commentService.update(commentId, body);
        res.status(200).send(comment);
    }
    async delete(req, res) {
        const { commentId } = req.params;
        const val = await _commentService.delete(commentId);
        res.status(200).send(val);
    }


    async getIdeaComments(req, res) {
        const { ideaId } = req.params;
        const comments = await _commentService.getIdeaComments(ideaId);
        return res.send(comments);
    }

    async createComment(req, res) {
        const { body } = req;
        const { ideaId } = req.params;
        const { id: userId } = req.user;
        const createdComment = await _commentService.createComment(
            body,
            ideaId,
            userId
        );
        return res.status(201).send(createdComment);
    }


}
module.exports = CommentController;