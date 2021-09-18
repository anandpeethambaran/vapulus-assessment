const { hashPassword } = require("../../hooks/users");
const { handle_server_error, buildSuccess } = require("../../utils/handleError");

const users = require('../../models/users.model')


exports.createUser = async (req, res) => {
    logger.info(`Endpoint - ${req.originalUrl} [${req.method}]`)
    try {
        let { username, email, password } = req.body

        let hash = await hashPassword(password);

        let userData = new users({
            username,
            email,
            password: hash
        })

        await userData.save();

        delete userData["password"]
        return buildSuccess({ user: userData })


    } catch (error) {
        let serverError = await handle_server_error(error, req);
        return res.status(serverError.code).json(serverError);
    }
}