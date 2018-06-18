import React from 'react';

import './style.styl';

import ButtonIcon from '../../../components/button-icon/index';

const MovieView = props => {
    const {movie, isOpen} = props;
    const id = movie._id.$oid;

    const handleRemove = e => {
        if (e) {
            e.stopPropagation();

            confirm('Delete film permanently?') && props.removeMovie(id); // eslint-disable-line no-alert
        }
    };

    return (
        <div className={isOpen ? 'movie movie-open' : 'movie'}>
            <h4 className="movie__title">
                <i className="movie__icon material-icons">movie</i>
                <span title={movie.title}>{movie.title}</span>
            </h4>

            <div className="movie__release">
                <span className="movie__subtitle">Release Year:</span>
                <h4 className="movie-year movie-add">{movie.releaseYear}</h4>
            </div>

            <div className="movie__format">
                <span className="movie__subtitle">Format:</span>
                <h4 className="movie-format movie-add">{movie.format}</h4>
            </div>

            {movie.stars && <p className="movie__stars">
                <span className="movie__subtitle">Stars:</span>
                {movie.stars}
            </p>}

            <ButtonIcon class="btn-trash movie__btn-trash" type="delete" action={handleRemove}/>
        </div>
    );
};

export default MovieView;
