import React from 'react'
import about, { vision } from '../navigation/about'

const Aboutus = () => {
  return (
    <div>
         <div>
          {about.map((rap)=> (
            <div className='flex flex-col justify-center items-center'>
              <div className='text-3xl  font-bold text-center pt-10 '>{rap.title}</div>
              <div className='border-b-2 border-b-blue-700 w-40 pt-3'/>
              <p className='text-center pt-2 text-gray-500 text-sm'>{rap.subtitle}</p>
             <div className='flex justify-center items-center mt- py-9 px-5 md:w-lg  shadow-lg'>
             <p className='text-center pt-2 text-gray-500 text-sm'><b>INOVARON</b> {rap.text}</p>
             </div>
            </div>
          ))}
        </div>
        <div>
          {vision.map((rap)=> (
            <div>
              <div>{rap.title}</div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Aboutus