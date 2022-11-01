import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from './store/BasketSlice'

const App = () => {

  const basket = useSelector(state => state.basket)

  console.log(basket)


  const products = [
    {
      id: 1,
      title: 'Product1',
      qty: 1,

  },
  {
      id: 2,
      title: 'Product-2',
      qty: 1,
      
  },
  {
      id: 3,
      title: 'Product-3',
      qty: 1,
      
  }
  ]



  const addProductFunc = (product) => {
        dispatch(addProduct(product))

  }

  const dispatch = useDispatch()


  return (
    <>
    {products?.map((product) => (
      <div className='item' style={{width:'200px', height:'100px', border: 'green solid'}}>
          <span>Product-5</span>
          <button onClick={() => addProductFunc(product)}>add to basket</button>
      </div>
    ))}
    
      
    </>
  )
}

export default App