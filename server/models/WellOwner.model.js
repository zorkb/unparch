const mongoose = require('mongoose')

const WellOwner = new mongoose.Schema({
    company: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },

    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    streetAddress: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    avatar: { type: String, required: false },
    registrationDate: { type: String, default: Date.now },
    },
    { collection: 'well-owner-data' }
)

const model = mongoose.model('WellOwnerData', WellOwner)

module.exports = model
