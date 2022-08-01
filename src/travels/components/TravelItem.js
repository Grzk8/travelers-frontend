import React from "react";
import { Link, HashRouter} from "react-router-dom";


const TravelItem = props => {
    const url = `/profile/${props.creatorId}/travel/${props.id}`
    
    return (

        
        <li className="place-item">
            <div className="place-item__info">

            <HashRouter>
            <Link to={url} >{props.destination}</Link>
            </HashRouter>
            

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