import {configureStore} from '@reduxjs/toolkit'
import BasketReducer from './BasketSlice'

const store = configureStore({
    reducer: {basket: BasketReducer}
})


export default store