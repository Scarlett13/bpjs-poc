import { fetchDokter } from "../../services/dokter";
import {
    getDataDokterAction,
    getDataDokterActionError,
    getDataDokterActionSuccess
} from "../actions/dokterActions";

export const getDataDokterService = (start, limit) => {
    return async (dispatch) => {
        dispatch(getDataDokterAction());
        return fetchDokter(start, limit)
            .then((res) => {
                dispatch(getDataDokterActionSuccess(res.data));
            })
            .catch(() => {
                dispatch(getDataDokterActionError());
            });
    };
};