import React from 'react'
import Logo from '../assets/MovieLogo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex border-b-1 border-slate-100  space-x-8 items-center pl-3 pb-2'>
    <img src={Logo} alt="logo" className='w-[50px]  hover:cursor-pointer' />
    <Link to="/" className='text-sky-600 text-xl font-bold'>Movies</Link>
    <Link to="/watchlist" className='text-sky-600 text-xl font-bold'>Watchlist</Link>
   </div>

  )
}

export default Navbar