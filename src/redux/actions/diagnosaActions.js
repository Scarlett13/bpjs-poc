import {
    GET_DATA_DIAGNOSA,
    GET_DATA_DIAGNOSA_ERROR,
    GET_DATA_DIAGNOSA_SUCCESS
} from "../types/diagnosaTypes";

export const getDataDiagnosaAction = () => ({
    type: GET_DATA_DIAGNOSA,
});

export const getDataDiagnosaActionSuccess = (data) => ({
    type: GET_DATA_DIAGNOSA_SUCCESS,
    payload: data,
});

export const getDataDiagnosaActionError = () => ({
    type: GET_DATA_DIAGNOSA_ERROR,
});