import React from 'react';

import {connect} from 'react-redux';

import LoadMoviesController from '../../controllers/load-movies/index';
import {filterMovies} from './services/actions';
import GlobalSearchView from './views/index';

const GlobalSearch = dispatchProps => (
    <LoadMoviesController
        view={props => <GlobalSearchView filterMovies={dispatchProps.filterMovies} {...props} />}
        loader={false}
    />
);

const mapDispatchToProps = {filterMovies};

export default connect(null, mapDispatchToProps)(GlobalSearch);
