import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/show-well-list.css'
import WellCard from '../components/WellCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class ShowWellList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wells: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:4000/routes/api/wells')
            .then(res => {
                this.setState({
                    wells: res.data
                })
            })
            .catch(err => {
                console.log("Error in ShowWellList!");
            });
    }

    render() {
        const wells = this.state.wells;
        console.log("PrintWell: " + wells);
        let wellList;

        if(!wells) {
            wellList = "No wells added yet."
        } else {
            wellList = wells.map((well, k) => 
                <WellCard well={well} key={k} />
            );
        }
        
        return(
            <div className="well-list-container">
                <Navbar />
                <div className="page-header">
                    <h1 className="company-name">Gladstone Land Corporation</h1>
                    <h4 className="company-location">McLean, VA</h4>
                </div>
                <div className="top-buttons">
                    <Link className="button-small" to="/create-well" >
                            Add New Well
                    </Link>
                
                </div>
                
                <div className="well-list-body">
                    
                    <div className="well-list">
                        {wellList}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ShowWellList;