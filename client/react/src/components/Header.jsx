import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='mt-5 flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 '>
      {/* left */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw]' >  
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book appointment <br /> with trusted doctors</p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light  '>
          <img className='w-28' src={assets.group_profiles} alt="" />
          <p>Lorem ipsum dolor, sit amet brconsectetur <br className='hidden sm:block'/> adipisicing elit. Totam, atque.</p>
        </div>
        <a href="#speciality" className='flex items-center gap-2 text-gray-600 bg-white rounded-full hover:scale-105  transition-all duration-300 w-auto p-3'>
          book appointment <img className='w-3' src={assets.arrow_icon}/>
        </a>

      </div>
      {/* right */}
      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header
