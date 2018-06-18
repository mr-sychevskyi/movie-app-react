import React, {Component} from 'react';

import {connect} from 'react-redux';

import {loadMovies} from './services/actions';
import Loader from '../../components/loader';

class LoadMoviesController extends Component {
    componentDidMount() {
        this.props.loadMovies();
    }

    render() {
        const {movies, filteredMovies, isLoading, view, loader = true} = this.props;

        if (loader && !isLoading) {
            return <Loader/>;
        }

        return movies && view({
            movies,
            filteredMovies
        });
    }
}

const mapStateToProps = state => ({
    movies: state.movies.data,
    filteredMovies: state.movies.filteredData,
    isLoading: state.movies.isLoading
});

const mapDispatchToProps = {loadMovies};

export default connect(mapStateToProps, mapDispatchToProps)(LoadMoviesController);
