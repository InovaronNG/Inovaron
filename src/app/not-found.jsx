"use client"
import React from 'react'
import Lottie from 'lottie-react'
import animationData from "../../public/not-found.json"
import Link from 'next/link'

const notFound = () => {
  return (
    <div className='w-full h-screen bg-gray-300 flex flex-col items-center justify-center'>
        <Lottie animationData={animationData} loop />
     <h1 className='font-extrabold text-2xl'>Coming soon</h1>
     <Link href={"/"} className='bg-blue-500 px-10 py-1.5 rounded-sm mt-3 text-white'>
     Go Home
     </Link>
    
    </div>
  )
}

export default notFound
