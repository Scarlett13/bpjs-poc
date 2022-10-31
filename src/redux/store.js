import { configureStore } from '@reduxjs/toolkit'
import coreReducer from './reducers/coreReducer'
import diagnosaReducer from './reducers/diagnosaReducer'
import dokterReducer from './reducers/dokterReducer'
import kesadaranreducer from './reducers/kesadaranReducer'
import pesertaReducer from './reducers/pesertaReducer'
import poliReducer from './reducers/poliReducer'


export default configureStore({
    reducer: {
        diagnosa: diagnosaReducer,
        dokter: dokterReducer,
        kesadaran: kesadaranreducer,
        peserta: pesertaReducer,
        poli: poliReducer,
        modal: coreReducer
    },
})