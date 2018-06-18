import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import store from '../store';

import CommonView from '../components/common-view';

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <CommonView/>
        </BrowserRouter>
    </Provider>
);

export default App;
