import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../shared/components/Spinner/LoadingSpinner';

import UsersList from '../components/UsersList';

const Users = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState();


    useEffect (() => {
        const request = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('http://localhost:5000/api/users');
                const responseData = await response.json();

                if (!response.ok) {
                    throw new Error(responseData.message);
                }
                setUsers(responseData.users);
            } catch (err) {
                console.log(err);
            }
            setIsLoading(false);
        };
        request();
    });

    return <>
        {isLoading && (<div className='center'> <LoadingSpinner /></div>)}
        { !isLoading && Users && <UsersList users={Users} />}
    </>

};

export default Users;