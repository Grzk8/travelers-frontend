import React from "react";

import './SideDrawer.css';

const SideDrawer = props => {
    return <saide className={"side-drawer"} onClick={props.onClick}>{props.children}</saide>
};

export default SideDrawer;