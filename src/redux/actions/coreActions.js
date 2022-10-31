import { SET_MODAL, RESET_MODAL } from '../types/coreTypes'

export const setModalAction = (data) => ({
    type: SET_MODAL,
    payload: data
});

export const resetModalAction = () => ({
    type: RESET_MODAL,
});