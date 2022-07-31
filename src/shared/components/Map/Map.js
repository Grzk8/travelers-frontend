import React, {useRef} from "react";


import './Map.css';

const Map = props => {
    const mapRef = useRef();
    const map = new window.google.maps.Map(mapRef.current);

    return <div ref={mapRef} ></div>
};

export default Map;