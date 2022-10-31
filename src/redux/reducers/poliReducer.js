import {
    GET_DATA_POLI,
    GET_DATA_POLI_ERROR,
    GET_DATA_POLI_SUCCESS
} from "../types/poliTypes";

const initialState = {
    data: [],
    error: false,
    loading: false,
};

const poliReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_POLI:
            return {
                ...state,
                loading: true,
            };
        case GET_DATA_POLI_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case GET_DATA_POLI_ERROR:
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

export default poliReducer;