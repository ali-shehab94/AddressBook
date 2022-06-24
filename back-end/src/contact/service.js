const Contact = require('../model/Contact');

async function addContact(body) {
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

module.exports = {
    addContact,
};
