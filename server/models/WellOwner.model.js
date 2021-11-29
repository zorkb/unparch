const mongoose = require('mongoose');

const wellOwnerSchema = new mongoose.Schema({
    company: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    streetAddress: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    avatar: { type: String, required: false },
    },
    { timestamps: true },
    { collection: 'well-owner-data' },
);

const WellOwner = mongoose.model('WellOwner', wellOwnerSchema);

module.exports = WellOwner
