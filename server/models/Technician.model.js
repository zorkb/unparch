const mongoose = require('mongoose');

const technicianSchema = new mongoose.Schema({
    company: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    wellsChecked: { type: mongoose.Types.ObjectId, ref: 'WellData' },
    streetAddress: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    avatar: { type: String, required: false },
    },
    { timestamps: true },
    { collection: 'technician-data' },
);

const Technician = mongoose.model('Technician', technicianSchema);

module.exports = Technician

//could this be accomplished in one user?
