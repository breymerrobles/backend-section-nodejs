let _userService = null;

class UserController {
    constructor({ UserService }) {
        _userService = UserService;
    }
    async get(req, res) {
        const { userId } = req.params;
        const user = await _userService.get(userId);
        res.status(200).send(user);
    }
    async getAll(req, res) {
        const { pageSize, pageNum } = req.query;
        const users = await _userService.getAll(pageSize, pageNum);
        res.status(200).send(users);
    }
    async update(req, res) {
        const { body } = req;
        const { userId } = req.params;
        const user = await _userService.update(userId, body);
        res.status(200).send(user);
    }
    async delete(req, res) {
        const { userId } = req.params;
        const val = await _userService.delete(userId);
        res.status(200).send(val);
    }
}
module.exports = UserController;