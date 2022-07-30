import React from "react";
import { Link } from "react-router-dom";

import './Logo.css';

const Logo = () => {
    return (
        <div className="logo_content">
            <Link className="logo" to={'/'} >Travelers</Link>
        </div>
    );
};

export default Logo;