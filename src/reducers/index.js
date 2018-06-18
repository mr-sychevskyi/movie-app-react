import {combineReducers} from 'redux';

import {
    GET_MOVIES_REQUEST,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_FAILURE,

    POST_MOVIES_REQUEST,
    POST_MOVIES_SUCCESS,
    POST_MOVIES_FAILURE,

    DELETE_MOVIES_REQUEST,
    DELETE_MOVIES_SUCCESS,
    DELETE_MOVIES_FAILURE,

    FILTER_MOVIES,
    SORT_MOVIES
} from '../constants/index';

export const DEFAULT_STATE = {
    data: [],
    filteredData: [],
    isLoading: false
};

const movies = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case GET_MOVIES_REQUEST:
            return {...state};
        case GET_MOVIES_SUCCESS:
            return {
                ...state,
                data: action.response,
                filteredData: action.response,
                isLoading: true
            };
        case GET_MOVIES_FAILURE:
            return DEFAULT_STATE;

        case POST_MOVIES_REQUEST:
            return {...state};
        case POST_MOVIES_SUCCESS:
            return {
                ...state,
                data: [action.response, ...state.data],
                filteredData: [action.response, ...state.data],
                isLoading: true
            };
        case POST_MOVIES_FAILURE:
            return DEFAULT_STATE;

        case FILTER_MOVIES: {
            return {
                ...state,
                filteredData: action.currentMovies,
                isLoading: true
            };
        }

        case SORT_MOVIES:
            return {
                ...state,
                filteredData: action.currentMovies,
                isLoading: true
            };

        case DELETE_MOVIES_REQUEST:
            return {...state};
        case DELETE_MOVIES_SUCCESS: {
            return {
                ...state,
                data: state.data.filter(item => item._id.$oid !== action.id),
                filteredData: state.data.filter(item => item._id.$oid !== action.id),
                isLoading: true
            };
        }
        case DELETE_MOVIES_FAILURE:
            return DEFAULT_STATE;

        default:
            return state;
    }
};

export default combineReducers({movies});
