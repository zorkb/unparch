import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarSignup from '../components/NavbarSignup'
import '../css/form-pages.css';

const handleTestData = () => {
    const navigate = useNavigate()

    const [technicianCompany, setTechnicianCompany] = useState('')
    const [overallPumpingEfficiency, setOverallPumpingEfficiency] = useState('')
    const [pumpingWaterLevel, setPumpingWaterLevel] = useState('')
    const [standingWaterLevel, setStandingWaterLevel] = useState('')
    const [drawDown, setDrawDown] = useState('')
    const [recoveredWaterLevel, setRecoveredWaterLevel] = useState('')
    const [dischargePressureAtGauge, setDischargePressureAtGauge] = useState('')
    const [totalLift, setTotalLift] = useState('')
    const [flowVelocity, setFlowVelocity] = useState('')
    const [measuredFlowRate, setMeasuredFlowRate] = useState('')
    const [customerFlowRate, setCustomerFlowRate] = useState('')
    const [specificCapacity, setSpecificCapacity] = useState('')
    const [millionGallonsPerDay, setMillionGallonsPerDay] = useState('')
    const [cubicFeetPerSecond, setCubicFeetPerSecond] = useState('')
    const [hpInputToMotor, setHpInputToMotor] = useState('')
    const [pctRatedMotorLoad, setPctRatedMotorLoad] = useState('')
    const [kwInputToMotor, setKwInputToMotor] = useState('')
    const [kwHrsPerAcreFt, setKwHrsPerAcreFt] = useState('')
    const [costToPumpAcreFt, setCostToPumpAcreFt] = useState('')
    const [energyCostPerHr, setEnergyCostPerHr] = useState('')
    const [baseCostPerKwh, setBaseCostPerKwh] = useState('')
    const [nameplateRpm, setNameplateRpm] = useState('')
    const [rpmAtGearhead, setRpmAtGearhead] = useState('')
    const [efficiencyAfterRetrofit, setEfficiencyAfterRetrofit] = useState('')
    const [notes, setNotes] = useState('')

    async function addTestData(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:4000/api/testdata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                technicianCompany,
                overallPumpingEfficiency,
                pumpingWaterLevel,
                standingWaterLevel,
                drawDown,
                recoveredWaterLevel,
                dischargePressureAtGauge,
                totalLift,
                flowVelocity,
                measuredFlowRate,
                customerFlowRate,
                specificCapacity,
                millionGallonsPerDay,
                cubicFeetPerSecond,
                hpInputToMotor,
                pctRatedMotorLoad,
                kwInputToMotor,
                kwHrsPerAcreFt,
                energyCostPerHr,
                costToPumpAcreFt,
                baseCostPerKwh,
                nameplateRpm,
                rpmAtGearhead,
                efficiencyAfterRetrofit,
                notes,
            }),
        })

        const data = await response.json()
        if(data.status === 'ok') {
            navigate('/userhome')
        }
    }
    return (
        <div className="form-page">
            <NavbarSignup />
            <div className="form-component">
                <h5 className="form-type">Add test data</h5>
                <h3 className="form-title">Test data for {WellData.wellName}</h3>
                <hr className="form-line" />
                <form className="form-body" onSubmit={addTestData}>
                    <p className="input-label">Technician company</p>
                    <input 
                        className="form-field"
                        value={technicianCompany}
                        onChange={(e) => setTechnicianCompany(e.target.value)}
                        type="text" 
                    />
                    <p className="input-label">Overall pumping efficiency &#40;%&#41;</p>
                    <input 
                        className="form-field"
                        value={overallPumpingEfficiency}
                        onChange={(e) => setOverallPumpingEfficiency(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Pumping water level &#40;ft&#41;</p>
                    <input 
                        className="form-field"
                        value={pumpingWaterLevel}
                        onChange={(e) => setPumpingWaterLevel(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Standing water level &#40;ft&#41;</p>
                    <input 
                        className="form-field"
                        value={standingWaterLevel}
                        onChange={(e) => setStandingWaterLevel(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Draw down &#40;ft&#41;</p>
                    <input 
                        className="form-field"
                        value={drawDown}
                        onChange={(e) => setDrawDown(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Recovered water level &#40;ft&#41;</p>
                    <input 
                        className="form-field"
                        value={recoveredWaterLevel}
                        onChange={(e) => setRecoveredWaterLevel(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Discharge pressure at gauge &#40;psi&#41;</p>
                    <input 
                        className="form-field"
                        value={dischargePressureAtGauge}
                        onChange={(e) => setDischargePressureAtGauge(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Total lift &#40;ft&#41;</p>
                    <input 
                        className="form-field"
                        value={totalLift}
                        onChange={(e) => setTotalLift(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Flow velocity &#40;ft/sec&#41;</p>
                    <input 
                        className="form-field"
                        value={flowVelocity}
                        onChange={(e) => setFlowVelocity(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Measured flow rate &#40;gpm&#41;</p>
                    <input 
                        className="form-field"
                        value={measuredFlowRate}
                        onChange={(e) => setMeasuredFlowRate(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Customer flow rate &#40;gpm&#41;</p>
                    <input 
                        className="form-field"
                        value={customerFlowRate}
                        onChange={(e) => setCustomerFlowRate(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Specific capacity &#40;gpm/ft draw&#41;</p>
                    <input 
                        className="form-field"
                        value={specificCapacity}
                        onChange={(e) => setSpecificCapacity(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Million gallons per 24 hrs</p>
                    <input 
                        className="form-field"
                        value={millionGallonsPerDay}
                        onChange={(e) => setMillionGallonsPerDay(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Cubic feet per second &#40;cfs&#41;</p>
                    <input 
                        className="form-field"
                        value={cubicFeetPerSecond}
                        onChange={(e) => setCubicFeetPerSecond(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Horsepower input to motor</p>
                    <input 
                        className="form-field"
                        value={hpInputToMotor}
                        onChange={(e) => setHpInputToMotor(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Percent of rated motor load &#40;%&#41;</p>
                    <input 
                        className="form-field"
                        value={pctRatedMotorLoad}
                        onChange={(e) => setPctRatedMotorLoad(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Kilowatt input to motor</p>
                    <input 
                        className="form-field"
                        value={kwInputToMotor}
                        onChange={(e) => setKwInputToMotor(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Kilowatt hours per acre foot</p>
                    <input 
                        className="form-field"
                        value={kwHrsPerAcreFt}
                        onChange={(e) => setKwHrsPerAcreFt(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Cost to pump acre foot &#40;$&#41;</p>
                    <input 
                        className="form-field"
                        value={costToPumpAcreFt}
                        onChange={(e) => setCostToPumpAcreFt(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Energy cost &#40;$/hr&#41;</p>
                    <input 
                        className="form-field"
                        value={energyCostPerHr}
                        onChange={(e) => setEnergyCostPerHr(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Base cost per Kwh &#40;$&#41;</p>
                    <input 
                        className="form-field"
                        value={baseCostPerKwh}
                        onChange={(e) => setBaseCostPerKwh(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Nameplate RPM</p>
                    <input 
                        className="form-field"
                        value={nameplateRpm}
                        onChange={(e) => setNameplateRpm(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">RPM at gearhead</p>
                    <input 
                        className="form-field"
                        value={rpmAtGearhead}
                        onChange={(e) => setRpmAtGearhead(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Estimated pumping efficiency after retrofit &#40;%&#41;</p>
                    <input 
                        className="form-field"
                        value={efficiencyAfterRetrofit}
                        onChange={(e) => setEfficiencyAfterRetrofit(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Additional notes</p>
                    <input 
                        className="form-field"
                        id="notes-textbox"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        type="text" 
                    />
                 
                    <input type="submit" value="Save test data" className="big-button" />
                </form>

            </div>
        </div>
    )
}

export default handleTestData;