const mongoose = require('mongoose');

const wellDataSchema = new mongoose.Schema({
    wellOwner: { type: mongoose.Types.ObjectId, ref: 'WellOwner' },
    wellName: { type: String, default: 'New Well' },
    landName: { type: String, required: false },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    utilityCo: { type: String, required: false },
    image: { type: String, default:'https://i.ibb.co/zfPx1fc/Well-Default.png' },
    motorMake: { type: String, required: false },
    pumpMake: { type: String, required: false },
    meterNumber: { type: Number, required: false },
    serialNumber: { type: Number, required: false },
    voltage: { type: Number, required: false },
    amps: { type: Number, required: false },
    lastChecked: { type: String, required: false },
    lastRetrofit: { type: String, required: false },
    dueForCheck: { type: Boolean, required: false },
    retrofitDesired: { type: Boolean, required: false },
    retrofitScheduled: { type: String, required: false },
    },
    { timestamps: true },
    { collection: 'well-data' },
);

const WellData = mongoose.model('WellData', wellDataSchema);

module.exports = WellData
