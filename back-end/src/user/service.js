const User = require('../model/User');
const Contact = require('../model/Contact');

async function getUsers() {
    return await User.find().populate('contacts');
}

async function getById(id) {
    return await User.findById(id);
}

async function addUser(body, hashPassword) {
    const { name, email, fullName } = body;

    const user = new User({
        fullName,
        email,
        password: hashPassword,
    });

    return await user.save();
}

async function getByEmail(email) {
    return await User.findOne({
        email,
    });
}

module.exports = {
    getUsers,
    getById,
    addUser,
    getByEmail,
};
