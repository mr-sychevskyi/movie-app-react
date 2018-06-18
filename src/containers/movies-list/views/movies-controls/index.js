import React from 'react';

import ButtonIcon from '../../../../components/button-icon';

const MoviesControlsView = props => {
    const {filteredMovies, sortOrder} = props;

    const sortAlgorithm = (data, order) =>
        data.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()) * order);

    const sortAlphabetical = () => {
        props.sortMovies(sortAlgorithm(filteredMovies, sortOrder));
        props.toggleOrder();
    };

    const removeAll = () => {
        confirm('Delete all films permanently?') && // eslint-disable-line no-alert
        filteredMovies.map(item => props.removeMovie(item._id.$oid));
    };

    return (
        <div className="movies__controls">
            <h4 className="movies__title">Movies</h4>
            <ButtonIcon class="btn-sort" type="sort" text="Sort by title" action={sortAlphabetical}/>
            <ButtonIcon class="btn-trash" type="delete" text="Delete all" action={removeAll}/>
        </div>
    );
};

export default MoviesControlsView;
