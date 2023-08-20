import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface cartState {
  value: any[],
  id: number
}

const initialState: cartState = {
  value: [],
  id: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<[]>) => {
      state.value.push(action.payload)
    },
    removeItems: (state, action:PayloadAction<{id:number}> ) => {
      console.log("a>>????", state)
      console.log("action.payload", action.payload)
         state.value = state.value.filter(item => item.id !== action.payload)

    },
  },
})

// Action creators are generated for each case reducer function
export const { addItems, removeItems } = cartSlice.actions

export default cartSlice.reducer