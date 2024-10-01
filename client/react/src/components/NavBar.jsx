import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
const NavBar = () => {
  const navigate = useNavigate()

  const [showMenu,setShowMenu] = useState(false)
  const [token , setToken] = useState(true)


  return (
    <div className="flex items-center justify-between mt-3">
      <img className='w-44 cursor-pointer' src={assets.logo} />
      <ul className='hidden md:flex item-start gap-5 font-medium'>
        <NavLink to="/">
          <li className='py-1'>Home</li>
          <hr className='hidden border-none outline-none h-0.5 bg-primary m-auto' />
        </NavLink>
        <NavLink to="/doctors">
          <li className='py-1'>All doctors</li>
          <hr className='hidden border-none outline-none h-0.5 bg-primary m-auto' />
        </NavLink>
        <NavLink to="/about">
          <li className='py-1'>About</li>
          <hr className=' hidden border-none outline-none h-0.5 bg-primary m-auto' />
        </NavLink>
        <NavLink to="/contact">
          <li className='py-1'>Contact</li>
          <hr className='hidden border-none outline-none h-0.5 bg-primary m-auto'/>
        </NavLink>
        

      </ul>
      <div className='flex items-center'>
      {
        token? <div className='flex items-center gap-2 cursor-pointer group relative'>
          <img src={assets.profile_pic} className='w-8 rounded-full ' alt="" />
          <img src={assets.dropdown_icon}  className="w-2.5" alt="" />
          <div className='absolute top-0 right-0 pt-14 text-base text-gray-600 z-20 hidden group-hover:block'>
            <div className='min-w-48 bg-ston flex rounded flex-col gap-4 p-4'>
            <p onClick={()=>navigate("/profile")} className='hover:text-black cursor-pointer'>My profile</p>
            <p onClick={()=>navigate("/my-appointments")} className='hover:text-black cursor-pointer'> MyAppointment</p>
            <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Log out</p>
            </div>
          </div>

        </div> :  <button onClick={()=>navigate("/login")} className='bg-primary text-white rounded-full px-8 py-3 font-light md:block'>Create account</button>
      }
      </div>
    </div>
  )
}

export default NavBar
