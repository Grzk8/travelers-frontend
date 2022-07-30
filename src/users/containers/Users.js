import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const Users = [{
        id: '001',
        firstName: 'Grzegorz',
        lastName: 'Kaczor',
        photo: 'https://media-exp1.licdn.com/dms/image/C4E35AQHWU9Dy4Qo5cA/profile-framedphoto-shrink_200_200/0/1603349375467?e=1659718800&v=beta&t=3N8kUVzXatAodLv0HXulRX65WLVb6HBT6DiUVVI-szo'
    }];

    return <UsersList users={Users}/>
};

export default Users;