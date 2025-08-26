import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Prato[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const selectTotalPrice = (state: { cart: CartState }) => {
  return state.cart.items.reduce((total, item) => {
    if (item.preco) {
      return total + item.preco
    }
    return total
  }, 0)
}

export const { add, remove, open, close, clear } = cartSlice.actions
export default cartSlice.reducer
