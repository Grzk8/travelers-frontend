import React, { useState } from "react";

import Header from "./Header";
import Logo from '../../../shared/components/Logo/Logo';
import SideDrawer from "./SideDrawer";
import NavLinks from "./NavLinks";
import Backdrop from '../Backdrop/Backdrop'
import './Navigation.css';

const Navigation = props => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openDrawerHandler = () => {
        setIsDrawerOpen(true);
    }

    const closeDrawerHandler = () => {
        setIsDrawerOpen(false);
    };

    return (
        <>
            <Header>
                <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
                    <span />
                    <span />
                    <span />
                </button>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
                <Logo />
            </Header>
            {isDrawerOpen ? (
                <>
                    <SideDrawer onClick={closeDrawerHandler}>
                        <nav className="main-navigation__drawer-nav">
                            <NavLinks />
                        </nav>
                    </SideDrawer>
                    <Backdrop onClick={closeDrawerHandler} />
                </>
            ) : null

            };
        </>

    );
};

export default Navigation;