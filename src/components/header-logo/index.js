import React from 'react';
import {NavLink} from 'react-router-dom';

import './style.styl';
import logo from './logo-movie.png';

const HeaderLogo = () => (
    <NavLink to="/" className="header-logo">
        <img src={logo} className="img-responsive" alt="logo-movie"/>
    </NavLink>
);

export default HeaderLogo;
