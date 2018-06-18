import {remove} from '../../../api/index';
import {
    DELETE_MOVIES_REQUEST,
    DELETE_MOVIES_SUCCESS,
    DELETE_MOVIES_FAILURE
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
