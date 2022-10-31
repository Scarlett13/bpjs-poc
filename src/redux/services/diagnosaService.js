import { fetchDiagnosa } from "../../services/diagnosa";
import { setModalAction } from "../actions/coreActions";
import {
    getDataDiagnosaAction,
    getDataDiagnosaActionError,
    getDataDiagnosaActionSuccess
} from "../actions/diagnosaActions";

export const getDataDiagnosaService = (keyword, start, limit) => {
    return async (dispatch) => {
        dispatch(getDataDiagnosaAction());
        return fetchDiagnosa(keyword, start, limit)
            .then((res) => {
                if (res.data.statuscode === 200) {
                    dispatch(getDataDiagnosaActionSuccess(res.data));
                } else throw res.data
            })
            .catch((err) => {
                dispatch(getDataDiagnosaActionError());
                if (err.metaData) {
                    dispatch(setModalAction({
                        type: 'error',
                        title: `Error! with code: ${err?.metaData?.code}`,
                        message: `Error fetch data Diagnosa with error message: ${err?.metaData?.message}`,
                        show: true
                    }))
                } else dispatch(setModalAction({
                    type: 'error',
                    title: `Error!`,
                    message: `Error when request API. Please try again`,
                    show: true
                }))
            });
    };
};