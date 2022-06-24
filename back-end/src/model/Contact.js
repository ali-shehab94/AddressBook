const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        max: 255,
    },
    phoneNumber: {
        type: String,
        required: true,
        max: 255,
    },
    relationshipStatus: {
        type: Number,
        required: true,
        max: 1024,
    },
    email: {
        type: String,
        required: true,
        max: 1024,
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: false,
        },
        coordinates: {
            type: [Number],
            required: false,
        },
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Contact', contactSchema);
