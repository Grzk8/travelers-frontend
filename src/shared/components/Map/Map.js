import React, { useState, useRef, useEffect } from "react";
import './Map.css';
import '../Card'
import Card from "../Card";

const Map = props => {
    const mapRef = useRef();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [description, setDescription] = useState();
    const [photos, setPhotos] = useState();
    const [creatorId, setcCreatorId] = useState();
    const [destination, setDestination] = useState();

    const openCartHandler = () => {
        setIsCartOpen(true);
    }

    const closeCartHandler = () => {
        setIsCartOpen(false);
    };

    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: 40.4501, lng: 23.5200 },
            zoom: 4
        });

        props.travelData.map(l => {
            const marker = new window.google.maps.Marker({
                position: l.location,
                map: map,
                title: l.destination,
                description: l.description,
                photos: l.photos,
                crearor: creatorId
            });

            window.google.maps.event.addListener(
                marker, 'click', function () {
                    { setDestination(marker.title) }
                    { setDescription(marker.description) }
                    { setPhotos(marker.photos) }
                    { setcCreatorId(marker.crearor) }
                    { openCartHandler() }
                });
            return marker;
        });
        console.log(destination)
    });

    return (
        <div className="map_container">
            <div ref={mapRef} className="map"></div>
            {isCartOpen ? (
                <Card className="travel_card">
                    <div className="my_travel_container">
                        <div className="my_travel_container_top">
                        <div className="my_travel_container_top-close" onClick={closeCartHandler}></div>
                            <h2>{destination}</h2>
                        </div>
                        <p>{description}</p>
                        {Object.values(photos).map(photo => {
                            return <img key={photo} height="400px" width="400px" src={photo} ></img>
                        })}
                        {console.log(photos)}
                    </div>
                </Card>
            ) : null}
        </div>
    );
};

export default Map;