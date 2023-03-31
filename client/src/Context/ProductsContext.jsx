import React from 'react'
import {createContext, useState } from 'react'


const ProductContext  = createContext()

export const ProductProvider = ({children}) =>{
    
    const products =[
        {price:100,name:"first"},
        {price:100,name:"second"},
        {price:100,name:"third"},
        {price:100,name:"fourth"},
        {price:100,name:"fifth"},
        {price:100,name:"sixth"},
        {price:100,name:"seventh"},
        {price:100,name:"eighth"},
        {price:100,name:"ninth"},
        {price:100,name:"tenth"}
    
        ]

        const orders = JSON.parse(localStorage.getItem("orders")) || []


        const [bag, setBag] = useState(orders)
        
        localStorage.setItem("orders", JSON.stringify(bag))

    const updateBag = (item) =>{
        const {name, quantity, price } = item
        const current = {name, quantity, price }
        setBag(prev =>{
            //finding duplicates
            const duplicates = prev.filter(duplicate => duplicate.name === current.name)
            const index = prev.findIndex(item => item.name === current.name)
            //if duplicates don't exist
            if(duplicates.length === 0)return [...prev, current]
            const uniqueEntries = prev.filter(entry => entry.name !== current.name)

            //if duplicates exist and the update is not from the cart
            if(!current.cart) return [...uniqueEntries, {name: duplicates[0].name, quantity: duplicates[0].quantity + current.quantity, price: current.price}]
        })
    }
    
    return <ProductContext.Provider value={{products, bag, updateBag}}>

        {children}
    </ProductContext.Provider>
}

export default ProductContext

