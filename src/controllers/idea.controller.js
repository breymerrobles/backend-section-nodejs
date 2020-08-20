let _ideaService = null;

class IdeaController {
    constructor({ IdeaService }) {
        _ideaService = IdeaService;
    }
    async get(req, res) {
        const { ideaId } = req.params;
        const idea = await _ideaService.get(ideaId);
        res.status(200).send(idea);
    }
    async getAll(req, res) {
        const { pageSize, pageNum } = req.query;
        const ideas = await _ideaService.getAll(pageSize, pageNum);
        res.status(200).send(ideas);
    }
    async create(req, res) {
        const { body } = req;
        const createdIdea = await _ideaService.create(body);
        return res.status(201).send(createdIdea);
    }
    async update(req, res) {
        const { body } = req;
        const { ideaId } = req.params;
        const idea = await _ideaService.update(ideaId, body);
        res.status(200).send(idea);
    }
    async delete(req, res) {
        const { ideaId } = req.params;
        const val = await _ideaService.delete(ideaId);
        res.status(200).send(val);
    }

    async getUserIdeas(req, res) {
        const { userId } = req.params;
        const ideas = await _ideaService.getUserIdeas(userId);
        res.status(200).send(ideas);
    }

    async upvoteIdea(req, res) {
        const { ideaId } = req.params;
        const idea = await _ideaService.upvoteIdea(ideaId);
        res.status(200).send(idea);
    }
    async downvoteIdea(req, res) {
        const { ideaId } = req.params;
        const idea = await _ideaService.downvoteIdea(ideaId);
        res.status(200).send(idea);
    }
}
module.exports = IdeaController;