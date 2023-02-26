import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Card from "../../shared/components/Card";
import Map from '../../shared/components/Map/Map';
import LoadingSpinner from "../../shared/components/Spinner/LoadingSpinner";

const UsersTravels = () => {
    const [myTravels, setMyTravels] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const userId = useParams().userId;

    useEffect(() => {
        const fetchMyTravels = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`http://localhost:5000/api/travels/user/${userId}`);
                const responseData = await response.json();
                setMyTravels(responseData.travels)
            } catch (err) {
                console.log(err);
            }
            setIsLoading(false);
        }
        fetchMyTravels();
    }, [userId]);

    return <>
        <p>Travels map</p>
        {isLoading && (<div className='center'> <LoadingSpinner /></div>)}
        {myTravels ? <Map travelData={myTravels} zoom={4} /> : null}
    </>
};

export default UsersTravels;