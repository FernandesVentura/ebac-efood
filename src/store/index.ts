import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'

import checkoutReducer from './reducers/checkout'
import cartReducer from './reducers/cart'
import paymentReducer from './reducers/payment'
import receiptReducer from './reducers/receipt'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        checkout: checkoutReducer,
        payment: paymentReducer,
        receipt: receiptReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>