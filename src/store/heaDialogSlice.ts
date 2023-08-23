import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface DialogPayload {
  dialogNumber: number
}

const initialState: DialogPayload = {
  dialogNumber: 1
}

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    updateDialogNumber: (state, action: PayloadAction<DialogPayload>) => {
      state.dialogNumber = action.payload.dialogNumber
    }
  }
})

export const { updateDialogNumber } = dialogSlice.actions
export default dialogSlice.reducer
