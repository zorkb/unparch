import React from 'react';
import { Link } from 'react-router-dom';

const WellCard = (props) => {
    const well = props.well;

    return(
        <div className="card-container">
            <img src={well.image} alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-well/${well._id}`}>
                        {well.name}
                    </Link>
                </h2>
                <h5>Location</h5>
                <p>{well.latitude}</p>
                <p>{well.longitude}</p>
            </div>
        </div>
    )
};

export default WellCard;