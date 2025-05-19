import React from 'react'

const Main = () => {
  return (
    <div>
        <div className="img">
            {/* <img src="/background.jpg" alt="main" className='w-full h-[100vh] object-cover' /> */}
            <div className='flex justify-center items-center h-[70vh]  bg-cover bg-no-repeat bg-center' style={{ backgroundImage: "url('/background.jpg')" }}>
              <div className='flex items-center bg-black/50 w-screen h-full justify-center px-4'>
              <div className='flex flex-col'>
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

    </div>
  )
}

export default Main