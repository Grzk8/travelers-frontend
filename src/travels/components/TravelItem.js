import React from "react";

const TravelItem = props => {
    return (
        <li className="place-item">
            <div className="place-item__info">
                <h2>{props.destination}</h2>
                <h3>{props.description}</h3>
            </div>
            <div className="place-item__photos">

            </div>
        </li>
    );
};

export default TravelItem;

// key = { travel.id }
// id = { travel.id }



// userId = { travel.userId }
// location = { travel.location }