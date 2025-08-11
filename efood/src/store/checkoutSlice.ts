import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Address = {
    description: string
    city: string
    zipCode: string
    number: string
    complement?: string
}

type Delivery = {
    receiver: string
    address: Address
}

type CheckoutState = {
    delivery: Delivery | null
}

const initialState: CheckoutState = {
    delivery: null
}

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        setDelivery(state, action: PayloadAction<Delivery>) {
            state.delivery = action.payload
        },
        clearCheckout(state) {
            state.delivery = null
        }
    }
})

export const { setDelivery, clearCheckout } = checkoutSlice.actions
export default checkoutSlice.reducer
