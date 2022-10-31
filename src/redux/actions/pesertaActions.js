import {
    GET_DATA_PESERTA,
    GET_DATA_PESERTA_ERROR,
    GET_DATA_PESERTA_SUCCESS
} from "../types/pesertaTypes";

export const getDataPesertaAction = () => ({
    type: GET_DATA_PESERTA,
});

export const getDataPesertaActionSuccess = (data) => ({
    type: GET_DATA_PESERTA_SUCCESS,
    payload: data,
});

export const getDataPesertaActionError = () => ({
    type: GET_DATA_PESERTA_ERROR,
});