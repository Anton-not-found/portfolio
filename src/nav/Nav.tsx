import React from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

export const Nav = () => {
    return (
        <div className={s.nav}>
            <NavLink to="main">Main</NavLink>
            <NavLink to="skills">Skills</NavLink>
            <NavLink to="projects">Projects</NavLink>
            <NavLink to="contacts">Contacts</NavLink>
        </div>
    );
};

