import {
    GET_DATA_DIAGNOSA,
    GET_DATA_DIAGNOSA_ERROR,
    GET_DATA_DIAGNOSA_SUCCESS
} from "../types/diagnosaTypes";

const initialState = {
    data: [],
    error: false,
    loading: false,
};

const diagnosaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_DIAGNOSA:
            return {
                ...state,
                loading: true,
            };
        case GET_DATA_DIAGNOSA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case GET_DATA_DIAGNOSA_ERROR:
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

export default diagnosaReducer;