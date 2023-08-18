// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

// export interface Cart{
//   id:Number;
//   name: {}
// }

// interface CartState{
//   cart : Cart[];
// }

// const initialState: CartState = {
//   cart : [],

// } 

// export const cartSlice = createSlice({
//   name :'cart',
//   initialState,
//   reducers:{
//     addCart:(state,action : PayloadAction<{title:{}}>)=>{
//            state.cart.push({
//             id: state.cart.length,
//             name: action.payload.title,
//            })
//     }
//   }
// })

// export const { addCart } = cartSlice.actions

// export default cartSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  value: []
}

const initialState: CartState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems: (state,action) => {
      console.log("state",state.value);
      console.log("action",action.payload);
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItems } = cartSlice.actions

export default cartSlice.reducer