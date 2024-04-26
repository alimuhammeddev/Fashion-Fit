import React from 'react'
import { hero, whatsapp } from '../assets'

const Hero = () => {
  return (
    <section>
        <div>
            <h1 className='text-[#141415] lg:text-[64px] text-[30px] font-semibold text-center'>Find your <span className='text-[#FFCC4D]'>style</span> in our collection</h1>
            <p className='lg:text-[24px] text-[18px] text-center text-[#141415]'>Fashion is a way of life. Experience fashion at its best as <br className='hidden lg:block'/> you shop from our collections </p>
        </div>
        <div className='mx-auto text-center mt-5'>
            <button className='bg-[#307098] w-[190px] h-[48px] text-[#ffffff]'>Shop now</button>
        </div>
        <div className='mt-5 flex justify-center relative'>
            <img src={hero} alt="" className='w-[1200px]'/>
            <div className="absolute top-1/2 lg:right-0 right-0 rounded-full transform translate-y-50 bg-white lg:px-6 lg:py-4 px-2 py-2 flex items-center space-x-1 lg:mt-5">
                <img src={whatsapp} alt="" />
                <p className="text-[#0A3B5A] lg:text-xl text-base font-medium">Chat with an expert</p>
            </div>
        </div>
    </section>
  )
}

export default Hero