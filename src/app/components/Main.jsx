import React from 'react'
import services from '../navigation/services'

const Main = () => {
  return (
    <div>
        <div className="img">
            {/* <img src="/background.jpg" alt="main" className='w-full h-[100vh] object-cover' /> */}
            <div className='flex justify-center items-center h-[70vh]  bg-cover bg-no-repeat bg-center' style={{ backgroundImage: "url('/background.jpg')" }}>
              <div className='flex items-center bg-black/50 w-screen h-full justify-center px-4'>
              <div className='flex flex-col '>
                    <h1 className='text-3xl font-bold text-white text-wrap md:w-130'>We Build Websites & Web Apps That Drives Results</h1>
                    <p className='font-semibold pt-2 text-white'>Tailored digital Solutions for business ready to grow</p>

                    <div className='pt-9 md:pt-5'>
                        <button className='bg-blue-900 text-white px-4 py-2 rounded-md mt-4'>Contact us</button>
                        <button className='bg-white text-blue-900 px-4 py-2 rounded-md mt-4 ml-4'>See Our Services</button>
                    </div>
                    <p className='pt-9 text-white'>Innovative. Simple. Fast </p>
                </div>
                <div className='hidden md:flex'>
                    <img src="/side.png" alt="main" className='w-full  object-cover scale-100' />
                    </div>
              </div>
            </div>
        </div>


        <div className='pb-8'>
            <h1 className='text-3xl  font-bold text-center pt-10  '>Our Services</h1>
            <div className='flex justify-center pt-2'>
            <div className=' w-30 border-b-2 border-b-blue-700'/>
            </div>
            <p className='text-center pt-2 text-gray-500 text-sm'>We offer a wide range of services to help you achieve your digital goals.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pt-10'>
              {services.map((items) => (
                
                  <div className='bg-white shadow-2xl px-4 rounded-md py-6'>
                    <div>
                        {items.icon}
                    </div>
                  <h2 className='text-xl font-bold text-center'>{items.name}</h2>
                  <p className='pt-2 text-center text-gray-600 text-sm'>{items.description}</p>
              </div>
              ))}
                </div>
        </div>
    </div>
  )
}

export default Main