import React from 'react';
import { Link } from 'react-router-dom';
import '../css/well-card.css'

const WellCard = (props) => {
    const well = props.well;
    const welltest = props.welltest;

    return(
        <div className="card-container">
            <img className="well-img" src={well.image} alt="" />
            <div className="well-info">
                <h2>
                    <Link to={`/show-well/${well._id}`}>
                        {well.wellName}
                    </Link>
                </h2>
                <div className="data-tiles">
                    <h2 className="card-data">gpm</h2>
                    <p className="card-data-title">Flow rate</p>
                    <h2 className="card-data">ft</h2>
                    <p className="card-data-title">Pumping water level</p>
                    <h2 className="card-data">ft</h2>
                    <p className="card-data-title">Standing water level</p>
                    <h2 className="card-data">ft</h2>
                    <p className="card-data-title">Draw down</p>
                    <h2 className="card-data">%</h2>
                    <p className="card-data-title">Efficiency</p>
                </div>
            </div>
        </div>
    )
};

export default WellCard;