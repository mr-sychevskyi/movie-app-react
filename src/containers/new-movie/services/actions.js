import {post} from '../../../api/index';
import {
    POST_MOVIES_REQUEST,
    POST_MOVIES_SUCCESS,
    POST_MOVIES_FAILURE
} from './constants';

export const add = movie => dispatch => dispatch({
    CALL_API: {
        types: [
            POST_MOVIES_REQUEST,
            POST_MOVIES_SUCCESS,
            POST_MOVIES_FAILURE
        ],
        endpoint: () => post('movies', movie)
    }
});
