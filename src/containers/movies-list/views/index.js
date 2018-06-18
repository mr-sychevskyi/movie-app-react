import React, {Component, Fragment} from 'react';
import './style.styl';

import Movie from '../../movie';
import FileLoader from '../../file-loader';
import MoviesControlsView from './movies-controls';

class MoviesListView extends Component {
    state = {
        openMovieId: null,
        sortOrder: 1
    };

    accordionClick = movieId => () => {
        this.setState({
            openMovieId: this.state.openMovieId !== movieId ? movieId : null
        });
    };

    toggleOrder = () => {
        this.setState({
            sortOrder: this.state.sortOrder === 1 ? -1 : 1
        });
    };

    render() {
        const {filteredMovies} = this.props;

        return (
            <Fragment>
                {filteredMovies.length === 0
                    ?
                    <h2 className="info-title">No movies!</h2>
                    :
                    <section className="movies">
                        <MoviesControlsView
                            toggleOrder={this.toggleOrder}
                            sortOrder={this.state.sortOrder}
                            {...this.props}
                        />

                        <ul className="movies__list">
                            {filteredMovies.map(item => (
                                <li key={item._id.$oid} onClick={this.accordionClick(item._id.$oid)}>
                                    <Movie movie={item} isOpen={this.state.openMovieId === item._id.$oid}/>
                                </li>)
                            )}
                        </ul>
                    </section>}
                <FileLoader/>
            </Fragment>
        );
    }
}

export default MoviesListView;
