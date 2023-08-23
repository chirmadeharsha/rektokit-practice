import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface DialogPayload {
  isDialogOpened: boolean
}

const initialState: DialogPayload = {
  isDialogOpened: false
}

const dialogModalSlice = createSlice({
  name: 'dialogModal',
  initialState,
  reducers: {
    updateDialogModal: (state, action: PayloadAction<DialogPayload>) => {
      state.isDialogOpened = action.payload.isDialogOpened
    }
  }
})

export const { updateDialogModal } = dialogModalSlice.actions
export default dialogModalSlice.reducer
