import React, {Fragment} from 'react';
import {Link} from "react-router-dom"

const NavBar = () => (
    <Fragment>
    <ul className="NavBar">
    <h2>NavBar</h2>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/foodlist">Food</Link>
        </li>
        <li>
            <Link to="/diary">Diary</Link>
        </li>
    </ul>
    </Fragment>
);

export default NavBar;