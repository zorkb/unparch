const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    company: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    streetAddress: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    avatar: { type: String, required: false },
    role: {
        type: String,
        required: [false, 'please select an account type'],
        enum: ['Well Owner', 'Technician']
    },
    wells: { type: mongoose.Types.ObjectId, ref: 'WellData' },
    },
    { timestamps: true },
    { collection: 'well-owner-data' },
);

const User = mongoose.model('User', userSchema);

module.exports = User
