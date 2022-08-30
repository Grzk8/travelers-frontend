import React from "react";
import { Link } from "react-router-dom";

import Card from "../../shared/components/Card/Card";
import Avatar from "../../shared/components/Avatar/Avatar";
import './UserItem.css';

const UsersItem = props => {
    return (
        <li className="user-item">
            <Card className="user-item_content">
                <Link to={`/${props.id}/profile`}>
                    <div className="user-item_photo">
                        <Avatar photo={props.photo} alt={props.firstName + ' ' + props.lastName} />
                    </div>
                    <div className="user-item_data">
                        <p>{props.fullName}</p>
                    </div>
                </Link>
            </Card>
        </li>
    );
};

export default UsersItem;