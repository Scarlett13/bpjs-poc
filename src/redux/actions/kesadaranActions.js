import {
    GET_DATA_KESADARAN,
    GET_DATA_KESADARAN_ERROR,
    GET_DATA_KESADARAN_SUCCESS
} from "../types/kesadaranTypes";

export const getDataKesadaranAction = () => ({
    type: GET_DATA_KESADARAN,
});

export const getDataKesadaranActionSuccess = (data) => ({
    type: GET_DATA_KESADARAN_SUCCESS,
    payload: data,
});

export const getDataKesadaranActionError = () => ({
    type: GET_DATA_KESADARAN_ERROR,
});