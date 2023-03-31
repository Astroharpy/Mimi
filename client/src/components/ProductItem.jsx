import React from 'react'
import { useNavigate } from 'react-router-dom'
const ProductItem = (props) => {
    const navigate  = useNavigate()

    const goToDetails =()=>{
        navigate(`/products/${props.name}`, {state:{...props}})
    }
  return (
   
        <li className='my-4 border pb-4'>
            <img onClick={goToDetails} src={`/images/${props.name}.jpeg`} alt={props.item} />
            <div className='text-center'>
                <p>{props.name}</p>
            <p className='font-bold'>R {props.price}.00</p>
            <button className='bg-green-400 text-white px-4 font-medium'>Buy Now</button>
            </div>
            
        </li>

  )
}

export default ProductItem