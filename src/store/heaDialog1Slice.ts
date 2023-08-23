import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface DialogState {
  clientName: string
  address: string
  country: string
  eircode: string
  logo: string
  imagePic: string
}

// Define the initial state
const initialState: DialogState = {
  clientName: '',
  address: '',
  country: '',
  eircode: '',
  logo: '',
  imagePic: ''
}

const dialogSlice1 = createSlice({
  name: 'heaDialog1',
  initialState,
  reducers: {
    updateDialog1: (state, action: PayloadAction<Partial<DialogState>>) => {
      return { ...state, ...action.payload }
    }
  }
})

export const { updateDialog1 } = dialogSlice1.actions
export default dialogSlice1.reducer
