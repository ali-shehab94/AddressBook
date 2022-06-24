const Contact = require('../model/Contact');

async function addContactService(body) {
    const { fullName, phoneNumber, relationshipStatus, email, location, user } = body;

    const contact = new Contact({
        fullName,
        phoneNumber,
        relationshipStatus,
        email,
        location,
        user,
    });

    return await contact.save();
}

async function getContactsById(user_id) {
    return await Contact.find({ user: user_id });
}

module.exports = {
    addContactService,
    getContactsById,
};
