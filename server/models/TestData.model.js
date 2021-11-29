const mongoose = require('mongoose');

const testDataSchema = new mongoose.Schema({
    well: { type: mongoose.Types.ObjectId, ref: 'WellData' },
    technician: { type: mongoose.Types.ObjectId, ref: 'Technician' },
    //look into grabbing from technician model
    technicianCompany: { type: String, required: false },
    overallPumpingEfficiency: { type: Number, required: true },
    pumpingWaterLevel: { type: Number, required: false },
    standingWaterLevel: { type: Number, required: false },
    drawDown: { type: Number, required: false },
    recoveredWaterLevel: { type: Number, required: false },
    dischargePressureAtGuage: { type: Number, required: false },
    totalLift: { type: Number, required: false },
    flowVelocity: { type: Number, required: false },
    measuredFlowRate: { type: Number, required: false },
    customerFlowRate: { type: Number, required: false },
    specificCapacity: { type: Number, required: false },
    millionGallonsPerDay: { type: Number, required: false },
    cubicFeetPerSecond: { type: Number, required: false },
    HpInputToMotor: { type: Number, required: false },
    PctRatedMotorLoad: { type: Number, required: false },
    kwInputToMotor: { type: Number, required: false },
    energyCostPerHr: { type: Number, required: false },
    baseCostPerKwh: { type: Number, required: false },
    nameplateRpm: { type: Number, required: false },
    RpmAtGearhead: { type: Number, required: false },
    retrofitRecommended: { type: Boolean, required: false },
    efficiencyAfterRetrofit: { type: Number, required: false },
    notes: { type: String, required: false },
    },
    { timestamps: true },
    { collection: 'well-test-data' },
);

const TestData = mongoose.model('TestData', testDataSchema);

module.exports = testData