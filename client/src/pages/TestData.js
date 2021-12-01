import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarSignup from '../components/NavbarSignup'
import '../css/form-pages.css';

const handleWellCreation = () => {
    const navigate = useNavigate()

    const [wellName, setWellName] = useState('')
    const [landName, setLandName] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [utilityCo, setUtilityCo] = useState('')
    const [image, setImage] = useState('')
    const [motorMake, setMotorMake] = useState('')
    const [pumpMake, setPumpMake] = useState('')
    const [meterNumber, setMeterNumber] = useState('')
    const [serialNumber, setSerialNumber] = useState('')
    const [voltage, setVoltage] = useState('')
    const [amps, setAmps] = useState('')
    const [lastChecked, setLastChecked] = useState('')
    const [lastRetrofit, setLastRetrofit] = useState('')
    const [lastChecked, setLastChecked] = useState('')
    const [dueForCheck, setDueForCheck] = useState('')
    const [retrofitDesired, setRetrofitDesired] = useState('')
    const [retrofitScheduled, setRetrofitScheduled] = useState('')

    async function createWell(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:4000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                wellName, 
                landName, 
                latitude,
                longitude,
                utilityCo,
                image,
                motorMake,
                pumpMake,
                meterNumber,
                serialNumber,
                voltage,
                amps,
                lastChecked,
                lastRetrofit,
                dueForCheck,
                retrofitDesired,
                retrofitScheduled,
            }),
        })

        const data = await response.json()
        if(data.status === 'ok') {
            navigate('/signin')
        }
    }
    return (
        <div className="form-page">
            <NavbarSignup />
            <div className="form-component">
                <h5 className="form-type">Add a new well</h5>
                <h3 className="form-title">Baseline information</h3>
                <hr className="form-line" />
                <form className="form-body" onSubmit={createWell}>
                    <p className="input-label">Well name</p>
                    <input 
                        className="form-field"
                        value={wellName}
                        onChange={(e) => setWellName(e.target.value)}
                        type="text" 
                    />
                    <p className="input-label">Land name</p>
                    <input 
                        className="form-field"
                        value={landName}
                        onChange={(e) => setLandName(e.target.value)}
                        type="text" 
                    />
                    <p className="input-label">Latitude</p>
                    <input 
                        className="form-field"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Longitude</p>
                    <input 
                        className="form-field"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Utility company</p>
                    <input 
                        className="form-field"
                        value={utilityCo}
                        onChange={(e) => setUtilityCo(e.target.value)}
                        type="text" 
                    />
                    <p className="input-label">Image</p>
                    <input 
                        className="form-field"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        type="url" 
                    />
                    <p className="input-label">Motor make</p>
                    <input 
                        className="form-field"
                        value={motorMake}
                        onChange={(e) => setMotorMake(e.target.value)}
                        type="text" 
                    />
                    <p className="input-label">Pump make</p>
                    <input 
                        className="form-field"
                        value={pumpMake}
                        onChange={(e) => setPumpMake(e.target.value)}
                        type="text" 
                    />
                    <p className="input-label">Meter number</p>
                    <input 
                        className="form-field"
                        value={meterNumber}
                        onChange={(e) => setMeterNumber(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Serial number</p>
                    <input 
                        className="form-field"
                        value={serialNumber}
                        onChange={(e) => setSerialNumber(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Voltage</p>
                    <input 
                        className="form-field"
                        value={voltage}
                        onChange={(e) => setVoltage(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Amps</p>
                    <input 
                        className="form-field"
                        value={amps}
                        onChange={(e) => setAmps(e.target.value)}
                        type="number" 
                    />
                    <p className="input-label">Date last checked</p>
                    <input 
                        className="form-field"
                        value={lastChecked}
                        onChange={(e) => setLastChecked(e.target.value)}
                        type="date" 
                    />
                    <p className="input-label">Date last retrofit</p>
                    <input 
                        className="form-field"
                        value={lastRetrofit}
                        onChange={(e) => setLastRetrofit(e.target.value)}
                        type="date" 
                    />
                    <p className="input-label">Due for check?</p>
                    <input 
                        className="radio-button"
                        id="yes"
                        value={dueForCheck}
                        onChange={(e) => setDueForCheck(e.target.value)}
                        type="radio" 
                    />
                        <label for="yes">Yes</label>
                    <input 
                        className="radio-button"
                        id="no"
                        value={dueForCheck}
                        onChange={(e) => setDueForCheck(e.target.value)}
                        type="radio" 
                    />
                        <label for="no">No</label>
                    <p className="input-label">Retrofit desired?</p>
                    <input 
                        className="radio-button"
                        id="yes"
                        value={retrofitDesired}
                        onChange={(e) => setRetrofitDesired(e.target.value)}
                        type="radio" 
                    />
                        <label for="yes">Yes</label>
                    <input 
                        className="radio-button"
                        id="no"
                        value={retrofitDesired}
                        onChange={(e) => setRetrofitDesired(e.target.value)}
                        type="radio" 
                    />
                        <label for="no">No</label>
                    <p className="input-label">Upcoming retrofit date</p>
                    <input 
                        className="form-field"
                        value={retrofitScheduled}
                        onChange={(e) => setRetrofitScheduled(e.target.value)}
                        type="date" 
                    />
                 
                    <input type="submit" value="Save well information" className="big-button" />
                </form>

            </div>
        </div>
    )
}

export default handleWellCreation;