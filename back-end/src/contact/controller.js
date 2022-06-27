const { addContactService, getContactsById } = require('./service');
const Contact = require('../model/Contact');
const User = require('../model/User');

async function addContact(req, res) {
    try {
        const newContact = await addContactService(req.body);

        const addToUser = await User.updateOne(
            {
                _id: newContact.user,
            },
            {
                $push: {
                    contacts: newContact._id,
                },
            }
        );

        return res.status(200).send(newContact);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

async function getContacts(req, res) {
    try {
        if (req.query.id) {
            const id = req.query.id;
            const result = await getContactsById(id);
            return res.send(result);
        }
    } catch (error) {
        console.log(error);
    }
}

async function deleteContact(req, res) {
    try {
        const contact = await Contact.findOne({ _id: req.query.id });
        if (!contact) {
            return res.send({ message: 'Contact does not exist in database' });
        }

        const deleteResult = await contact.remove();

        await User.updateOne({ _id: contact.user }, { $pull: { contacts: contact._id } });

        return res.send({ message: 'Contact deleted successfully' });
    } catch (error) {
        console.log(error);
    }
}

async function updateContact(req, res) {
    try {
        const contact = await Contact.findByIdAndUpdate(
            { _id: req.query.id },
            {
                $set: {
                    fullName: req.body.fullName,
                    email: req.body.email,
                    phoneNumber: req.body.phoneNumber,
                    relationshipStatus: req.body.relationshipStatus,
                    location: req.body.location,
                },
            }
        );
        return res.send('Contact Updated');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addContact,
    getContacts,
    deleteContact,
    updateContact,
};
