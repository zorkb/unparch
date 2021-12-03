import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router';

function WellShow(props) {

    const [well, setWell] = useState(null);
    const params = useParams()

    useEffect(() => {
        axios.get(`http://localhost:4000/routes/api/wells/${params.id}`).then(res => setWell(res.data))
    }, [])

    const handleDelete = () => {
        axios.delete(`http://localhost:4000/routes/api/wells/${params.id}`)
        .then  (data => window.location.href="/well-list")
    }

        return (
            
                <div className="well-show">
                
                <Navbar />

                { well ? ( 
                <>
                <div className="well-data">
                    <img  src={well.image} alt="" />

                    <p className="input-label">Well name</p>
                        <p className="data-text">{well.wellName}</p>

                    <p className="input-label">Land name</p>
                        <p className="data-text">{well.landName}</p>
                        
                    <p className="input-label">Latitude</p>
                        <p className="data-text">{well.latitude}</p>

                    <p className="input-label">Longitude</p>
                        <p className="data-text">{well.longitude}</p>
                        
                    <p className="input-label">Utility company</p>
                        <p className="data-text">{well.utilityCo}</p>

                    <p className="input-label">Motor make</p>
                        <p className="data-text">{well.motorMake}</p>

                    <p className="input-label">Pump make</p>
                        <p className="data-text">{well.pumpMake}</p>

                    <p className="input-label">Meter number</p>
                        <p className="data-text">{well.meterNumber}</p>

                    <p className="input-label">Serial number</p>
                        <p className="data-text">{well.serialNumber}</p>

                    <p className="input-label">Voltage</p>
                        <p className="data-text">{well.voltage}</p>

                    <p className="input-label">Amps</p>
                        <p className="data-text">{well.amps}</p>

                    <p className="input-label">Date last checked</p>
                        <p className="data-text">{well.lastChecked}</p>

                    <p className="input-label">Date last retrofit</p>
                        <p className="data-text">{well.lastRetrofit}</p>

                    <p className="input-label">Due for check?</p>
                        <p className="data-text">{well.dueForCheck}</p>
                        
                    <p className="input-label">Retrofit desired?</p>
                        <p className="data-text">{well.retrofitDesired}</p>

                    <p className="input-label">Upcoming retrofit date</p>
                        <p className="data-text">{well.retrofitScheduled}</p> 

                    <div className="page-button">
                        <Link to={`/edit-well/${well._id}`}>Update well</Link>
                    </div>
                    <div className="page-button">
                        <p onClick={handleDelete}>Delete well</p>
                    </div>
                </div>
                </>
                ) : (
                    <h1>Loading....</h1>
                    )}
                <Footer />
                </div>
        );
        
}

export default WellShow;