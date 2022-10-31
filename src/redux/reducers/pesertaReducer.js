import {
    GET_DATA_PESERTA,
    GET_DATA_PESERTA_ERROR,
    GET_DATA_PESERTA_SUCCESS
} from "../types/pesertaTypes";

const initialState = {
    data: [],
    error: false,
    loading: false,
};

const pesertaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_PESERTA:
            return {
                ...state,
                loading: true,
            };
        case GET_DATA_PESERTA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case GET_DATA_PESERTA_ERROR:
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

export default pesertaReducer;