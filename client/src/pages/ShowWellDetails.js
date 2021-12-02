import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import WellCard from '../components/WellCard';
import { useParams } from 'react-router';

function WellShow(props) {

    const [well, setWell] = useState(null);
    const params = useParams()

    useEffect(() => {
        axios.get(`http://localhost:4000/routes/api/wells/${params.id}`).then(res => setWell(res.data))
    }, [])

        return (
            <div className='well-show'>
            <Navbar />
            <div className="well-data">
                <img src={well.image} alt="" />
            </div>
            <Footer />
            </div>
        );
    
}

export default WellShow;