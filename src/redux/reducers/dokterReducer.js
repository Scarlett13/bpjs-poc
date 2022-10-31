import {
    GET_DATA_DOKTER,
    GET_DATA_DOKTER_ERROR,
    GET_DATA_DOKTER_SUCCESS
} from "../types/dokterTypes";

const initialState = {
    data: [],
    error: false,
    loading: false,
};

const dokterReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_DOKTER:
            return {
                ...state,
                loading: true,
            };
        case GET_DATA_DOKTER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case GET_DATA_DOKTER_ERROR:
            return {
                ...state,
                data: [],
                loading: false,
                error: true,
            };
        default:
            return state;
    }
};

export default dokterReducer;