import { fetchPoli } from "../../services/poli";

import {
    getDataPoliAction,
    getDataPoliActionError,
    getDataPoliActionSuccess
} from "../actions/poliActions";

export const getDataPoliService = (start, limit) => {
    return async (dispatch) => {
        dispatch(getDataPoliAction());
        return fetchPoli(start, limit)
            .then((res) => {
                dispatch(getDataPoliActionSuccess(res.data));
            })
            .catch(() => {
                dispatch(getDataPoliActionError());
            });
    };
};