import React from 'react';

import Header from '../header';
import Main from '../main';
import ModalParent from '../modal/index';

import './style.styl';

const CommonView = () => (
    <div className="app">
        <Header/>
        <Main/>
        <ModalParent/>
    </div>
);

export default CommonView;

