import {get} from '../../../api/index';
import {
    GET_MOVIES_REQUEST,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_FAILURE
} from './constants';

export const loadMovies = () => dispatch => dispatch({
    CALL_API: {
        types: [
            GET_MOVIES_REQUEST,
            GET_MOVIES_SUCCESS,
            GET_MOVIES_FAILURE
        ],
        endpoint: () => get('movies')
    }
});
