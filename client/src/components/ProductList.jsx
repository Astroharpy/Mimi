import React from 'react'
import ProductItem from './ProductItem'
import useProduct from '../hooks/useProduct'

const ProductList = () => {

    const {products} = useProduct()


  return (
    
      
        <ul className='grid grid-cols-2 px-4 gap-2 ' >
            {products.map(item => <ProductItem key={item.name} name={item.name} price={item.price}/>)}
        </ul>

  )
}

export default ProductList