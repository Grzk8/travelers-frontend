import React from "react";
import { NavLink } from "react-router-dom";

import './NavLinks.css';

const NavLinks = props => {
return (
    <ul className="nav-links">
        <li>
            <NavLink to="/" exact>main</NavLink>
        </li>
        <li>
            <NavLink to="/places/new">new</NavLink>
        </li>
        <li>
            <NavLink to="/auth" exact>login</NavLink>
        </li>
    </ul>
);
};

export default NavLinks;