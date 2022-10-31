import { fetchKesadaran } from "../../services/kesadaran";
import {
    getDataKesadaranAction,
    getDataKesadaranActionError,
    getDataKesadaranActionSuccess
} from "../actions/kesadaranActions";

export const getDataKesadaranService = () => {
    return async (dispatch) => {
        dispatch(getDataKesadaranAction());
        return fetchKesadaran()
            .then((res) => {
                dispatch(getDataKesadaranActionSuccess(res.data));
            })
            .catch(() => {
                dispatch(getDataKesadaranActionError());
            });
    };
};