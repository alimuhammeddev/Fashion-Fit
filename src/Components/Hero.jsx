import React from 'react'
import { hero, whatsapp } from '../assets'

const Hero = () => {
  return (
    <section>
        <div>
            <h1 className='text-[#141415] text-[64px] text-center'>Find your <span className='text-[#FFCC4D]'>style</span> in our collection</h1>
            <p className='text-[24px] text-center text-[#141415]'>Fashion is a way of life. Experience fashion at its best as <br className='hidden lg:block'/> you shop from our collections </p>
        </div>
        <div className='mx-auto text-center mt-5'>
            <button className='bg-[#307098] w-[190px] h-[48px] text-[#ffffff]'>Shop now</button>
        </div>
        <div className='mt-5 flex justify-center relative'>
            <img src={hero} alt=""/>
            <div className="absolute top-1/2 lg:right-10 right-0 rounded-full transform translate-y-50 bg-white px-6 py-4 flex items-center space-x-1 lg:mt-5">
                <img src={whatsapp} alt="" />
                <p className="text-[#0A3B5A] text-xl -mt-1 font-medium">Chat with an expert</p>
            </div>
        </div>
    </section>
  )
}

export default Hero