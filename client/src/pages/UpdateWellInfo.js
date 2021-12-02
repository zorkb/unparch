import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../css/form-pages.css';
import axios from 'axios';


class CreateWell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wellName: 'New Well', 
                landName: '', 
                latitude: 0,
                longitude: 0,
                utilityCo: '',
                image: 'https://i.ibb.co/zfPx1fc/Well-Default.png',
                motorMake: '',
                pumpMake: '',
                meterNumber: 0,
                serialNumber: 0,
                voltage: 0,
                amps: 0,
                lastChecked: '',
                lastRetrofit: '',
                dueForCheck: false,
                retrofitDesired: false,
                retrofitScheduled: '',
        };
    }    
    
    onChange = e => {
        this.setState( { [e.target.name]: e.target.value});
    };

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
        .post('http://localhost:4000/routes/api/wells/', data)
        .then(res => {
            this.setState({
                wellName: 'New Well', 
                landName: '', 
                latitude: 0,
                longitude: 0,
                utilityCo: '',
                image: 'https://i.ibb.co/zfPx1fc/Well-Default.png',
                motorMake: '',
                pumpMake: '',
                meterNumber: 0,
                serialNumber: 0,
                voltage: 0,
                amps: 0,
                lastChecked: '',
                lastRetrofit: '',
                dueForCheck: false,
                retrofitDesired: false,
                retrofitScheduled: '',
            })
            window.location.href='/well-list';
        })
        .catch(err => {
            console.log(err)
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
                    <form className="form-body" noValidate onSubmit={(e) => this.onSubmit(e)}>
                        <p className="input-label">Well name</p>
                        <input 
                            name="wellName"
                            className="form-field"
                            value={this.state.wellName}
                            onChange={(e) => this.onChange(e)}
                            type="text" 
                        />
                        <p className="input-label">Land name</p>
                        <input
                            name="landName" 
                            className="form-field"
                            value={this.state.landName}
                            onChange={(e) => this.onChange(e)}
                            type="text" 
                        />
                        <p className="input-label">Latitude</p>
                        <input 
                            name="latitude"
                            className="form-field"
                            value={this.state.latitude}
                            onChange={(e) => this.onChange(e)}
                            type="number" 
                        />
                        <p className="input-label">Longitude</p>
                        <input 
                            name="longitude"
                            className="form-field"
                            value={this.state.longitude}
                            onChange={(e) => this.onChange(e)}
                            type="number" 
                        />
                        <p className="input-label">Utility company</p>
                        <input 
                            name="utilityCo" 
                            className="form-field"
                            value={this.state.utilityCo}
                            onChange={(e) => this.onChange(e)}
                            type="text" 
                        />
                        <p className="input-label">Image</p>
                        <input 
                            name="image"
                            className="form-field"
                            value={this.state.image}
                            onChange={(e) => this.onChange(e)}
                            type="url" 
                        />
                        <p className="input-label">Motor make</p>
                        <input 
                            name="motorMake" 
                            className="form-field"
                            value={this.state.motorMake}
                            onChange={(e) => this.onChange(e)}
                            type="text" 
                        />
                        <p className="input-label">Pump make</p>
                        <input 
                            name="pumpMake" 
                            className="form-field"
                            value={this.state.pumpMake}
                            onChange={(e) => this.onChange(e)}
                            type="text" 
                        />
                        <p className="input-label">Meter number</p>
                        <input 
                            name="meterNumber" 
                            className="form-field"
                            value={this.state.meterNumber}
                            onChange={(e) => this.onChange(e)}
                            type="number" 
                        />
                        <p className="input-label">Serial number</p>
                        <input 
                            name="serialNumber" 
                            className="form-field"
                            value={this.state.serialNumber}
                            onChange={(e) => this.onChange(e)}
                            type="number" 
                        />
                        <p className="input-label">Voltage</p>
                        <input 
                            name="voltage" 
                            className="form-field"
                            value={this.state.voltage}
                            onChange={(e) => this.onChange(e)}
                            type="number" 
                        />
                        <p className="input-label">Amps</p>
                        <input 
                            name="amps" 
                            className="form-field"
                            value={this.state.amps}
                            onChange={(e) => this.onChange(e)}
                            type="number" 
                        />
                        <p className="input-label">Date last checked</p>
                        <input 
                            name="lastChecked" 
                            className="form-field"
                            value={this.state.lastChecked}
                            onChange={(e) => this.onChange(e)}
                            type="date" 
                        />
                        <p className="input-label">Date last retrofit</p>
                        <input 
                            name="lastRetrofit"
                            className="form-field"
                            value={this.state.lastRetrofit}
                            onChange={(e) => this.onChange(e)}
                            type="date" 
                        />
                        <div className="radio-container">
                            <p className="input-label">Due for check?</p>
                            <input 
                                name="dueForCheck" 
                                className="radio-button-yes"
                                value={this.state.dueForCheck}
                                onChange={(e) => this.onChange(e)}
                                type="radio" 
                            />
                                <label for="yes">Yes</label>
                            <input 
                                name="dueForCheck"  
                                className="radio-button-no"
                                value={this.state.dueForCheck}
                                onChange={(e) => this.onChange(e)}
                                type="radio" 
                            />
                                <label for="no">No</label>
                            <p className="input-label">Retrofit desired?</p>
                            <input 
                                name="retrofitDesired" 
                                className="radio-button-yes"
                                value={this.state.retrofitDesired}
                                onChange={(e) => this.onChange(e)}
                                type="radio" 
                            />
                                <label for="yes">Yes</label>
                            <input 
                                name="retrofitDesired" 
                                className="radio-button-no"
                                value={this.state.retrofitDesired}
                                onChange={(e) => this.onChange(e)}
                                type="radio" 
                            />
                                <label for="no">No</label>
                        </div>
                        <p className="input-label">Upcoming retrofit date</p>
                        <input 
                            name="retrofitScheduled" 
                            className="form-field"
                            value={this.state.retrofitScheduled}
                            onChange={(e) => this.onChange(e)}
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