import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AppContext } from '../context/Context'
import RelatedDoctors from './RelatedDoctors'

export default function MyAppointment() {

  const {docId} = useParams()
  console.log(docId)
  const {doctors,currencySymbol} = useContext(AppContext)

  const dayOfWeek = ["sun" , "mon", "tue" , "wed", "thu" , 'fri' , 'sat'] 

  const [docInfo,setDocInfo] =useState()
  const [docSlots,setDocSlots] = useState([])
  const [slotIndex,setSlotIndex] = useState(0)
  const [slotTime,setSlotTime] = useState('')
  console.log(slotIndex , slotTime)
  const getAvailableSlots = async () => {
    // Clear previous slots
    setDocSlots([]);
  
    // Getting current date
    let today = new Date();
  
    // Loop through the next 7 days
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
  
      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0); // End time is 9 PM
  
      // Set currentDate to appropriate start time
      if (i === 0) {
        // If it's today, start from the current time
        currentDate.setHours(today.getHours() >= 10 ? today.getHours() + 1 : 10);
        currentDate.setMinutes(today.getMinutes() >= 30 ? 30 : 0);
      } else {
        currentDate.setHours(10); // Start at 10 AM for other days
        currentDate.setMinutes(0);
      }
  
      let timeSlots = [];
  
      // Generate 30-minute slots until the end time
      while (currentDate < endTime) {
        // Format the time string
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  
        // Add slot to array
        timeSlots.push({
          datetime: new Date(currentDate), // Store the actual date object
          time: formattedTime // Store the formatted time
        });
  
        // Increment by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
  
      // Append the timeSlots for the day
      if (timeSlots.length > 0) {
        setDocSlots(prev => [...prev, timeSlots]); // Push the generated slots to docSlots
      }
    }
  };
  
  useEffect(()=>{
getAvailableSlots()
  },[docInfo])

  useEffect(()=>{
    console.log(docSlots)
  })

  



  useEffect(()=>{
    const fetchDocInfo = () =>{
      const docInfo = doctors.find((doc) => doc._id === docId)
      setDocInfo(docInfo)
    }
    fetchDocInfo()
  })
  
  console.log(docInfo)
  
  console.log(slotIndex)

  return docInfo && (
    (
      <><div className='flex flex-col sm:flex-row gap-4 mt-10'>
        <div>
          <img className='bg-primary w-full rounded' src={docInfo.image} alt="" />

        </div>

        <div className='flex-1 border border-gray-500 rounded bg-white mx-2 mt-[80px] sm:mt-0 p-5'>
          <p className='flex items-center gap-2 '>
            {docInfo.name}
            <img src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 mt-1  '>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'> {docInfo.experience}</button>
          </div>

          <div className=''>
            <div className='flex'>
              <p className='flex item-center gap-1 text-sm font-medium text-gray-500 '>About</p>
              <img src={assets.info_icon} alt="" />
            </div>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p>
            appointment fee : {currencySymbol}{docInfo.fees}
          </p>
        </div>
        {/*  */}

      </div><div className=' sm:pl-4 mt-4 font-medium text-gray-700'>
          <p>Booking slots</p>
          <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
            {docSlots.length && docSlots.map((item, index) => (
              <div key={index } onClick={()=>{setSlotIndex(index); setSlotTime('')}}   className={`flex flex-col items-center py-4 px-6 rounded-full cursor-pointer ${slotIndex === index ? "bg-primary text-white" : 'border border-gray-300 bg-white'}`} >
                <p>{item[0] && dayOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
                {/* {setSlotTime(0)} */}
              </div>
            ))}
          </div>
          <div className='flex items-center gap-3 overflow-x-scroll mt-4'>
            {docSlots.length && docSlots[slotIndex].map((item,index)=>(
              <p onClick={()=>setSlotTime(item.time)}  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? "bg-primary text-white" :"border border-gray-500" } `} key={index}>{item.time}</p>
            ))}
          </div>
          <button className='bg-primary p-3 rounded-full text-white mt-4 flex items-center'>Book an appointment</button>
        </div>

        <RelatedDoctors docId = {docId} speciality = {docInfo.speciality}/>
        </>
    )
  )
}

