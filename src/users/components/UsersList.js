import React from "react";

import './UserItem';
import UsersItem from "./UserItem";
import './UsersList.css';

const UsersList = props => {
    if (!props.users) {
        return (
            <div>
                <p>No users found</p>
            </div>
        )
    }

    return (
        <ul className="users-list">
            {props.users.map(user => {
                return <UsersItem
                    key={user.id}
                    id={user.id}
                    photo={user.photo}
                    firstName={user.firstName}
                    lastName={user.lastName}
                />
            })}
        </ul>
    )
};

export default UsersList;