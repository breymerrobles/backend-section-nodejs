let _authService = null;

class AuthController {
    constructor({ AuthService }) {
        _authService = AuthService;
    }
    async signUp(req, res) {
        const { body } = req;
        const user = await _authService.signUp(body);
        return res.status(201).send(user);
    }
    async signIn(req, res) {
        const { body } = req;
        const creds = await _authService.signIn(body);
        return res.send(creds);
    }


}
module.exports = AuthController;