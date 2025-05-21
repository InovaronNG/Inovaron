import React from 'react'
import services from '../navigation/services'
import Contactus from './Contactus'
import about, { vision } from '../navigation/about'
import Aboutus from './aboutus'
import Footer from './Footer'
import Hero from './hero'

const Main = () => {
  return (
    <div>
        <div className="img">
            {/* <img src="/background.jpg" alt="main" className='w-full h-[100vh] object-cover' /> */}
           <Hero/>
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
       <div>
        <Aboutus/>
       </div>
        <div className='bg-gray-900'>
           <Contactus />
        </div>
        <Footer/>
       
    </div>
  )
}

export default Main