import React from 'react'
import Image from 'next/image'

export default function Flowers() {
  return (
    <div className='p-4'>
      <div className='flex flex-wrap -mx-3 mb-20 md:mb-40 border justify-center space-x-4'>

        <div className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 mb-24'>
          <div className='xl:flex xl:items-center xl:py-32 mb-8 bg-white rounded-3xl'><Image src="/Flower.jpeg" width={100} height={100} alt='third product' /></div>
            <a href='#'><p className='mb-4 text-xl leading-8 font-heading font-medium hover:underline'>Product</p></a>
            <p>Rating</p>
            <div className='flex flex-row'>
              <p>Strain</p>
              <p>Potency</p>
            </div>
            <div className='flex flex-row'>
              <p>THC</p>
              <p>CBD</p>
            </div>
            <div className='flex flex-row'>
              <p>WEIGHT</p> {/* Display weights available */}
            </div>
            <p className='text-xl text-blue-500 font-heading font-medium tracking-tighter'>Price</p>
        </div>

        <div className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 mb-24'>
          <div className='xl:flex xl:items-center xl:py-32 mb-8 bg-white rounded-3xl'><Image src="/Flower.jpeg" width={100} height={100} alt='third product' /></div>
            <a href='#'><p className='mb-4 text-xl leading-8 font-heading font-medium hover:underline'>Product</p></a>
            <p>Rating</p>
            <div className='flex flex-row'>
              <p>Strain</p>
              <p>Potency</p>
            </div>
            <div className='flex flex-row'>
              <p>THC</p>
              <p>CBD</p>
            </div>
            <div className='flex flex-row'>
              <p>WEIGHT</p> {/* Display weights available */}
            </div>
            <p className='text-xl text-blue-500 font-heading font-medium tracking-tighter'>Price</p>
        </div>

        <div className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-3 mb-24'>
          <div className='xl:flex xl:items-center xl:py-32 mb-8 bg-white rounded-3xl'><Image src="/Flower.jpeg" width={100} height={100} alt='third product' /></div>
            <a href='#'><p className='mb-4 text-xl leading-8 font-heading font-medium hover:underline'>Product</p></a>
            <p>Rating</p>
            <div className='flex flex-row'>
              <p>Strain</p>
              <p>Potency</p>
            </div>
            <div className='flex flex-row'>
              <p>THC</p>
              <p>CBD</p>
            </div>
            <div className='flex flex-row'>
              <p>WEIGHT</p> {/* Display weights available */}
            </div>
            <p className='text-xl text-blue-500 font-heading font-medium tracking-tighter'>Price</p>
        </div>


      </div>
    </div>
  )
}
