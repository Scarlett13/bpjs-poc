import {
    GET_DATA_DOKTER,
    GET_DATA_DOKTER_ERROR,
    GET_DATA_DOKTER_SUCCESS
} from "../types/dokterTypes";

export const getDataDokterAction = () => ({
    type: GET_DATA_DOKTER,
});

export const getDataDokterActionSuccess = (data) => ({
    type: GET_DATA_DOKTER_SUCCESS,
    payload: data,
});

export const getDataDokterActionError = () => ({
    type: GET_DATA_DOKTER_ERROR,
});