import {
    fetchPesertaJenisKartu,
    fetchPesertaNoKartu
} from "../../services/peserta";

import {
    getDataPesertaAction,
    getDataPesertaActionError,
    getDataPesertaActionSuccess
} from "../actions/pesertaActions";

import { setModalAction } from "../actions/coreActions";

export const getDataPesertaNoKartuService = (keyword) => {
    return async (dispatch) => {
        dispatch(getDataPesertaAction());
        return fetchPesertaNoKartu(keyword)
            .then((res) => {
                if (res.data.statusCode === 200) {
                    dispatch(getDataPesertaActionSuccess(res.data));
                } else throw res.data
            })
            .catch((err) => {
                dispatch(getDataPesertaActionError());
                if (err.metaData) {
                    dispatch(setModalAction({
                        type: 'error',
                        title: `Error! with code: ${err?.metaData?.code}`,
                        message: `Error fetch data Peserta with error message: ${err?.metaData?.message}`,
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

export const getDataPesertaJenisKartuService = (jenis, nomor) => {
    return async (dispatch) => {
        dispatch(getDataPesertaAction());
        return fetchPesertaJenisKartu(jenis, nomor)
            .then((res) => {
                if (res.data.statusCode === 200) {
                    dispatch(getDataPesertaActionSuccess(res.data));
                } else throw res.data
            })
            .catch((err) => {
                dispatch(getDataPesertaActionError());
                if (err.metaData) {
                    dispatch(setModalAction({
                        type: 'error',
                        title: `Error! with code: ${err?.metaData?.code}`,
                        message: `Error fetch data Peserta with error message: ${err?.metaData?.message}`,
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