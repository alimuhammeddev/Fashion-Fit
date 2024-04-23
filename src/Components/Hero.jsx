import React from 'react'

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
    </section>
  )
}

export default Hero