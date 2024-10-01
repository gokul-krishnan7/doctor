import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/Context'

const RelatedDoctors = ({docId , speciality}) => {

  const {doctors} = useContext(AppContext)

  const [relDoc , setRelDoc] = useState([])

  const navigate = useNavigate()

  useEffect(()=>{
    if(doctors.length>0 && speciality){
      const doctorData = doctors.filter((doc)=>doc.speciality === speciality && doc._id !== docId) 
      console.log(doctorData)
      setRelDoc(doctorData)
    }

  },[doctors,speciality,docId])
  
  

  console.log(docId , speciality)
  return (
    <div className='mt-5 flex flex-col items-center gap-4 text-gray-500'>
      <h1 className='text-3xl font-medium'>Related doctors</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, explicabo?
      </p>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-5 px-3 sm:px-0'>
        {relDoc.slice(0,5).map((doc, index) => (
          <div
          onClick={()=>{navigate(`/appointment/${doc._id}`) ;scrollTo(0,0)}}
            key={index}
            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-500'>
            <img
              className='w-full h-48 object-cover'
              src={doc.image}
              alt={doc.name}
            />
            <div className='p-3'>
              <p className='text-green-500'>Available</p>
              <p className='font-bold text-lg text-black-700'>{doc.name}</p>
              <p className='text-sm text-gray-400'>{doc.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>{navigate(`/doctors`); scrollTo(0,0)}} className='bg-blue-50 text-gray-500 py-10 mt-10 rounded-full'>more</button>
    </div>
  )
}

export default RelatedDoctors
