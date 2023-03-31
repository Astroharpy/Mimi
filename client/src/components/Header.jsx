import React from 'react'
import { useState } from 'react'
import {Profile, Burger, Cross, Logo, BagIcon}   from './Icons'
import { Link } from 'react-router-dom'
import useProduct from '../hooks/useProduct'


const Header = () => {
    const [toggleCross, setToggleCross] = useState(false)
    const isLoggedIn= false
    const {bag} = useProduct();

    
    const toggleHandle = () =>{
        setToggleCross(!toggleCross)
    }
    
  return (
    <header className='flex w-screen justify-between px-4 p-2 sticky top-0 bg-black'>
        {toggleCross? <button onClick={toggleHandle}><Cross /> </button>:
         <button onClick={toggleHandle}><Burger /></button>}
        <Link to="/"><Logo /></Link>
        <nav className='flex'>
            {isLoggedIn? null : <Link className='mx-2'><Profile /></Link>}
            <Link to="/bag" className='flex pr-1'><BagIcon /> { bag.length > 0 ? <span className='text-white fixed top-0 right-2'>{bag.length}</span>: null}</Link>
        </nav>
    </header>
  )
}

export default Header