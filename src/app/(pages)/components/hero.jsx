import React from 'react'

const Hero = () => {
  return (
    <div>
        

<div id="default-carousel" class="relative w-full" data-carousel="slide">
    
    <div class="relative overflow-hidden rounded-lg md:h-96">

        <div class=" duration-700 ease-in-out" data-carousel-item>
        <div className='flex justify-center items-center h-[70vh]  bg-cover bg-no-repeat bg-center' style={{ backgroundImage: "url('/background.jpg')" }}>
              <div className='flex items-center bg-black/50 w-screen h-full justify-center px-4'>
              <div className='flex flex-col '>
                    <h1 className='text-3xl font-bold text-white text-wrap md:w-130'>We Build Websites & Web Apps That Drives Results</h1>
                    <p className='font-semibold pt-2 text-white'>Tailored digital Solutions for business ready to grow</p>

                    <div className='pt-9 md:pt-5'>
                        {/* <button className='bg-blue-900 text-white px-4 py-2 rounded-md mt-4'>Contact us</button> */}
                        <button className='bg-blue-900 text-white px-4 py-2 rounded-md mt-4'>See Our Services</button>
                    </div>
                    <p className='pt-9 text-white'>Innovative. Simple. Fast </p>
                </div>
                <div className='hidden md:flex'>
                    <img src="/side.png" alt="main" className='w-full  object-cover scale-100' />
                    </div>
              </div>
            </div>
        </div>
       
        <div class="hidden duration-500 ease-in-out" data-carousel-item>
            <img src="/background2.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
       
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/background.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
       

        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
       
       
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    
    
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    
    
    {/* <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button> */}
</div>

    </div>
  )
}

export default Hero