import { configureStore } from '@reduxjs/toolkit'
import heaDialogReduxSliceReducer from './heaDialogSlice'
import { heaApi } from '../features/hea/api/heaApi'
import heaDialog1ReduxSliceReducer from './heaDialog1Slice'
import heaDialogModalSliceReducer from './heaDialogModal'

const store = configureStore({
  reducer: {
    [heaApi.reducerPath]: heaApi.reducer,
    dialog: heaDialogReduxSliceReducer,
    dialog1: heaDialog1ReduxSliceReducer,
    dialogModal: heaDialogModalSliceReducer
  },
  devTools: process.env.REACT_WEB_STATE === 'production' ? false : true,
  middleware: getDefaultMiddlewares =>
    getDefaultMiddlewares().concat(heaApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export default store
