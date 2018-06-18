import React from 'react';

import './style.styl';

import HeaderLogo from '../header-logo';
import GlobalSearch from '../../containers/global-search';

const Header = () => {
    const currSection = location.pathname.slice(1);

    return (
        <header className={'header'}>
            <HeaderLogo/>
            {currSection === 'movies' && <GlobalSearch/>}
        </header>
    );
};

export default Header;
