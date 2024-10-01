import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/Context';

const TopDoctors = () => {
  const { speciality } = useParams(); // Get the selected category from the URL
  const { doctors } = useContext(AppContext); // Get doctors data from context
  const navigate = useNavigate(); // Hook to navigate between routes

  const [filter, setFilter] = useState([]);

  // Apply filter based on selected speciality
  const applyFilter = () => {
    if (speciality) {
      const filteredDoctors = doctors.filter(
        (doc) => doc.speciality.toLowerCase() === speciality.toLowerCase()
      );
      setFilter(filteredDoctors);
    } else {
      setFilter(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className='flex flex-col items-center gap-4 text-gray-500'>
      <h1 className='text-3xl font-medium'>Top Doctors Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, explicabo?
      </p>

      {/* Main Layout with Flexbox: Left (Categories) and Right (Doctors List) */}
      <div className='w-full flex flex-col lg:flex-row gap-4 pt-5 px-3 sm:px-0'>
        
        {/* Left Side - Doctor Categories */}
        <div className='w-full lg:w-1/4 bg-gray-100 p-4 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4'>Categories</h2>
          <ul className='space-y-2'>
            <li
              onClick={() => navigate("/doctors/General%20physician")}
              className={`cursor-pointer hover:text-blue-500 ${speciality === 'General physician' ? 'text-indigo-600 font-bold' : ''}`}>
              General Physicians
            </li>
            <li
              onClick={() => navigate("/doctors/Gynecologist")}
              className={`cursor-pointer hover:text-blue-500 ${speciality === 'Gynecologist' ? 'text-indigo-600 font-bold' : ''}`}>
              Gynecologist
            </li>
            <li
              onClick={() => navigate("/doctors/Pediatricians")}
              className={`cursor-pointer hover:text-blue-500 ${speciality === 'Pediatricians' ? 'text-indigo-600 font-bold' : ''}`}>
              Pediatricians
            </li>
            <li
              onClick={() => navigate("/doctors/Dermatologist")}
              className={`cursor-pointer hover:text-blue-500 ${speciality === 'Dermatologist' ? 'text-indigo-600 font-bold' : ''}`}>
              Dermatologist
            </li>
            <li
              onClick={() => navigate("/doctors/Neurologist")}
              className={`cursor-pointer hover:text-blue-500 ${speciality === 'Neurologist' ? 'text-indigo-600 font-bold' : ''}`}>
              Neurologists
            </li>
          </ul>
        </div>

        {/* Right Side - Doctors List */}
        <div className='w-full lg:w-3/4 flex flex-wrap gap-4'>
          {filter.map((doc, index) => (
            <div
              key={index}
              className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-500 w-full sm:w-1/2 md:w-1/3 xl:w-1/5'>
              <img
                className='w-full h-48 object-cover'
                src={doc.image}
                alt={doc.name}
              />
              <div className='p-3'>
                <p className='text-green-500'>Available</p>
                <p className='font-bold text-lg'>{doc.name}</p>
                <p className='text-sm text-gray-400'>{doc.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDoctors;
