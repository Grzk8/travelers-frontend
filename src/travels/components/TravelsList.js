import React from "react";

import TravelItem from './TravelItem';

const TravelsList = props => {
    return (
        <ul className="travels-list">
            {props.items.map(travel =>
                <TravelItem
                    key={travel.id}
                    id={travel.id}
                    destination={travel.destination}
                    description={travel.description}
                    photos={travel.photos}
                    creatorId={travel.creatorId}
                    location={travel.location}
                />
            )}
        </ul>
    );
};

export default TravelsList;