import { createSlice } from "@reduxjs/toolkit";


const basketSlice = createSlice({
    name: 'basket',
    initialState: [],
    reducers: {
        addProduct: (state , action) => {
            const newProduct = {
                id: action.payload.id,
                title: action.payload.title,
                qty: action.payload.qty
            }
            const hasProduct = !!state.find(item => item.id === action.payload.id)
            if(!hasProduct){
                return [...state, newProduct]
            }else{
                return state.map(item => {

                    if(item.id === action.payload.id) return {...item, qty: item.qty +1}
                    return item
                    })
            }

            
        }
    }
})





export const {addProduct} = basketSlice.actions

export default basketSlice.reducer