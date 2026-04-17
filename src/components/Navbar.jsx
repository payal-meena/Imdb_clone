import React from 'react'
import Logo from '../assets/MovieLogo.png'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex border-b-1 border-slate-100  space-x-8 items-center pl-3 pb-2'>
    <img src={Logo} alt="logo" className='w-[50px]  hover:cursor-pointer' />
    <NavLink to="/" className={({isActive}) => isActive ? "text-white bg-sky-600 px-3 py-1 rounded-lg text-xl font-bold" : "text-sky-600 text-xl font-bold"}>Movies</NavLink>
    <NavLink to="/watchlist" className={({isActive}) => isActive ? "text-white bg-sky-600 px-3 py-1 rounded-lg text-xl font-bold" : "text-sky-600 text-xl font-bold"}>Watchlist</NavLink>
   </div>

  )
}

export default Navbar