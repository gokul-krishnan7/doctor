import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { specialityData } from '../assets/assets'

const Speciality = () => {

 
  return (
    <div className='flex flex-col items-center py-16 text-gray-700' id="speciality">

      <h1 className='text-3xl font-medium'>Find by speciality</h1>
      <p className='m-2 sm:w-1/3 text-sm text-center'> adipisicing elit. Deleniti sed dignissimos aliquam architecto quae maiores velit eius iure quia dolores.</p>
      <div className='flex sm:justify-center gap-4 w-full pt-5 overflow-scroll'>
        {
          specialityData.map((data,index) =>(
            <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer hover:translate-y-[-10px] transition-all duration-500' to={`/doctors/${data.speciality}`}> 
            <img className='w-16 sm:w-24 mb-2' src={data.image} alt="" />
            <p>{data.speciality}< /p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Speciality
