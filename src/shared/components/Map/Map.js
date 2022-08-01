import React, { useRef, useEffect } from "react";

import './Map.css';

const Map = props => {
    const mapRef = useRef();

    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: 40.4501, lng: 23.5200 },
            zoom: 3
        });

        props.travelData.map(l => {
            const marker = new window.google.maps.Marker({ position: l.location, map: map, title: l.destination, label: l.destination, url: `/profile/${l.creatorId}/${l.id}` });

            window.google.maps.event.addListener(marker, 'click', function () { window.location.href = marker.url });
            return marker;
        });
    });

    return <div ref={mapRef} className="map"></div>
};

export default Map;