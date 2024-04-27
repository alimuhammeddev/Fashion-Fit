import React from 'react'
import { accessories, beauty, fashion } from '../assets'

const Blog = () => {
  return (
    <section>
      <div>
        <h1 className='text-[#141415] text-center font-bold lg:text-[36px] text-[24px]'>Our Blog</h1>
        <h2 className='text-[#141415] lg:text-[24px] text-[17px] text-center'>Stay to date about fashion</h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:px-10 lg:gap-5 gap-7 mt-7'>
        <div>
          <img src={fashion} alt="" />
          <h1 className='text-[20px] font-semibold text-[#141415] mt-4'>The ultimate fashion guide is here...</h1>
          <p className='text-[16px] lg:pr-0 pr-1 mt-1'>The ultimate fashion guide will help you to learn how to put your outfits together and look great without breaking the bank. Save more and shop ... <span className='hover:underline text-[#307098]'><a href="#!">Read More</a></span></p>
        </div>

        <div>
          <img src={beauty} alt="" />
          <h1 className='text-[20px] font-semibold text-[#141415] mt-4'>The Beauty of Monochromic outfits...</h1>
          <p className='text-[16px] lg:pr-0 pr-1 mt-1'>Monochromic fashion can never go wrong, learn how to style your outfits to produce great looks. The first thing you need to know about this is you... <span className='hover:underline text-[#307098]'><a href="#!">Read More</a></span></p>
        </div>

        <div>
          <img src={accessories} alt="" />
          <h1 className='text-[20px] font-semibold text-[#141415] mt-4'>Pick the right accessories for your outfits...</h1>
          <p className='text-[16px] mt-1'>Pairing your outfits with the right accessories is a great way to upscale your fashion sense and look outstanding. Accessories are very ... <span className='hover:underline text-[#307098]'><a href="#!">Read More</a></span></p>
        </div>
      </div>

      <div className='mx-auto text-center mt-7'>
          <button className='bg-[#307098] w-[190px] h-[48px] text-[#ffffff] hover:text-[#307098] transition duration-500 ease-out hover:bg-[#ffffff] border border-[#307098]'>More blogs</button>
      </div>
    </section>
  )
}

export default Blog