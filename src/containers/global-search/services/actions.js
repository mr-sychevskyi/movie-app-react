import {FILTER_MOVIES} from './constants';

export const filterMovies = currentMovies => {
    return {
        type: FILTER_MOVIES,
        currentMovies
    };
};
