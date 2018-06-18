import React from 'react';

import {connect} from 'react-redux';

import LoadMoviesController from '../../controllers/load-movies/index';
import {sortMovies, removeMovie} from './services/actions';
import MoviesListView from './views/index';

const MoviesList = dispatchProps => (
    <LoadMoviesController
        view={props => (<MoviesListView
            sortMovies={dispatchProps.sortMovies}
            removeMovie={dispatchProps.removeMovie}
            {...props}
        />)}
    />
);

const mapDispatchToProps = {sortMovies, removeMovie};

export default connect(null, mapDispatchToProps)(MoviesList);
