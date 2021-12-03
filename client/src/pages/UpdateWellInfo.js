import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../css/form-pages.css';
import axios from 'axios';


class UpdateWellInfo extends Component {
    constructor(props) {
        super(props);

        // this.onChangeWellName = this.onChangeWellName.bind(this);
        // this.onChangeLandName = this.onChangeLandName.bind(this);
        // this.onChangeLatitude = this.onChangeLatitude.bind(this);
        // this.onChangeLongitude = this.onChangeLongitude.bind(this);
        // this.onChangeUtilityCo = this.onChangeUtilityCo.bind(this); 
        // this.onChangeImage = this.onChangeImage.bind(this);
        // this.onChangeMotorMake = this.onChangeMotorMake.bind(this);
        // this.onChangePumpMake = this.onChangePumpMake.bind(this);
        // this.onChangeMeterNumber = this.onChangeMeterNumber.bind(this);
        // this.onChangeSerialNumber = this.onChangeSerialNumber.bind(this);
        // this.onChangeVoltage = this.onChangeVoltage.bind(this);
        // this.onChangeAmps = this.onChangeAmps.bind(this);
        // this.onChangeLastChecked = this.onChangeLastChecked.bind(this);
        // this.onChangeLastRetrofit = this.onChangeLastRetrofit.bind(this);
        // this.onChangeDueForCheck = this.onChangeDueForCheck.bind(this);
        // this.onChangeRetrofitDesired = this.onChangeRetrofitDesired.bind(this);
        // this.onChangeRetrofitScheduled = this.onChangeRetrofitScheduled.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
        

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
    
    componentDidMount() {
        axios.get(`http://localhost:4000/students/edit-student/${this.props.params.id}`)
            .then(res => {
                this.setState({
                    wellName: res.data.wellName, 
                    landName: res.data.landName, 
                    latitude: res.data.latitude,
                    longitude: res.data.longitude,
                    utilityCo: res.data.utilityCo,
                    image: res.data.motorMake,
                    motorMake: res.data.motorMake,
                    pumpMake: res.data.pumpMake,
                    meterNumber: res.data.meterNumber,
                    serialNumber: res.data.serialNumber,
                    voltage: res.data.voltage,
                    amps: res.data.amps,
                    lastChecked: res.data.lastChecked,
                    lastRetrofit: res.data.lastRetrofit,
                    dueForCheck: res.data.dueForCheck,
                    retrofitDesired: res.data.retrofitDesired,
                    retrofitScheduled: res.data.retrofitScheduled,
                });
        })
        .catch((error) => {
        console.log(error);
        })
    }

    onChangeWellName = (e) => {
        this.setState({ wellName: e.target.value })
    }

    onChangeLandName = (e) => {
        this.setState({ landName: e.target.value })
    }

    onChangeLatitude = (e) => {
        this.setState({ latitude: e.target.value })
    }

    onChangeLongitude = (e) => {
        this.setState({ longitude: e.target.value })
    }

    onChangeUtilityCo = (e) => {
        this.setState({ utilityCo: e.target.value })
    }

    onChangeimage = (e) =>  {
        this.setState({ image: e.target.value })
    }

    onChangeMotorMake = (e) => {
        this.setState({ motorMake: e.target.value })
    }

    onChangePumpMake = (e) => {
        this.setState({ pumpMake: e.target.value })
    }

    onChangeMeterNumber = (e) => {
        this.setState({ meterNumber: e.target.value })
    }

    onChangeSerialNumber = (e) => {
        this.setState({ serialNumber: e.target.value })
    }

    onChangeVoltage = (e) => {
        this.setState({ voltage: e.target.value })
    }

    onChangeAmps = (e) => {
        this.setState({ amps: e.target.value })
    }

    onChangeLastChecked = (e) => {
        this.setState({ lastChecked: e.target.value })
    }

    onChangeLastRetrofit = (e) => {
        this.setState({ lastRetrofit: e.target.value })
    }

    onChangeDueForCheck = (e) => {
        this.setState({ dueForCheck: e.target.value })
    }

    onChangeRetrofitDesired = (e) => {
        this.setState({ retrofitDesired: e.target.value })
    }

    onChangeRetrofitScheduled = (e) => {
        this.setState({ retrofitScheduled: e.target.value })
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
        };

    axios
        .put(`http://localhost:4000/routes/api/wells/${this.props.params.id}`, data)
        .then((res) => {
            console.log(res.data)
            console.log('Well successfully updated')
        }).catch((error) => {
            console.log(error)
        })
        
        window.location.href='/well-list';
    }
    
    render() {
        return(
            <div className="form-page">
                <Navbar />
                <div className="form-component">
                    <h5 className="form-type">UPDATE WELL</h5>
                    <h3 className="form-title">Baseline information</h3>
                    <hr className="form-line" />
                    <form className="form-body" noValidate onSubmit={(e) => this.onSubmit(e)}>
                        <p className="input-label">Well name</p>
                        <input 
                            name="wellName"
                            className="form-field"
                            value={this.state.wellName}
                            onChange={this.onChangeWellName}
                            type="text" 
                        />
                        <p className="input-label">Land name</p>
                        <input
                            name="landName" 
                            className="form-field"
                            value={this.state.landName}
                            onChange={this.onChangeLandName}
                            type="text" 
                        />
                        <p className="input-label">Latitude</p>
                        <input 
                            name="latitude"
                            className="form-field"
                            value={this.state.latitude}
                            onChange={this.onChangeLatitude}
                            type="number" 
                        />
                        <p className="input-label">Longitude</p>
                        <input 
                            name="longitude"
                            className="form-field"
                            value={this.state.longitude}
                            onChange={this.onChangeLongitude}
                            type="number" 
                        />
                        <p className="input-label">Utility company</p>
                        <input 
                            name="utilityCo" 
                            className="form-field"
                            value={this.state.utilityCo}
                            onChange={this.onChangeUtilityCo}
                            type="text" 
                        />
                        <p className="input-label">Image</p>
                        <input 
                            name="image"
                            className="form-field"
                            value={this.state.image}
                            onChange={this.onChangeImage}
                            type="url" 
                        />
                        <p className="input-label">Motor make</p>
                        <input 
                            name="motorMake" 
                            className="form-field"
                            value={this.state.motorMake}
                            onChange={this.onChangeMotorMake}
                            type="text" 
                        />
                        <p className="input-label">Pump make</p>
                        <input 
                            name="pumpMake" 
                            className="form-field"
                            value={this.state.pumpMake}
                            onChange={this.OnChangePumpMake}
                            type="text" 
                        />
                        <p className="input-label">Meter number</p>
                        <input 
                            name="meterNumber" 
                            className="form-field"
                            value={this.state.meterNumber}
                            onChange={this.onChangeMeterNumber}
                            type="number" 
                        />
                        <p className="input-label">Serial number</p>
                        <input 
                            name="serialNumber" 
                            className="form-field"
                            value={this.state.serialNumber}
                            onChange={this.onChangeSerialNumber}
                            type="number" 
                        />
                        <p className="input-label">Voltage</p>
                        <input 
                            name="voltage" 
                            className="form-field"
                            value={this.state.voltage}
                            onChange={this.onChangeVoltage}
                            type="number" 
                        />
                        <p className="input-label">Amps</p>
                        <input 
                            name="amps" 
                            className="form-field"
                            value={this.state.amps}
                            onChange={this.onChangeAmps}
                            type="number" 
                        />
                        <p className="input-label">Date last checked</p>
                        <input 
                            name="lastChecked" 
                            className="form-field"
                            value={this.state.lastChecked}
                            onChange={this.onChangeLastChecked}
                            type="date" 
                        />
                        <p className="input-label">Date last retrofit</p>
                        <input 
                            name="lastRetrofit"
                            className="form-field"
                            value={this.state.lastRetrofit}
                            onChange={this.onChangeLastRetrofit}
                            type="date" 
                        />
                        <div className="radio-container">
                            <p className="input-label">Due for check?</p>
                            <input 
                                name="dueForCheck" 
                                className="radio-button-yes"
                                value={this.state.dueForCheck}
                                onChange={this.onChangeDueForCheck}
                                type="radio" 
                            />
                                <label for="yes">Yes</label>
                            <input 
                                name="dueForCheck"  
                                className="radio-button-no"
                                value={this.state.dueForCheck}
                                onChange={this.onChangeDueForCheck}
                                type="radio" 
                            />
                                <label for="no">No</label>
                            <p className="input-label">Retrofit desired?</p>
                            <input 
                                name="retrofitDesired" 
                                className="radio-button-yes"
                                value={this.state.retrofitDesired}
                                onChange={this.onChangeRetrofitDesired}
                                type="radio" 
                            />
                                <label for="yes">Yes</label>
                            <input 
                                name="retrofitDesired" 
                                className="radio-button-no"
                                value={this.state.retrofitDesired}
                                onChange={this.onChangeRetrofitDesired}
                                type="radio" 
                            />
                                <label for="no">No</label>
                        </div>
                        <p className="input-label">Upcoming retrofit date</p>
                        <input 
                            name="retrofitScheduled" 
                            className="form-field"
                            value={this.state.retrofitScheduled}
                            onChange={this.onChangeRetrofitScheduled}
                            type="date" 
                        /> 
                        <input type="submit" value="Save well information" className="big-button" />
                    </form>

                </div>
            </div>
        )
    }
}

export default UpdateWellInfo;