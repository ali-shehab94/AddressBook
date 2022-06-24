const { getUsers, addUser, getByEmail, getById } = require('./service');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.TOKEN_SECRET || '';

async function get(req, res) {
    try {
        if (req.query.id) {
            // ?id=k1231 -> query paramet
            const id = req.query.id;
            const result = await getById(id);
            console.log('result of specific user =>', result);
            return res.send(result);
        }

        const result = await getUsers();

        return res.send(result);
    } catch (error) {
        console.log(error);
    }
}

async function register(req, res) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const addUserResult = await addUser(req.body, hashPassword);

        return res.send({ message: 'Successfuly registered', userID: addUserResult._id });
    } catch (error) {
        console.log(error);
    }
}

async function login(req, res) {
    try {
        const user = await getByEmail(req.body.email);
        if (!user) return res.status(400).send('invalid email');

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send('invalid pass');

        const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, TOKEN_SECRET);

        return res.header('auth-token', token).send(token);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

module.exports = {
    get,
    register,
    login,
};
