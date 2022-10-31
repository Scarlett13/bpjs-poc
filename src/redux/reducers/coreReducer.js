import { SET_MODAL, RESET_MODAL } from "../types/coreTypes";

const initialModal = {
    type: 'error',
    title: 'Error Fetch Data',
    message: 'Data not found',
    show: false
};

const coreReducer = (state = initialModal, action) => {
    switch (action.type) {
        case SET_MODAL:
            return {
                type: action.payload.type,
                title: action.payload.title,
                message: action.payload.message,
                show: action.payload.show
            };
        case RESET_MODAL:
            return initialModal
        default:
            return state;
    }
};

export default coreReducer;