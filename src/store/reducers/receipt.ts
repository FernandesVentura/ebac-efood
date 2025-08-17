import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ReceiptState = {
  isOpen: boolean
  orderId?: string
}

const initialState: ReceiptState = {
  isOpen: false
}

const receiptSlice = createSlice({
  name: 'receipt',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<string>) => {
      state.isOpen = true
      state.orderId = action.payload
    },
    close: (state) => {
      state.isOpen = false
      state.orderId = undefined
    }
  }
})

export const { open, close } = receiptSlice.actions
export default receiptSlice.reducer
