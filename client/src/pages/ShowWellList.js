import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import WellCard from '../components/WellCard';

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
            wellList = "No wells added yet. Click below to get started!"
        } else {
            wellList = wells.map((well, k) => 
                <WellCard well={well} key={k} />
            );
        }
        
        return(
            <div>
                <Link to="/create-well">
                    Add New Well
                </Link>
                <div>
                    {wellList}
                </div>
            </div>
        )
    }
}

export default ShowWellList;