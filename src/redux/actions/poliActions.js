import {
    GET_DATA_POLI,
    GET_DATA_POLI_ERROR,
    GET_DATA_POLI_SUCCESS
} from "../types/poliTypes";

export const getDataPoliAction = () => ({
    type: GET_DATA_POLI,
});

export const getDataPoliActionSuccess = (data) => ({
    type: GET_DATA_POLI_SUCCESS,
    payload: data,
});

export const getDataPoliActionError = () => ({
    type: GET_DATA_POLI_ERROR,
});