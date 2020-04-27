import React from 'react';
import {
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

const Nav = () => {
    return <nav>
        <ul>
            <li>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
                <NavLink exact to="/experience" activeClassName="active">Experience</NavLink>
            </li>
            <li>
                <NavLink exact to="/skills" activeClassName="active">Skills</NavLink>
            </li>
            <li>
                <NavLink exact to="/gallery" activeClassName="active">Gallery</NavLink>
            </li>
        </ul>
    </nav>;
};

export default Nav;