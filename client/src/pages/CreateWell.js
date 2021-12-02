import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../css/form-pages.css';
import axios from 'axios';


class CreateWell extends Component {
    constructor() {
        super();
        this.state = {
            wellName: '', 
            landName: '', 
            latitude: '',
            longitude: '',
            utilityCo: '',
            image: '',
            motorMake: '',
            pumpMake: '',
            meterNumber: '',
            serialNumber: '',
            voltage: '',
            amps: '',
            lastChecked: '',
            lastRetrofit: '',
            dueForCheck: '',
            retrofitDesired: '',
            retrofitScheduled: '',
        };
    }    
    
    onChange = e => {
        this.setState( { [e.target.name]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();

        const data = {
            wellName: this.state.wellName, 
            landName: this.state.landName, 
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            utilityCo: this.state.utilityCo,
            image: this.state.image,
            motorMake: this.state.motorMake,
            pumpMake: this.state.pumpMake,
            meterNumber: this.state.meterNumber,
            serialNumber: this.state.serialNumber,
            voltage: this.state.voltage,
            amps: this.state.amps,
            lastChecked: this.state.lastChecked,
            lastRetrofit: this.state.lastRetrofit,
            dueForCheck: this.state.dueForCheck,
            retrofitDesired: this.state.retrofitDesired,
            retrofitScheduled: this.state.retrofitScheduled,
        }

    axios
        .post('http://localhost:4000/routes/api/wells', data)
        .then(res => {
            this.setState[{
                wellName: '', 
                landName: '', 
                latitude: '',
                longitude: '',
                utilityCo: '',
                image: '',
                motorMake: '',
                pumpMake: '',
                meterNumber: '',
                serialNumber: '',
                voltage: '',
                amps: '',
                lastChecked: '',
                lastRetrofit: '',
                dueForCheck: '',
                retrofitDesired: '',
                retrofitScheduled: '',
            }]
            this.props.history.push('/');
        })
        .catch(err => {
            console.log("Error in CreateWell!")
        });
    }
    
    render() {
        return(
            <div className="form-page">
                <Navbar />
                <div className="form-component">
                    <h5 className="form-type">ADD A NEW WELL</h5>
                    <h3 className="form-title">Baseline information</h3>
                    <hr className="form-line" />
                    <form className="form-body" noValidate onSubmit={this.onSubmit}>
                        <p className="input-label">Well name</p>
                        <input 
                            className="form-field"
                            value={this.state.wellName}
                            onChange={this.onChange}
                            type="text" 
                        />
                        <p className="input-label">Land name</p>
                        <input 
                            className="form-field"
                            value={this.state.landName}
                            onChange={this.onChange}
                            type="text" 
                        />
                        <p className="input-label">Latitude</p>
                        <input 
                            className="form-field"
                            value={this.state.latitude}
                            onChange={this.onChange}
                            type="number" 
                        />
                        <p className="input-label">Longitude</p>
                        <input 
                            className="form-field"
                            value={this.state.longitude}
                            onChange={this.onChange}
                            type="number" 
                        />
                        <p className="input-label">Utility company</p>
                        <input 
                            className="form-field"
                            value={this.state.utilityCo}
                            onChange={this.onChange}
                            type="text" 
                        />
                        <p className="input-label">Image</p>
                        <input 
                            className="form-field"
                            value={this.state.image}
                            onChange={this.onChange}
                            type="url" 
                        />
                        <p className="input-label">Motor make</p>
                        <input 
                            className="form-field"
                            value={this.state.motorMake}
                            onChange={this.onChange}
                            type="text" 
                        />
                        <p className="input-label">Pump make</p>
                        <input 
                            className="form-field"
                            value={this.state.pumpMake}
                            onChange={this.onChange}
                            type="text" 
                        />
                        <p className="input-label">Meter number</p>
                        <input 
                            className="form-field"
                            value={this.state.meterNumber}
                            onChange={this.onChange}
                            type="number" 
                        />
                        <p className="input-label">Serial number</p>
                        <input 
                            className="form-field"
                            value={this.state.serialNumber}
                            onChange={this.onChange}
                            type="number" 
                        />
                        <p className="input-label">Voltage</p>
                        <input 
                            className="form-field"
                            value={this.state.voltage}
                            onChange={this.onChange}
                            type="number" 
                        />
                        <p className="input-label">Amps</p>
                        <input 
                            className="form-field"
                            value={this.state.amps}
                            onChange={this.onChange}
                            type="number" 
                        />
                        <p className="input-label">Date last checked</p>
                        <input 
                            className="form-field"
                            value={this.state.lastChecked}
                            onChange={this.onChange}
                            type="date" 
                        />
                        <p className="input-label">Date last retrofit</p>
                        <input 
                            className="form-field"
                            value={this.state.lastRetrofit}
                            onChange={this.onChange}
                            type="date" 
                        />
                        <div className="radio-container">
                            <p className="input-label">Due for check?</p>
                            <input 
                                className="radio-button-yes"
                                value={this.state.dueForCheck}
                                onChange={this.onChange}
                                type="radio" 
                            />
                                <label for="yes">Yes</label>
                            <input 
                                className="radio-button-no"
                                value={this.state.dueForCheck}
                                onChange={this.onChange}
                                type="radio" 
                            />
                                <label for="no">No</label>
                            <p className="input-label">Retrofit desired?</p>
                            <input 
                                className="radio-button-yes"
                                value={this.state.retrofitDesired}
                                onChange={this.onChange}
                                type="radio" 
                            />
                                <label for="yes">Yes</label>
                            <input 
                                className="radio-button-no"
                                value={this.state.retrofitDesired}
                                onChange={this.onChange}
                                type="radio" 
                            />
                                <label for="no">No</label>
                        </div>
                        <p className="input-label">Upcoming retrofit date</p>
                        <input 
                            className="form-field"
                            value={this.state.retrofitScheduled}
                            onChange={this.onChange}
                            type="date" 
                        /> 
                        <input type="submit" value="Save well information" className="big-button" />
                    </form>

                </div>
            </div>
        )
    }
}

export default CreateWell;