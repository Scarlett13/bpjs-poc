import {
    GET_DATA_KESADARAN,
    GET_DATA_KESADARAN_ERROR,
    GET_DATA_KESADARAN_SUCCESS
} from "../types/kesadaranTypes";

const initialState = {
    data: [],
    error: false,
    loading: false,
};

const kesadaranreducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_KESADARAN:
            return {
                ...state,
                loading: true,
            };
        case GET_DATA_KESADARAN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case GET_DATA_KESADARAN_ERROR:
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

export default kesadaranreducer;