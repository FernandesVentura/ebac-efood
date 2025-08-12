import { createSlice } from "@reduxjs/toolkit";

type ReceiptState = {
    isOpen: boolean
}

const initialState: ReceiptState = {
    isOpen: false
}

const receiptSlice = createSlice({
    name: 'receipt',
    initialState,
    reducers: {
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }
})

export const { open, close } = receiptSlice.actions
export default receiptSlice.reducer