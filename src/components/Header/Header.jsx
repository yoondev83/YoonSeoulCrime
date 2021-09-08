import React from "react";
import { Fragment } from "react";
import Navbar from "./Navbar";

const Header = props => {
    return(
        <Fragment>
            <header>
                <Navbar/>
            </header>
        </Fragment>
    );
};

export default Header;
