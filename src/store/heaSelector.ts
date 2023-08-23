// ** Encapsulating State Shape With Selectors
import { RootState } from './index'
export const getDialogCount = (state: RootState) => state.dialog.dialogNumber
export const getDialog1Data = (state: RootState) => state.dialog1
export const getDialogModalData = (state: RootState) =>
  state.dialogModal.isDialogOpened
