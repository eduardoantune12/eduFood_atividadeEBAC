import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Produto = {
    id: number
    nome: string
    preco: number
    imagem: string
}

type CartState = {
    items: Produto[]
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Produto>) {
            state.items.push(action.payload)
        },
        removeFromCart(state, action: PayloadAction<number>) {
            state.items = state.items.filter((item) => item.id !== action.payload)
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
