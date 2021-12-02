const mongoose = require('mongoose');

const TestDataSchema = new mongoose.Schema({
    well: { type: mongoose.Types.ObjectId, ref: 'WellData' },
    technician: { type: mongoose.Types.ObjectId, ref: 'User' },
    //look into grabbing from technician model
    technicianCompany: { type: String, required: false },
    overallPumpingEfficiency: { type: Number, required: true },
    pumpingWaterLevel: { type: Number, required: false },
    standingWaterLevel: { type: Number, required: false },
    drawDown: { type: Number, required: false },
    recoveredWaterLevel: { type: Number, required: false },
    dischargePressureAtGauge: { type: Number, required: false },
    totalLift: { type: Number, required: false },
    flowVelocity: { type: Number, required: false },
    measuredFlowRate: { type: Number, required: false },
    customerFlowRate: { type: Number, required: false },
    specificCapacity: { type: Number, required: false },
    millionGallonsPerDay: { type: Number, required: false },
    cubicFeetPerSecond: { type: Number, required: false },
    hpInputToMotor: { type: Number, required: false },
    pctRatedMotorLoad: { type: Number, required: false },
    kwInputToMotor: { type: Number, required: false },
    kwHrsPerAcreFt: { type: Number, required: false },
    costToPumpAcreFt: { type: Number, required: false },
    energyCostPerHr: { type: Number, required: false },
    baseCostPerKwh: { type: Number, required: false },
    nameplateRpm: { type: Number, required: false },
    rpmAtGearhead: { type: Number, required: false },
    efficiencyAfterRetrofit: { type: Number, required: false },
    notes: { type: String, required: false },
    },
    { timestamps: true },
    { collection: 'well-test-data' },
);

const WellTest = mongoose.model('welltest', TestDataSchema);

module.exports = WellTest;