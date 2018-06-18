import {remove} from '../../../api/index';
import {
    DELETE_MOVIES_REQUEST,
    DELETE_MOVIES_SUCCESS,
    DELETE_MOVIES_FAILURE,
    SORT_MOVIES
} from './constants';

export const removeMovie = id => dispatch => dispatch({
    CALL_API: {
        types: [
            DELETE_MOVIES_REQUEST,
            DELETE_MOVIES_SUCCESS,
            DELETE_MOVIES_FAILURE
        ],
        endpoint: () => remove(`movies/${id}`)
    },
    id
});

export const sortMovies = currentMovies => {
    return {
        type: SORT_MOVIES,
        currentMovies
    };
};
